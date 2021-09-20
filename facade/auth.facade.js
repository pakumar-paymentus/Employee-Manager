//connect to database
import connectToDB from "../utils/db/db_connect";
import jwt from 'jsonwebtoken';
import registerSchema from '../utils/db/schema/resister_user_schema';

authenticateUser = async (email, password) => {
    const user = await userSchema.findOne({ email });
    if (user == undefined) {
        const resObj = {
            "dataObj": null,
            "messageObj": "you are not registered",
        }
        return resObj;
    } else if (user.password === password) {
        //generate JWT token and assign to user
        const helper = { "name": user.firstName, "email": email }
        const token = await jwt.sign(helper, process.env.JWT_KEY);

        const resObj = {
            "dataObj": {
                "token": token,
            },
            "messageObj": "Welcome to HomePage"
        }
        return resObj;
    } else {
        const resObj = {
            "dataObj": null,
            "messageObj": "email id or password is incorrect"
        }
        return resObj;
    }
}

export default authenticateUser;