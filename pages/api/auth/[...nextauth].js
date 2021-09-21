import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';


export default NextAuth({
    database: process.env.MONGO_URI,
    session:{
        jwt: true
    },
    jwt:{
        secret: process.env.JWT_KEY
    }
})