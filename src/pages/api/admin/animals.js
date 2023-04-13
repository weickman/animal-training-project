import { readAnimal } from "../../../../server/mongodb/actions/readAnimal"
import verifyUser from "../../../../server/mongodb/actions/verifyUser";


export default async function handler(req, res) {
    const pageNumber = req.query.page;
    if(verifyUser(req, res)) {
        try {
            let animals = await readAnimal(pageNumber)
            return res.status(200).json(animals)
        } catch (e) {
            return res.status(500).json({success: false, message: e.message})
        }
    } else {
        return res.status(403).send("Please login")
    }
}
