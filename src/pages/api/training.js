import createTrainingLog from "../../../server/mongodb/actions/createTrainingLog";
import verifyUser from "../../../server/mongodb/actions/verifyUser";
import checkMethod from "../../../server/utils/checkMethod"


export default async function handler(req, res) {
    if(verifyUser(req, res)) {
        try {
            checkMethod(["POST"], req.method)
            if (req.body.animal == req.body.user.animal) {
                return res.status(400).json({success: false, message: "the training log animal is not owned by specified user"});
            }
            console.log(req.body)
            await createTrainingLog(req.body)
            return res.status(200).send("Successfully created an animal")
        } catch (e) {
            return res.status(500).send(e.message)
        }
        return res.status(200).send("Successfully created an animal")
    } else {
        return res.status(403).send("Please login")
    }
}