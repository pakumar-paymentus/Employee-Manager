export default function handler(req, res){
    if(req.method === 'POST'){
        const email = req.body.email;
        res.status(201).json({"email": email});
    }

}