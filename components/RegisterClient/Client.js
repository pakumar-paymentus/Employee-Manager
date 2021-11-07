import styles from './Client.module.css';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useRouter } from 'next/router';
import checker from './validatorChecks';

const Client = () => {
    const router = useRouter();
  
    //set the values of user data using state property of react
    const [clientId, setClientId] = useState(null);
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [showErr, setShowErr] = useState(false);
    const [msg, setMsg] = useState('');


    //on click of signup button post data api for user services
    const registerClient = async(e) => {
        setClientId(Date.now()%100000);
        const clientData = {
            clientId: clientId,
            clientName, clientName,
            clientEmail, clientEmail

        }

        const myValidator = checker(clientData);
        //client side validation checks
        //If status true means show error msg to client
        if(myValidator.setStatus){
            setStatus(true);
            setMsg(myValidator.setMsg);
            return;
        }

        //post the client data for registration:
        const response = await fetch('/api/client.services', {
            method:'POST',
            body: JSON.stringify(clientData),
            headers: {
                'Content-Type': "application/json"
            }
        })


        const res = await response.json();
        // if res.data is found, successfully registered 
        if(res.data){
            router.push('/');
        }
        else{                  // else email is already registered
            setShowErr(true);
            setMsg(res.message);
        }
    }

    return(
        <>
        <div className={styles.body}>
            <Navbar className={styles.nav}></Navbar>
            <div className={styles.lowerBody}>
            <div className={styles.container}>
                <div className={styles.header}>
                    Register Client 
                </div>
                <div className={styles.formFld}>
                    <input className={styles.input} type='text' placeholder='Name' value={clientName} required 
                        onChange={(e) => setClientName(e.target.value)}
                    />
                    <input className={styles.input} type='text' placeholder='Email' value={clientEmail} required 
                        onChange={(e) => setClientEmail(e.target.value)}
                    />
                    <button className={styles.registerBtn} 
                        onClick={(e) => registerClient(e)}>
                            Register
                    </button>
                    {
                        showErr && <div>{msg}</div>
                    }
                   
                </div>
            </div>
            </div>
        </div>
        
     
        </>
    )
}

export default Client;