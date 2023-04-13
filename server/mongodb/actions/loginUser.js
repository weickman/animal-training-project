import {connectDB, closeDB} from "../../utils/db"
import User from "../models/user"

export default async function loginUser(userData) {
    await connectDB()
    try {
        const password = userData.password
        const userEmail = {email: userData.email}
        const attemp = await User.findOne(userEmail)
        const users = await User.count(userData)
        await closeDB()
        if (users > 0) {
            if (attemp.password == password) {
                return true
            }
        } else {
            return false
        }
    
        
    } catch (e) {
        console.log(e)
        throw new Error("Unable to login user. Invalid data")
    }
}