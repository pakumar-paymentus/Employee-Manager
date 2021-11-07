import connectToDB from '../utils/db/db_connect';
import clientSchema from '../utils/db/schema/client_schema';
connectToDB();

const registerMyClient = async (client) => {
    try {
        const clientData = await new clientSchema(client);
        await clientData.save();
        const res = {
            "data": clientData,
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

export default registerMyClient;