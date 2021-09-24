//connect to database
import connectToDB from '../utils/db/db_connect';
import userSchema from '../utils/db/schema/resister_user_schema';
connectToDB();

const registerMyUser = async (user) => {
    try {
        const userData = await new userSchema(user);
        await userData.save();
        const res = {
            "data": userData,
            "error": null,
            "message": "You are now registered"
        };
        return res;

    } catch (err) {
        const res = {
            "data": null,
            "error": err,
            "message": "email is already registered"
        }
        return res
    }
}

export default registerMyUser;