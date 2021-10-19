import authenticateUser from "../../facade/auth.facade";
import cookie from 'cookie';

// import Cookies from 'universal-cookie';
export default async function handler(req, res){
    if(req.method === 'POST'){
    const {email, password} = req.body;
    const resObj = await authenticateUser(email, password);
       if(resObj.data.auth){
        res.setHeader('Set-Cookie',
            cookie.serialize('token', resObj.data.token, {
                httpOnly: true,
                secure: false,
                maxAge: 60*60,
                sameSite: 'strict',
                path: '/'
            })
        );
       }
       res.status(200).json(resObj);
        
    }

}