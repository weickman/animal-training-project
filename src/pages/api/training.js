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
            await createTrainingLog(req.body)
        } catch (e) {
            return res.status(500).json({success: false, message: e.message})
        }
        return res.status(201).json({success: true, message: "Successfully created an animal"})
    } else {
        return res.status(403).send("Please login")
    }
}