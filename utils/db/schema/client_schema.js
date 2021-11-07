import mongoose from 'mongoose';
import validator from 'validator';

const clientSchema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true,
        unique: [true, "Email already exist",],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
})

// if alreay require this will show error you do not override model
//for avoid that error if model is already connected return that model
    
export default mongoose.models.Clients || mongoose.model("Clients", clientSchema); 
