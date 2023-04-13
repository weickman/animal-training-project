import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

export default async function connectDB() {
    if (mongoose.connections[0].readyState) return;
    console.log(process.env.DB_URL)

    await mongoose
        .connect(process.env.DB_URL)
        .catch((e) => {
            console.error("Error connecting to database.");
            throw e;
        });
};