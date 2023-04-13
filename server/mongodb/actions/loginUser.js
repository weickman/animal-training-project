import {connectDB, closeDB} from "../../utils/db"
import User from "../models/user"

export default async function loginUser(userData) {
    await connectDB()
    try {
        // const password = userData.password
        const password = 123
        const userEmail = "dsadsa"
        // const userEmail = {email: userData.email}
        const users = await User.count(
            {
                "email": "scacsac",
                "password": "$2a$10$e4Tl/Ja.zLV70mgMYRKYQ.2SOrEQY9HIVYomvKyWmoPag5SIFtW2e"
            } 
        )
       
        await closeDB()

        console.log(users)
        
        if (users > 0) {
           return true
        } else {
            return false
        }
       
    
        
    } catch (e) {
        console.log(e)
        throw new Error("Unable to login user. Invalid data")
    }
}