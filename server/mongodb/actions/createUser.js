import {connectDB, closeDB } from "../../utils/db"
import User from "../models/user"
import bcrypt from "bcryptjs"

export default async function createUser(userData) {
    await connectDB()
    try {
        console.log("Inside of try")
        const salt = await bcrypt.genSalt(10)
        userData.password = await bcrypt.hash(userData.password, salt)
        const user = new User(userData)
        console.log(user)
        await user.save()
    } catch (e) {
        console.log("In catch")
        throw new Error("Unable to create user. Invalid data")
    }
    await closeDB()
}