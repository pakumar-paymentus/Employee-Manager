import styles from './User.module.css';
import { useState } from 'react';

const User = () => {
    const [status, setStatus] = useState('flex');
    const displayHandler = () => {
        status === 'flex' ? setStatus('none') : setStatus('flex');
    }
    const displayProp = {
        display: status
    }
    return(
        <>
            <head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
            </head>
            <div className={styles.body}>           
               <div className={styles.main_container} style={displayProp}>
                   <div className={styles.upperBody}>
                        <div className={styles.cancelBtn}>
                            <i className="fas fa-times-circle"
                            onClick={displayHandler}></i>

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