// step 1 -import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

//step 2-create a Schema that matches the data
const ContactsSchema = new Schema
    ({
        Name: String,
        Number: Number,
        Email: String
    },
        {
            collection: "contacts"
        }
)
//step3-create a Model using the Schema
const Model = mongoose.model("Contacts", ContactsSchema);

// step 4 -Export the Model -.this makes the file a module
export default Model;