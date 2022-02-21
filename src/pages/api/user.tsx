import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cookie from "cookie";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { access } = req.cookies;
    if (!access) {
      res.status(401).json({ message: "Not Authorized" });
    } else {
      const userConfig = {
        headers: {
          Authorization: "Bearer " + access,
        },
      };
      const { data: userData } = await axios.get(
        process.env.API_URL + "/api/v1/auth/user/me",
        userConfig
      );
      res.status(200).json({ user: userData.user, access: access });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
