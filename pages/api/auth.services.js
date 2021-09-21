import authenticateUser from "../../facade/auth.facade";
export default function handler(req, res){
    if(req.method === 'POST'){
       const email = req.body.email;
       const password = req.body.password;
       const data = req.body;
       authenticateUser(email, password)
       .then((resObj) => {
           res.status(200).json({"auth": "completed"})
       })
       .catch(err => {res.json({'error': err})})
       
    }

}