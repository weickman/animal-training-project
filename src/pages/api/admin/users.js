import {readUsers} from "../../../../server/mongodb/actions/readUsers"
import verifyUser from "../../../../server/mongodb/actions/verifyUser";
import checkMethod from "../../../../server/utils/checkMethod"

export default async function handler(req, res) {
    const pageNumber = req.query.page;
    checkMethod(req, res, "GET")
    if (verifyUser(req, res)){
        try {
            let users = await readUsers(pageNumber)
            return res.status(200).json(users)
        } catch(e) {
            return res.status(500).json({success: false, message: e.message})
        }
    } else {
         return res.status(403).send("Please login")
    }
}