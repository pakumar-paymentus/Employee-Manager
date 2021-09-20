import Navbar from "../components/Navbar/Navbar";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SignIn from "../components/LogIn_Form/SignIn";
const Home = () => {
  return(
    
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.login_container}>
            <SignIn />      
        </div>
      </div>
    </>
    
  )
}

export default Home;