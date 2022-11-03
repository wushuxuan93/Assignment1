// step 1 -import Mongoose
import mongoose, { PassportLocalSchema }  from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';

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
        
declare global
{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }
}

//step 3 - plugin the passport local mongoose module
UserSchema.plugin(passportLocalMongoose)

//step 4 - create a Model using the Schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

//step 5 -Export the Model -.this makes the file a module
export default Model;