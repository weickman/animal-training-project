import {connectDB, closeDB} from "../../utils/db"
import User from "../models/user"


const readUsers = async (pageNumber) => {
    await connectDB()
    try {
        if (pageNumber == 1){
            const users = await User.find({}, "_id firstName lastName").limit(3) 
            return users
        }
        const objectsPerPage = 3
        const readTo = objectsPerPage * pageNumber-1
        const skip = await User.find({}, "_id").limit(readTo-2) //new
        const minId = skip[skip.length-1]._id

        const users = await User.find({_id: { $gt: minId }}, "_id firstName lastName").limit(objectsPerPage) //new
        return users
    } catch(e) { 
        console.log(e)
    }
}
closeDB()
export {readUsers}

//

