import styles from './SignIn.module.css';
import Link from 'next/link';
const SignIn = () => {
    const a_style = {
        color: 'rgb(11, 11, 97)',
        textDecoration: 'underline'
    }
    return(
        <>
        <div className={styles.signIn}>
            <div className={styles.header}>
                SIGN IN
            </div>
            <form>
            <div className={styles.formFld}>
                <input className={styles.input} type='text' placeholder='Email' required />
                <input className={styles.input} type='text' placeholder='Password' required />
                <div className={styles.forgetFld}>
                    <Link href='#'>
                        <a>forget password</a>
                    </Link>
                </div>
                <button className={styles.signInBtn}>SIGN IN</button>
                <div className={styles.create}>
                    Don't have account<Link href='/register'><a style={a_style}> SIGN UP </a></Link>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default SignIn;