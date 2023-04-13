import {connectDB, closeDB} from "../../utils/db"
import Animal from "../models/animal"



export default async function readAnimal(pageNumber, objectsPerPage) {
    await connectDB();
    try {
        if (objectsPerPage == 0 || objectsPerPage == null){
            objectsPerPage = 5;
        }
        if (pageNumber == 1 || pageNumber == null){
            const animals = await Animal.find({}).limit(objectsPerPage) 
            const totalResults = await Animal.find()
            const len = totalResults.length
            const result = {
                animals: animals,
                showingResults: 1 + " to " + objectsPerPage + " out of " + len
            };
            return result
        }
        const readTo = objectsPerPage * pageNumber-1
        const skip = await Animal.find({}, "_id").limit(readTo-objectsPerPage+1) 
        const minId = skip[skip.length-1]._id

        const animals = await Animal.find({_id: { $gt: minId }}).limit(objectsPerPage) //new
        const start = readTo + 1 - objectsPerPage+1
        let fin = readTo+1
        const totalResults = await Animal.find()
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
            animals: animals,
            showingResults: start + " to " + fin + " out of " + len
        };
        return result
    } catch (e) {
        console.log(e)
    }
}
closeDB()
export {readAnimal}