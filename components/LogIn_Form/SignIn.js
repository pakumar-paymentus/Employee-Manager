import styles from './SignIn.module.css';
import Link from 'next/link';
import {useState} from 'react';
import { useRouter } from 'next/router';
import checker from './validationChecks';
import Navbar from '../Navbar/Navbar';


const SignIn = () => {
    const router = useRouter();
    const a_style = {
        color: 'rgb(11, 11, 97)',
        textDecoration: 'underline'
    }
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //status is used to show serer side msg of authentication to user in div element 
    //which is only show when status is true 
    const [status, setStatus] = useState(false);

    //msg used to show msg of authentication
    const [msg, setMsg]= useState();
    

    //on click of SignIn button post data for authentication to api
    const login = async(e) => {
        const userData = {
            email: email,
            password: password
        }
        const myValidator = checker(userData);
        if(myValidator.setStatus){
            setStatus(true);
            setMsg(myValidator.setMsg);
            return;
        }
        
        //client side validation checks
        //If status true means show error msg to client
        if(myValidator.setStatus){
            setStatus(true);
            setMsg(myValidator.setMsg);
            return;
        }

        //post the user credentials for authentication
        const response = await fetch('/api/auth.services', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers:{
                'Content-Type': 'application/json'
            }
        })

    
        const res = await response.json();

        //if res.data is null or undefined then it is not registerd
        if(!res.data){
            setStatus(true);
            setMsg(res.message);
        }else if(res.data.auth === true){   // if res.data.auth is true that means user authenticated
            router.push('/home');
        }else{                          // if res.data.auth is false that means email or password is incorrect
            setStatus(true);    
            setMsg(res.message);
        }
    }
  
    return(
        <>
        <Navbar />
        <div className={styles.signIn}>
            <div className={styles.header}>
                SIGN IN
            </div>
            <div className={styles.formFld}>
                <input className={styles.input} type='text' placeholder='Email' value={email} required 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className={styles.input} type='password' placeholder='Password' value={password} required 
                    onChange={(e) => setPassword(e.target.value)}
                />
           

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
               {
                   status?<div className={styles.msg}>{msg}</div>:null
               }
            </div>
        </div>
        </>
    )
}

export default SignIn;


