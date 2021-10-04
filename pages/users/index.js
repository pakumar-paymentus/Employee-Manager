import styles from '../../styles/Users.module.css';
import {useState, useContext} from 'react';
import User from '../../components/user/User';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
import AppContext from '../context/state';


const displayUsers = ({users}) => {
    const {cancelBtnStatus} = useContext(AppContext);
    const [status, setStatus] = useState(false);
    
    if(cancelBtnStatus){
        setStatus(false);
    }
    const showProfile = () => {
       if(status === false) setStatus(true)
    }


    return (
        <>
        <AuthNavbar />
        <div className={styles.body} >
         <div className={styles.main_container}  >
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
                        <tr className={styles.userDataRow} onClick={showProfile}>
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
         </div>
           {

            status ? 
                <User />
               : null 
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




