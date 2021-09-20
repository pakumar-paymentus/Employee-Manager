import styles from './SignIn.module.css';
import Link from 'next/link';
import {useState} from 'react';
import home from '../../pages/home.js';


const SignIn = () => {
    const a_style = {
        color: 'rgb(11, 11, 97)',
        textDecoration: 'underline'
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //on click of SignIn button post data for authentication to api
    const login = async(e) => {
        const userData = {
            email: email,
            password: password
        }
        console.log(userData);
        const response = await fetch('/api/auth.services', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        // const data = await response.josn();
        // console.log(data);
    }
    return(
        <>
        <div className={styles.signIn}>
            <div className={styles.header}>
                SIGN IN
            </div>
            <div className={styles.formFld}>
                <input className={styles.input} type='text' placeholder='Email' value={email} required 
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input className={styles.input} type='text' placeholder='Password' value={password} required 
                    onChange={(e) => setPassword(e.target.value)}>
                </input>

                <div className={styles.forgetFld}>
                    <Link href='/register'>
                        <a>forget password</a>
                    </Link>
                </div>
                <button className={styles.signInBtn} 
                    onClick={(e) =>{ login(e)}}>
                    SIGN IN
                </button>
                <div className={styles.create}>
                    Don't have account<Link href='/register'><a style={a_style}> SIGN UP </a></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignIn;


