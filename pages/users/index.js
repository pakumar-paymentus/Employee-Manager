import styles from '../../styles/Users.module.css';
import {useState} from 'react';
import User from '../../components/users/User';
const displayUsers = ({users}) => {
    const [status, setStatus] = useState(false);
    const showProfile = () => {
        setStatus(true);
    }
    return (
        <>
         
           <div className={styles.main_container}>
           {
               //for each loop over users to render every user
               users.map((user) => {
                   return(
                    
                        <div key={user.id} className={styles.user_container}
                        onClick={showProfile}>{`${user.firstName} ${user.lastName}`}
                        </div>
                    )
               })     
           } 
           {
               status ? <User></User>: null 
           }
           </div>
             
        </>
    );
}

export default displayUsers;


export async function getServerSideProps(){
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    //getServerProps should return an object an object must contain props which is also a object
    return {
        props: {
            users: data
        }
    }
}




