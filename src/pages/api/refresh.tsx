import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { access, refresh } = req.cookies;
    if (!access && refresh) {
      res.status(401).json({ message: "Not Authorized" });
    } else {
      const response = await fetch(
        process.env.API_URL + "/api/v1/token/refresh/",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ refresh: refresh }),
        }
      );
      const token = await response.json();

      cookie.serialize("access", token.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 30,
        path: "/",
      });

      res.status(200).json({ message: "Success" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
