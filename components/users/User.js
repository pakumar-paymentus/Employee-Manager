import styles from './User.module.css';
import { useState } from 'react';
import displayUsers from '../../pages/users';
const User = () => {
    
    return(
        <>
            <div className={styles.body}>           
               <div className={styles.main_container}>
                   <div className={styles.upperBody}>
                        <div className={styles.cancelBtn}>
                            <i className="fas fa-times-circle" 
                            onClick={displayUsers.cancelBtnHandler}></i>
                        </div>
                        <div className={styles.profilePic}>
                            <i className={`fas fa-user ${styles.pic}`}></i>
                        </div>
                        <div className={styles.name}>Pawan Kumar</div>
                   </div>
                   <div className={styles.lowerBody}>
                    <div className={styles.otherDetails}>
                        <div className={styles.details}>Email :</div>
                        <div className={styles.details}>Mobile :</div>
                        <div className={styles.details}>DOB : </div>
                        <div className={styles.details}>Age : </div>
                        <div className={styles.details}>Gender : </div>
                    </div>
                   </div>
                    
               </div>
            </div>
        </>
    )
}

export default User;