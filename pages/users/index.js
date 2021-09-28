import styles from '../../styles/Users.module.css';
import {useState} from 'react';
import User from '../../components/users/User';
import styles_user from '../../components/users/User.module.css';

const displayUsers = ({users}) => {
    const [status, setStatus] = useState(false);
    let userData ;

    const cancelBtnHandler =  () => {
        setStatus(false);
    }
    const showProfile = (event) => {
       if(status === false) setStatus(true)
       console.log(event);
    }
    

    return (
        <>
         <head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        </head>
        <div className={styles.body} >
         <div className={styles.main_container}  >
           {
               //for each loop over users to render every user
               users.map((user) => {
                   return(
                    
                        <div key={user.id} className={styles.user_container}
                        onClick={(event => showProfile(event)) }>
                            {`${user.firstName} ${user.lastName}`}
                        </div>
                    )
               })     
           } 
           </div>
           {

               status ? 
               <div className={styles_user.body}>           
               <div className={styles_user.main_container}>
                   <div className={styles_user.upperBody}>
                        <div className={styles_user.cancelBtn}>
                            <i className="fas fa-times-circle" 
                            onClick={cancelBtnHandler}></i>
                        </div>
                        <div className={styles_user.profilePic}>
                            <i className={`fas fa-user ${styles_user.pic}`}></i>
                        </div>
                        <div className={styles_user.name}>Pawan Kumar</div>
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
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    //getServerProps should return an object an object must contain props which is also a object
    return {
        props: {
            users: data
        }
    }
}




