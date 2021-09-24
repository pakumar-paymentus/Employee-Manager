import authenticateUser from "../../facade/auth.facade";

export default async function handler(req, res){
    if(req.method === 'POST'){
       const email = req.body.email;
       const password = req.body.password;
       const resObj = await authenticateUser(email, password);
        res.status(200).json(resObj);
    }

}