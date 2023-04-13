import { Linter } from "eslint"
import {connectDB, closeDB} from "../../utils/db"
import User from "../models/user"


const readUsers = async (pageNumber, objectsPerPage) => {
    await connectDB()
    try {
        if (objectsPerPage == 0 || objectsPerPage == null){
            objectsPerPage = 5;
        }
        
        if (pageNumber == 1 || pageNumber == null){
           const users = await User.find({}, "_id firstName lastName").limit(objectsPerPage) 
           const totalResults = await User.find()
           const len = totalResults.length
           const result = {
               users: users,
               showingResults: 1 + " to " + objectsPerPage + " out of " + len
           };
           return result
        }
        const readTo = objectsPerPage * pageNumber-1
        const skip = await User.find({}, "_id").limit(readTo-objectsPerPage+1) //new
        const minId = skip[skip.length-1]._id

        const users = await User.find({_id: { $gt: minId }}, "_id firstName lastName").limit(objectsPerPage) //new
        const start = readTo + 1 - objectsPerPage+1
        let fin = readTo+1
        const totalResults = await User.find()
        const len = totalResults.length
        if (start > len){
            const result = {
                message: "No more results to display"
            }
            return result;
        }
        if (fin > len){
            fin = len;
        }
        const result = {
            users: users,
            showingResults: start + " to " + fin + " out of " + len
        };
        return result
    } catch(e) { 
        console.log(e)
    }
}
closeDB()
export {readUsers}
