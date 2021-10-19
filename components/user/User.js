import styles from './User.module.css';
import { useState } from 'react';
const User = ({cancelBtnHandler, userData}) => {
    console.log(userData);

    const cancelBtnStatus = () => {
        cancelBtnHandler();
    }
    
    return(
    <>
     
        <div className={styles.body}>           
               <div className={styles.main_container}>
                   <div className={styles.upperBody} >
                        <div className={styles.cancelBtn}>
                            <i className="fas fa-times-circle" 
                            onClick={cancelBtnStatus}></i>
                        </div>
                        <div className={styles.profilePic}>
                            <i className={`fas fa-user ${styles.pic}`}></i>
                        </div>
                        <div className={styles.name}>{userData.firstName}
                        </div>
                    </div>
                   <div className={styles.lowerBody}>
                    <div className={styles.otherDetails}> 
                        <div className={styles.details}>Email : {userData.email}</div>
                        <div className={styles.details}>Mobile :{userData.mobile}</div>
                        <div className={styles.details}>DOB : {userData.dob}</div>
                        <div className={styles.details}>Age : {userData.age}</div>
                        <div className={styles.details}>Gender {userData.Gender}: </div>
                    </div>
                </div>
                    
               </div>
            </div>     
    </>
    )
}

export default User;


// {`${userData.firstName} ${userData.lastName}`}