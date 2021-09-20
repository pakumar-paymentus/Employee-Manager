//connect to database
import connectToDB from "../utils/db/db_connect"; // register user schema
import registerSchema from '../utils/db/schema/resister_user_schema';

const registerMyUser = async (user) => {
    try {
        const userData = await new registerSchema(user);
        await userData.save();
        resObj = saveData = {
            "dataObject": userData,
            "errorObj": null,
            "messageObj": "You are now registered"
        };
        return resObj;

    } catch (err) {
        resObj = {
            "dataObject": null,
            "errorObj": err,
            "messageObj": "email or phone already registered, if not try again later"
        }
        return resObj
    }
}

export default registerMyUser;