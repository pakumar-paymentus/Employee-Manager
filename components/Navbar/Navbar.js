import Head from 'next/head';
import styles from  './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {

    const listStyle = {
        'cursor': 'pointer',
        'backgroundColor': 'white',
        'color': '#1b1b1b'
    }
    const addStyling = (e) => {
        console.log(e);
        e.target.classList.add('active');
    } 

    return(
        <>

        <div className={styles.nav}>
                <div className={styles.paxcom}>Paxcom</div>
                <ul className={styles.right_nav}>
                    <li className={styles.li} onClick={(e) => addStyling(e)}>
                        <Link href='/'><a>SIGN IN</a></Link>
                    </li>
                    <li className={styles.li}>
                        <Link href='/register'><a>SIGN UP</a></Link>
                    </li>
                </ul>
            </div>

   

        </>
    )

}

export default Navbar;