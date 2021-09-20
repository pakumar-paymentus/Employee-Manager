import mongoose from 'mongoose';
import validator from 'validator';

const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist",],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
    age: Number,
    gender: String,
    mobile: Number,
    dob: Date    
})
