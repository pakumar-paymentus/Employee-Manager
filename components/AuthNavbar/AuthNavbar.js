import Head from 'next/head';
import styles from  './AuthNavbar.module.css';
import Link from 'next/link';
import  {useRouter} from 'next/router';

const AuthNavbar = () => {

    const router = useRouter();
    const getUsers = () => {
        router.push('/users');
    }
    
    const addUser = () => {
        router.push('/register');
    }

    return(
        <>

        <div className={styles.nav}>
                <div className={styles.paxcom}>Paxcom</div>
                <ul className={styles.right_nav}>
                    <li className={`${styles.li} ${styles.active}`}>
                        <Link href='/'><a> Home </a></Link>
                    </li>
                    <li className={styles.li}>
                        <Link href='https://paxcom.ai/#about'><a>About</a></Link>
                    </li>
                    <li className={styles.userIcon}>
                        <i className="fas fa-users" onClick={getUsers}></i>
                    </li>
                    <li className={styles.userIcon}>
                    <i className="fas fa-user-plus" onClick={addUser}></i>
                    </li>
                </ul>
            </div> 
            
   

        </>
    )

}

export default AuthNavbar;