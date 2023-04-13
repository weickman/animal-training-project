import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import loginUser from "../../../../server/mongodb/actions/loginUser";

export default async function handler(req, res) {
    if(loginUser(req)) {
        const token = sign({ admin: true }, process.env.SECRET, { expiresIn: '60s' })

        const serialized = serialize("OurJWT", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 1000,
        });
        res.setHeader('Set-Cookie', serialized)
        res.status(200).send("JWT Created! " + token)
    } else {
        res.status(403).send("Unable to verify")
    }
}
