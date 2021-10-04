import styles from '../../styles/Users.module.css';
import {useState} from 'react';
import User from '../../components/users/User';
import styles_user from '../../components/users/User.module.css';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
 


const displayUsers = ({users}) => {

    const [status, setStatus] = useState(false);
    const cancelBtnHandler =  () => {
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
            <div className={styles_user.body}>           
               <div className={styles_user.main_container}>
                   <div className={styles_user.upperBody} >
                        <div className={styles_user.cancelBtn}>
                            <i className="fas fa-times-circle" 
                            onClick={cancelBtnHandler}></i>
                        </div>
                        <div className={styles_user.profilePic}>
                            <i className={`fas fa-user ${styles_user.pic}`}></i>
                        </div>
                        {/* {!userData?userData.email:null} */}
                        <div className={styles_user.name}> Pawan Kumar
                        </div>
                    </div>
                   <div className={styles_user.lowerBody}>
                    <div className={styles_user.otherDetails}>
                        <div className={styles_user.details}>Email :</div>
                        <div className={styles_user.details}>Mobile :</div>
                        <div className={styles_user.details}>DOB : </div>
                        <div className={styles_user.details}>Age : </div>
                        <div className={styles_user.details}>Gender : </div>
                    </div>
                </div>
                    
               </div>
            </div>
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




