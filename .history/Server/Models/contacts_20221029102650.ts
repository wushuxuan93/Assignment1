// step 1 -import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

//step 2-create a Schema that matches the data
const ContactSchema = new Schema
    ({
        Contact_Name: String,
        Contact_Number: Number,
        Contact_Email: String
        
    },
        {
            collection: "contact"
        }
)
//step3-create a Model using the Schema
const Model = mongoose.model("Contact", ContactSchema);

// step 4 -Export the Model -.this makes the file a module
export default Model;