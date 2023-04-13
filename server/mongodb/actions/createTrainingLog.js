import {connectDB, closeDB} from "../../utils/db"
import Training from "../models/trainingLog"

export default async function createLog(logData) {
    await connectDB()
    try {
        console.log("INSIDE OF TRY")
        console.log(logData)
        const log = new Training(logData)
        console.log(log);
        await log.save()
    } catch (e) {
        console.log("in catch")
        throw new Error("Unable to create training log. Invalid data")
    }
    await closeDB()
}