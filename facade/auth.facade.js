//connect to database
import connectToDB from '../utils/db/db_connect';
import jwt from 'jsonwebtoken';
import registerSchema from '../utils/db/schema/resister_user_schema';
connectToDB();

const authenticateUser = async (email, password) => {
    const user = await registerSchema.findOne({ email });
    if (!user) {
        const res = {
            "data": null,
            "message": "you are not registered",
        }
        return res;
    } else if (user.password === password) {
        //generate JWT token and assign to user
        const helper = { "name": user.firstName, "email": email }
        const token = await jwt.sign(helper, process.env.JWT_KEY);
        const res = {
            "data": {
                "auth": true, 
                "token": token,
            },
            "message": "Welcome to HomePage"
        }
        return res;
    } else {
        const res = {
            "data":{
                "auth" : "false"
            },
            "message": "Email id or Password is incorrect"
        }
        return res;
    }
}

export default authenticateUser;