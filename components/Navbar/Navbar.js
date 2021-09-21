import Head from 'next/head';
import styles from  './Navbar.module.css';
import Link from 'next/link';
const Navbar = () => {
    return(
        <>
         <Head>
            <title>Paxcom</title>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        </Head>
        <div className={styles.nav}>
            <div className={styles.nav_left}>
                <div className={styles.paxcom}>Paxcom</div>
                <div className={styles.users_icon}>
                    <i class="fas fa-users"></i>
                </div>
            </div>
            <div className={styles.nav_right}>
                <div className={`${styles.home} ${styles.nav_right_body}`}>Home</div>
                <div className={`${styles.nav_right_body}`}>About Us</div>
                <div className={`${styles.nav_right_body}`}>
                    <Link href='/'><a>Sign In</a></Link>
                </div>
                <div className={`${styles.nav_right_body}`}>
                    <Link href='/register'>
                        <a>Create Account</a>
                    </Link>
                </div>
            </div>
        </div>


        </>
    )

}

export default Navbar;