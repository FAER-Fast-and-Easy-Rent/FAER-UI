import { NextFetchEvent, NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const res = NextResponse.next();
  const { access, refresh } = req.cookies;
  if (!access && refresh) {
    // const response = await fetch(
    //   "https://3000-faerfastandeasy-faerui-6v5ixa3dzyg.ws-us34.gitpod.io/api/refresh",
    //   {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     method: "POST",
    //   }
    // );
    // console.log(response.json());
    // const response  = await fetch(process.env.API_URL + "/api/v1/token/refresh/", {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    //   body: JSON.stringify({ refresh: refresh }),
    // });
    // const token = await response.json()
    // res.cookie("access", token.access, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV !== "development",
    //   sameSite: "strict",
    //   maxAge: 60 * 30,
    //   path: "/",
    // });
  }
  return res;
}
