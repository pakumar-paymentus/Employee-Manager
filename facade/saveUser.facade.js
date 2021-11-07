//connect to database
import connectToDB from '../utils/db/db_connect';
import userSchema from '../utils/db/schema/resister_user_schema';
connectToDB();

const saveUser = async (user) => {
    try {
        const userUp = await userSchema.find({email:user.userEmail})
        
        const res = {
            "data": userUp,
            "error": null,
            "message": "You are now registered"
        };
        return res;

    }catch(err){
        console.log(err);
    }
    
    return res;
    
}

export default saveUser;