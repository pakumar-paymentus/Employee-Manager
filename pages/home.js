import React, {useState, useEffect} from 'react';
import AuthNavbar from '../components/AuthNavbar/AuthNavbar';
import styles from '../styles/homepage.module.css';
import jwt from 'jsonwebtoken';
import { useUserContext } from './context/state';
import User from '../components/user/User'
import Users from '../components/Users/Users';
import axios from 'axios';

const home = ({ token, userName }) => {
    //handling welcome msg and show all users on click of users 
    const {usersContext, welcomeContext} = useUserContext();
    const {showUsers, setShowUsers} = usersContext;
    const {showWelcome, setShowWelcome} = welcomeContext;
    
    //maintain variables for showing pagination of users 
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currPage, setCurrPage] = useState(0);
    
    const usersPerPage = 10;
    const pageVisited = currPage * usersPerPage;

    useEffect(() => {
        const fetchUsers = async() => {
            setLoading(true);
            const res = await axios.get('/api/users');
            setAllUsers(res.data);
            setLoading(false);
        }
        fetchUsers();
    }, []);

    const currUsers = allUsers.slice(pageVisited, pageVisited+usersPerPage);

    

    return (
        
        !token ? <h1>You are not authorized</h1> : <>
        <div className={styles.body}>
        <AuthNavbar/>
        <div className={styles.main_content}>
           {
            showWelcome && <h1 style={{textTransform:'capitalize'}}>Welcome {userName}</h1>
           } 
            {
                showUsers && <div>
                <Users currUsers={currUsers} loading={loading} numberOfUsers = {allUsers.length} usersPerPage={usersPerPage} setCurrPage={setCurrPage}/>
                </div>
            }
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