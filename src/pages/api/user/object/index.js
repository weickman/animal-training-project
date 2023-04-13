import checkMethod from "../../../../../server/utils/checkMethod"
import {connectDB, closeDB} from "../../../../../server/utils/db"
import User from "../../../../../server/mongodb/models/user"
import bcrypt from "bcryptjs"


export default async function handler(req, res) {
    // checkMethod(["POST"], req.method)
    await connectDB()
    try {
        console.log("INSIDE OF TRY")
        console.log(req.body)
        console.log(req.body.email)
        let email  = req.body.email
        const userEmail = {email: email}
        const attemp = await User.findOne(userEmail)
        // console.log(attemp)
        if (attemp == null) {
            console.log("invalid user")
            await closeDB()
            return res.status(403).send("Invalid Email")
        } else {
            await closeDB()

            console.log("success")
            return res.status(200).send(attemp._id)
        }

    } catch (e) {
        return res.status(500).json({success: false, message: e.message})
    }
}
  


// export default async function handler(req, res) {
//     checkMethod(["POST"], req.method)
//     await connectDB()
//     try {
//         let userData = req.body
//         const password = userData.password
//         const userEmail = {email: userData.email}

//         const attemp = await User.findOne(userEmail)

//         await closeDB()
//         console.log(userData.password)
//         console.log(attemp.password)
//         bcrypt.compare(userData.password, attemp.password, function(err, result) {
//             if (result) {
//             return res.status(200).json({success: true, message: "Successfully logged user in"})
//            } else {
//             return res.status(403).json({success: false, message: "User information invalid"})
//         }
//         }); 
//         console.log("second false")
//     } catch (e) {
//         console.log(e)
//         return res.status(500).json({success: false, message: e.message})
//     }
   
// }