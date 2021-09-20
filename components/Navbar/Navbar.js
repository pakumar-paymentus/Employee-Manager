import Head from 'next/head';
import style from  './Navbar.module.css';
import Link from 'next/link';
const Navbar = () => {
    return(
        <>
         <Head>
            <title>Paxcom</title>
        </Head>
        <div className={style.nav}>
            <div className={style.nav_left}>
                <div className={style.paxcom}>Paxcom</div>
            </div>
            <div className={style.nav_right}>
                <div className={`${style.home} ${style.nav_right_body}`}>Home</div>
                <div className={`${style.nav_right_body}`}>About Us</div>
                <div className={`${style.nav_right_body}`}>
                    <Link href='/'><a>Sign In</a></Link>
                </div>
                <div className={`${style.nav_right_body}`}>
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