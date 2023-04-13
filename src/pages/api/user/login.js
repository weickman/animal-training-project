// import loginUser from "../../../../server/mongodb/actions/loginUser"
// import checkMethod from "../../../../server/utils/checkMethod"

// export default async function handler(req, res) {
//     try {
//         // checkMethod(["POST"], req.method)
//         let isLogin = loginUser(req.body)
//         if (isLogin) {
//             return res.status(200).json({success: true, message: "Successfully logged user in"})
//         } else {
//             return res.status(403).json({success: false, message: "User information invalid"})
//         }
//     } catch(e) {
//         return res.status(500).json({success: false, message: e.message})
//     }

// }