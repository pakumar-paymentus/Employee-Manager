import styles from './SignUp.module.css';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import SignIn from '../LogIn_Form/SignIn';
import { useRouter } from 'next/router';
import checker from './validationChecks';

const SignUp = () => {
    const router = useRouter();
    let addMsgAlert ={};
    const msgAlert = {
        border: '2px solid red'
    }

    //set the values of user data using state property of react
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    //status value for message showing client side
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState('');


    //on click of signup button post data api for user services
    const signin = async(e) => {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            dob: dob,
            age: age,
            gender: gender,
            mobile: mobile

        }
        
        const myValidator = checker(userData, conformPassword);
    
        //If status true means show error msg to client
        if(myValidator.setStatus){
            setStatus(true);
            setMsg(myValidator.setMsg);
            return;
        }
       


        const response = await fetch('/api/user.services', {
            method:'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': "application/json"
            }
        });
        const res = await response.json();
        console.log(res);
        if(res.data !== null){
            router.push('/');
        }
        else{
            setStatus(true);
            setMsg(res.message);
        }
    }

    return(
        <>
        <Navbar></Navbar>
        <div className={styles.this_body}>
        <div className={styles.main_container}>
            <div className={styles.header}>
                SIGN UP
            </div>    
        <div className={styles.formFld}>
                <div className={styles.name}>
                    <input className={styles.input} type='text' placeholder='First Name' value={firstName} required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input className={styles.input} type='text' placeholder='Last Name' value={lastName} required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className={styles.cred}>
                <div>
                    <input className={styles.input} style = {addMsgAlert} type='text' placeholder='email' value={email} required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input className={styles.input} type='password' placeholder='password' value={password} required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input className={styles.input} type='password' placeholder='conform password' value={conformPassword} required
                        onChange={(e)=> setConformPassword(e.target.value)}
                    />
                </div>
                <input className={styles.input} type='Date' placeholder='DOB' value={dob} required
                    onChange={(e)=> setDob(e.target.value)}
                />
                </div>
                <div className={`${styles.selfData} ${styles.input}`}>
                    <input className={styles.input} type='text' placeholder='age' value={age} required
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input className={styles.input} type="text" placeholder="gender" value={gender}required
                        onChange={(e) => setGender(e.target.value)} 
                    />
                
                </div>
                <div className={styles.bottom}>
                    <input className={`${styles.input} ${styles.mobile}`} type='text' placeholder='Mobile' value={mobile} required
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <button className={styles.submitBtn} 
                        onClick={(e) => signin(e)}>
                    SIGN IN</button>
                    {
                        status ? <div className={styles.msg}>{msg}</div> : null
                    }
                </div>
            </div>
        </div>
        
        </div>
     
        </>
    )
}

export default SignUp;