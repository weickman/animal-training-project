import {connectDB, closeDB} from "../../utils/db"
import Animal from "../models/animal"



export default async function readAnimal(pageNumber) {
    await connectDB();
    try {
        const objectsPerPage = 3
        if (pageNumber == 1){
            const animals = await Animal.find({}).limit(objectsPerPage) 
            return animals
        }
        const readTo = objectsPerPage * pageNumber-1
        const skip = await Animal.find({}, "_id").limit(readTo-2) 
    
        const minId = skip[skip.length-1]._id

        const animals = await Animal.find({_id: { $gt: minId }}).limit(objectsPerPage) //new
        return animals
    } catch (e) {
        console.log(e)
    }
}
closeDB()
export {readAnimal}