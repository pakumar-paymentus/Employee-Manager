import registerMyUser from '../../facade/user.facade';

export default async function handler(req, res){
    const data = req.body;
    console.log(data);
    const resObj = await registerMyUser(data);
    console.log(resObj);
    res.send(201).json(resObj);
}