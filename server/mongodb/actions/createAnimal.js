import {connectDB, closeDB} from "../../utils/db"
import Animal from "../models/animal"


export default async function createAnimal(animalData) {
    await closeDB()
    await connectDB()
    try {
        console.log("INSIDE OF TRYY")
        console.log(animalData)
        const animal = new Animal(animalData)
        console.log(animal)
        await animal.save()
    } catch (e) {
        console.log(e)
        throw new Error("Unable to create animal. Invalid data")
    }
    await closeDB()
}

