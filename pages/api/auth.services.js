import authenticateUser from "../../facade/auth.facade";
import cookieCutter from 'cookie-cutter';

export default async function handler(req, res){
    if(req.method === 'POST'){
       const email = req.body.email;
       const password = req.body.password;
       const resObj = await authenticateUser(email, password);
    //    if(resObj.data.auth){
    //     cookieCutter.set('myToken', resObj.data.token);
    //    }
        res.status(200).json(resObj);
    }

}