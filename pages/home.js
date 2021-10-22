import AuthNavbar from '../components/AuthNavbar/AuthNavbar';
import styles from '../styles/homepage.module.css';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { useState } from 'react';

const home = ({ token, userName }) => {
    const [showUserStatus, setShowUserStatus] = useState(false);
    return (
        
        !token ? <h1>You are not authorized</h1> : <>
        <div className={styles.body}>
        <AuthNavbar setShowUserStatus = {setShowUserStatus} />
        <div className={styles.main_content}>
            <h1>Welcome {userName}</h1>
        </div>
        </div>
        </>

        
    )
}

export default home;
export async function getServerSideProps({ req, res }) {

    let pairs = req.headers.cookie.split(";");
    let splittedPairs = pairs.map(cookie => cookie.split("="));
    const cookieObj = splittedPairs.reduce(function (obj, cookie) {
        // cookie[0] is the key of cookie
        // cookie[1] is the value of the cookie
        // decodeURIComponent() decodes the cookie
        // string, to handle cookies with special
        // characters, e.g. '$'.
        // string.trim() trims the blank spaces
        // auround the key and value.
        obj[decodeURIComponent(cookie[0].trim())]
            = decodeURIComponent(cookie[1].trim());

        return obj;
    }, {})
        let payload; 
        if(cookieObj.token){
         payload = await jwt.verify(cookieObj.token, process.env.JWT_KEY);
        }
    return {
        props: {
            token: cookieObj.token|| "",
            userName: !payload ? "" : payload.name

        }

    }
}