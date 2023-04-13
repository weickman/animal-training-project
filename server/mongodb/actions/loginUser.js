import {connectDB, closeDB} from "../../utils/db"
import User from "../models/user"
import bcrypt from "bcryptjs"

export default async function loginUser(userData) {
    await connectDB()
    let isLogin = false;
    try {
        const password = userData.password
        const userEmail = {email: userData.email}

        const attemp = await User.findOne(userEmail)

        await closeDB()
        console.log(userData.password)
        console.log(attemp.password)
        await bcrypt.compare(userData.password, attemp.password, function(err, result) {
            if (result) {
                console.log("first true")
                isLogin = true
           } 
        }); 
        console.log("second false")
    } catch (e) {
        console.log(e)
        throw new Error("Unable to login user. Invalid data")
    }
    console.log(isLogin)
    return isLogin

}