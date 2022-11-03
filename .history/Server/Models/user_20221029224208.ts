// step 1 -import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

//step 2-create a Schema that matches the data
const UserSchema = new Schema
    ({
        DisplayName: String,
        username: String,
        EmailAddress: String,
        Created:
        {
           type: Date,
           default: Date.now()
        },
        Updated:
        {
           type: Date,
           default: Date.now()
        }
    },
        {
           collection: "users"
        });

//step3-create a Model using the Schema
const Model = mongoose.model("User", UserSchema);

// step 4 -Export the Model -.this makes the file a module
export default Model;