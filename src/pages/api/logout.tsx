import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        res.setHeader('Set-Cookie', [cookie.serialize('access', '', {
            httpOnly: true,
            secure: false,
            expires: new Date(0),
            sameSite: 'strict',
            path: '/'
        }), cookie.serialize('refresh', '', {
            httpOnly: true,
            secure: false,
            expires: new Date(0),
            sameSite: 'strict',
            path: '/'
        })])
        res.status(200).json({ message: 'User has been logged out' })
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }
}