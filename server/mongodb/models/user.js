import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    
        firstName: { // user's first name
            type: String, 
            required: true
        }, 
        lastName: { // user's last name
            type: String,
            required: true
        }, 
        email: { // user's email
            type: String,
            required: true
        }, 
        password: { // user's password used only in level 3 and beyond
            type: String,
            required: true,
        }, 
        profilePicture: { // pointer to user's profile picture in cloud storage --> used in Expert level
            type: String 
        }
      
})

export default mongoose.models?.User || mongoose.model("User", userSchema)