import styles from './User.module.css';
import { useState } from 'react';
import AppContext from '../../pages/context/state';
const User = () => {
    const [cancelBtnStatus, setCancelBtnStatus] = useState('false');
    const cancelBtnHandler = () => {
        setCancelBtnStatus(true);
    }
    
    return(
    <>
      <AppContext.Provider value={{cancelBtnStatus}}>
        <div className={styles.body}>           
               <div className={styles.main_container}>
                   <div className={styles.upperBody} >
                        <div className={styles.cancelBtn}>
                            <i className="fas fa-times-circle" 
                            onClick={cancelBtnHandler}></i>
                        </div>
                        <div className={styles.profilePic}>
                            <i className={`fas fa-user ${styles.pic}`}></i>
                        </div>
                        <div className={styles.name}> Pawan Kumar
                        </div>
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
        </AppContext.Provider>     
    </>
    )
}

export default User;
