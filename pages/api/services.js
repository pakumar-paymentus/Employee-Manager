import connectToDB from "../../utils/db/db_connect";
import employees from "../../utils/db/schema/resister_user_schema";
connectToDB();

export default function handler(req, res){
    employees.find().then(employee => {
        res.status(200).json(employee);
    }) 
}

