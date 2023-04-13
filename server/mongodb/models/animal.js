import mongoose from "mongoose"

const animalSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    }, 
    hoursTrained: { 
        type: Number,
        required: false
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectID,
        required: false
    }, 
    dateOfBirth: {
        type: Date,
        required: false
    }, 
    profilePicture: {
        type: String,
        required: false
    }
  })

  export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema)

  //made required false for testing purposes -- deleted id param

