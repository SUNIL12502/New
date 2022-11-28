import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: 'Firstname field is required',
    },
    lastName:{
        type:String,
        required: 'Lastname field is required',
    },
    email:{
        type:String,
        required: 'Email field is required',
    },
    password:{
        type: String,
        required: 'Password field is required',
    },
    balance:{
        type: Number,
        default: "50000",
    }
},{versionKey: false });

// Creating a model from our schema
const model = mongoose.model('user', userSchema);

// Exporting the model as default
export default model;

