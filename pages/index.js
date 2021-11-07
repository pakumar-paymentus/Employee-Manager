import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SignIn from "../components/LogIn_Form/SignIn";
import RegisterClient from '../components/RegisterClient/Client';
const Webpage = () => {
  return(
    
    <>
      <div className={styles.main_container}>
        <div className={styles.login_container}>
            <SignIn />      
        </div>
      </div>
      
    </>
    
  )
}

export default Webpage;