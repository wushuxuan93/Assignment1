import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

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