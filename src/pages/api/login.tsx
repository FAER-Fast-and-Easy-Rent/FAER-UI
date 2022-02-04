import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import cookie from 'cookie'

export default async function login(req: NextApiRequest, res: NextApiResponse) {

    let accessToken = null;

    if (req.method === 'POST') {
        const { email, password } = req.body

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        const body = {
            email,
            password
        }
        try {
            const { status, data } = await axios.post(process.env.API_URL + '/api/v1/token/', body, config)
            if (status === 200) {
                accessToken = data.access
                res.setHeader('Set-Cookie', cookie.serialize('access', data.access, { httpOnly: true, secure: process.env.NODE_ENV !== "development", sameSite: 'strict', maxAge: 60 * 30, path: '/' }))
                res.setHeader('Set-Cookie', cookie.serialize('refresh', data.refresh, { httpOnly: true, secure: process.env.NODE_ENV !== "development", sameSite: 'strict', maxAge: 60 * 60 * 24, path: '/' }))
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);
                return res.status(401).json(error.response.data)
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.error(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', error.message);
            }
            console.error(error.config);

            return res.status(500).json({ message: 'Something went wrong' })
        }

        if (accessToken) {
            const userConfig = {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            }

            const { data: userData } = await axios.get(process.env.API_URL + '/api/v1/auth/user/me', userConfig)
            console.log(userData)

            res.status(200).json({ user: userData, access: accessToken })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }
}