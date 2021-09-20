const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => {
        console.log("connected to database");
    })
    mongoose.connection.on('error', (err) => {
        console.log("error connecting to database", err)
    })
}

export default connectToDB; 