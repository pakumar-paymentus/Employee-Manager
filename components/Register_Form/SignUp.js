import styles from './SignUp.module.css';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

const SignUp = () => {
    //set the values of user data using state property of react
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confromPassword, setConfromPassword] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');

    //on click of signup button post data api for user services
    const signin = async(e) => {
        e.preventDefault();
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confromPassword: confromPassword,
            dob: dob,
            age: age,
            gender: gender,
            mobile: mobile

        }
        // console.log(userData);
        const response = await fetch('/api/user.services', {
            method:'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': "application/json"
            }
        });

        const data = await response.json();
        console.log(data);

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
                    <input className={styles.input} type='text' placeholder='email' value={email} required
                        onChange={(e) => setEmail(e.target.vaue)}
                    />
                </div>
                <div>
                    <input className={styles.input} type='text' placeholder='password' value={password} required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input className={styles.input} type='text' placeholder='confrom password' value={confromPassword} required
                        onChange={(e)=>setConfromPassword(e.target.value)}
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
                    <input className={styles.input} type='text' placeholder='Gender' value={gender} required 
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

                </div>
                
            </div>
        </div>
        
        </div>
        </>
    )
}

export default SignUp;