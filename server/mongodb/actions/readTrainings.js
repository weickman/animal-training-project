import {connectDB, closeDB} from "../../utils/db"
import Training from "../models/trainingLog"


const readTrainings = async (pageNumber) => {
    await connectDB()
    try {
        if (pageNumber == 1){
            const trainings = await Training.find({}).limit(3) 
            return trainings
        }
        const objectsPerPage = 3
        const readTo = objectsPerPage * pageNumber-1
        const skip = await Training.find({}, "_id").limit(readTo-2) 
        const minId = skip[skip.length-1]._id
        const trainings = await Training.find({_id: { $gt: minId }}).limit(objectsPerPage) //new
        return trainings
    } catch(e) { 
        console.log(e)
    }
}
closeDB()
export {readTrainings}