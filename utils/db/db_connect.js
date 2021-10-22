import mongoose from 'mongoose';

const connectToDB = () => {
    //if already connected return 
    if(mongoose.connections[0].readyState){
        console.log('already connected');
        return;
    }
    // connect to localhost
    mongoose.connect("mongodb://localhost:27017/CompanyDB", {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })

    mongoose.connection.on('connected', () => {
        console.log("connected to database");
    })
    mongoose.connection.on('error', (err) => {
        console.log("error connecting to database", err)
    })
}

export default connectToDB;
