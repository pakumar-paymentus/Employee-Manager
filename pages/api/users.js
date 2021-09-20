import connectToDB from "../../utils/db/db_connect";

connectToDB();

function users(req, res){
    res.status(200).json({name:"users"});
}

export default users;