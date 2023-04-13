import {connectDB, closeDB} from "../../utils/db"
import Animal from "../models/animal"


export default async function createAnimal(animalData) {
    await connectDB()
    try {
        const animal = new Animal(animalData)
        await animal.save()
    } catch (e) {
        console.log(e)
        throw new Error("Unable to create animal. Invalid data")
    }
    await closeDB()
}

