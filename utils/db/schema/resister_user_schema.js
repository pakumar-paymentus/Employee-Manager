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
    password:{
        type: String,
        required: true
    },
    conformPassword:{
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    mobile: Number,
    dob: Date    
})

// if alreay require this will show error you do not override model
//for avoid that error if model is already connected return that model
export default mongoose.models.employees || mongoose.model('employees', registerSchema);
