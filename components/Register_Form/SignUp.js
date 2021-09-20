import styles from './SignUp.module.css';
import Navbar from '../Navbar/Navbar';
const SignUp = () => {
    return(
        <>
        <Navbar></Navbar>
        <div className={styles.this_body}>
        <div className={styles.main_container}>
            <div className={styles.header}>
                SIGN UP
            </div>    
        <form>
        <div className={styles.formFld}>
                <div className={styles.name}>
                    <input className={styles.input} type='text' placeholder='First Name' required/>
                    <input className={styles.input} type='text' placeholder='Last Name' required/>
                </div>
                <div className={styles.cred}>
                <div>
                    <input className={styles.input} type='text' placeholder='email' required/>
                </div>
                <div>
                    <input className={styles.input} type='text' placeholder='password' required/>
                </div>
                <div>
                    <input className={styles.input} type='text' placeholder='confrom password' required/>
                </div>
                <input className={styles.input} type='Date' placeholder='DOB' required/>
                </div>
                <div className={`${styles.selfData} ${styles.input}`}>
                    <input className={styles.input} type='text' placeholder='age' required/>
                    <input className={styles.input} type='text' placeholder='Gender' required/>
                </div>
                <div className={styles.bottom}>
                <input className={`${styles.input} ${styles.mobile}`} type='text' placeholder='Mobile' required/>
                <button className={styles.submitBtn}>SIGN IN</button>

                </div>
                
            </div>
        </form>
        </div>
        
        </div>
        </>
    )
}

export default SignUp;