import {connectDB, closeDB} from "../../utils/db"
import Training from "../models/trainingLog"

export default async function createLog(logData) {
    await closeDB();
    await connectDB()
    try {
        console.log("INSIDE OF TRY")
        console.log(logData)
        const log = new Training(logData)
        console.log(log);
        await log.save();
        await closeDB();
    } catch (e) {
        console.log(e.message + "in catch")
        await closeDB();
        throw new Error("Unable to create training log. Invalid data")
        
    }
    
    
}