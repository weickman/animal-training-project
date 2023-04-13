import {connectDB, closeDB} from "../../utils/db"
import Training from "../models/trainingLog"


const readTrainings = async (pageNumber, objectsPerPage) => {
    await connectDB()
    try {
        if (objectsPerPage == 0 || objectsPerPage == null){
            objectsPerPage = 5;
        }
        
        if (pageNumber == 1 || pageNumber == null){
            const trainings = await Training.find({}).limit(objectsPerPage) 
            const totalResults = await Training.find()
            const len = totalResults.length
            const result = {
                trainings: trainings,
                showingResults: 1 + " to " + objectsPerPage + " out of " + len
            };
            return result
        }
        const readTo = objectsPerPage * pageNumber-1
        const skip = await Training.find({}, "_id").limit(readTo-objectsPerPage+1) 
        const minId = skip[skip.length-1]._id

        const trainings = await Training.find({_id: { $gt: minId }}).limit(objectsPerPage) //new
        const start = readTo + 1 - objectsPerPage+1
        let fin = readTo+1
        const totalResults = await Training.find()
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
            trainings: trainings,
            showingResults: start + " to " + fin + " out of " + len
        };
        return result
        
        
    } catch(e) { 
        console.log(e)
    }
}
closeDB()
export {readTrainings}