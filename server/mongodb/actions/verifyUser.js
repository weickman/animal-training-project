import { verify } from "jsonwebtoken";
import {connectDB, closeDB} from "../../utils/db";

export default async function verifyUser(req, res) {
    await connectDB()
    const jwt = req.cookies.OurJWT
    console.log(jwt)
    try {
        const check = verify(jwt, proccess.env.secret)
        return check
    } catch (e) {
        return e
    }
}