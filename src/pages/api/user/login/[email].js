import checkMethod from "../../../../../server/utils/checkMethod"
import {connectDB, closeDB} from "../../../../../server/utils/db"
import User from "../../../../../server/mongodb/models/user"
import bcrypt from "bcryptjs"


export default async function handler(req, res) {
    // checkMethod(["POST"], req.method)
    await connectDB()
    try {

        const { email } = req.query
        const { password } = req.query
        const userEmail = {email: email}
        const attemp = await User.findOne(userEmail)
        // console.log(attemp)
        if (attemp == null) {
            await closeDB()
            return res.status(200).send("Invalid Username")
        } else {
            const hashedPass = attemp.password 
            await closeDB()
            bcrypt.compare(password, hashedPass, function(err, result) {
                    if (result) {
                    return res.status(200).send("Sucessfully logged user in")
                   } 
                }); 
        }
        return res.status(403).send("User information invalid")

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