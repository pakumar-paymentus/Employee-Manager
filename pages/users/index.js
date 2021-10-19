import styles from '../../styles/Users.module.css';
import {useState, useContext} from 'react';
import User from '../../components/user/User';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
import Link from 'next/link';


const displayUsers = ({users}) => {
    const [userData, setUserData] = useState(null);

    const cancelBtnHandler = () => {
        setUserData(null);
    }

    const showProfile = (user) => {
       setUserData(user);
    }


    return (
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
          abc  <div>{userData?.firstName}</div>
         </div>
           {
            
            userData && <User cancelBtnHandler = {cancelBtnHandler} userData={userData}/>
               
           }
        </div>
     
             
        </>
    );
}

export default displayUsers;


export async function getServerSideProps(){
    const port = process.env.PORT;
    console.log(port);
    const response = await fetch(`http://localhost:3000/api/users`);
    const data = await response.json();

    //getServerProps should return an object an object must contain props which is also a object
    return {
        props: {
            users: data
        }
    }
}




