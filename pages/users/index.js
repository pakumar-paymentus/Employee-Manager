import styles from '../../styles/Users.module.css';
import {useState, useContext} from 'react';
import User from '../../components/user/User';


const DisplayUsers = ({users, token}) => {
    const [userData, setUserData] = useState(null);

    const cancelBtnHandler = () => {
        setUserData(null);
    }

    const showProfile = (user) => {
       setUserData(user);
    }


    return (
        !token ? <h1>You are not authorized</h1> :
        <>
        <div className={styles.body} >
         <div className={styles.main_container}  >
                <h2 className = {styles.title}>Users List</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Mobile</th>

                    </tr>
                </thead>
               <tbody>
               {
                
                   users.map(user => {
                       return (
                        <tr className={styles.userDataRow} onClick={() => showProfile(user)}>
                            <td key={user.id}>{user.firstName}</td>
                            <td key={user.id}>{user.lastName}</td>
                            <td key={user.id}>{user.gender}</td>
                            <td key={user.id}>{user.email}</td>
                            <td key={user.id}>{user.mobile}</td>
                        </tr> 
                       )
                   })
               }
               </tbody>
            </table>
            <div>{userData?.firstName}</div>
         </div>
           {
            
            userData && <User cancelBtnHandler = {cancelBtnHandler} userData={userData}/>
               
           }
        </div>
     
             
        </>
    );
}

export default DisplayUsers;


export async function getServerSideProps({req,res}){
    const port = process.env.PORT;
    console.log(port);
    const response = await fetch(`http://localhost:3000/api/users`);
    const data = await response.json();

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
       
     

    //getServerProps should return an object an object must contain props which is also a object
    return {
        props: {
            users: data,
            token: cookieObj.token || ""
        }
    }
}




