import styles from './User.module.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import client from '../../pages/clients';
import users from '../../pages/api/users';

const User = ({cancelBtnHandler, userData}) => {
    // clients array state 
    const [clients, setClients] = useState([]);

    // selected client
    const [selectClient, setSelectClient] = useState('');
    const cancelBtnStatus = () => {
        cancelBtnHandler();
    }
    useEffect(() => {
        const fetchClients = async() => {
            const res = await axios.get('/api/clients');
            setClients(res.data);
        }
        fetchClients();
    }, []);
    
    const saveUser = async() => {
      const saveInfo = {
          userEmail : users.email,
          userClient : selectClient
        }
        const res = await fecth('/api/saveUser', {
            method: 'POST',
            body: JSON.stringify(saveInfo),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const data = await res.json();
        console.log(data);
      

    }
    
    return(
    <>
           <div className={styles.container}>  
           <div className="card"  style={{width: '22rem'}}>
                <i className={`fas fa-times-circle ${styles.cancelBtn}`} 
                    onClick={cancelBtnStatus}>
                </i>
                <img src="/Images/user1.jpg" className="card-img-top mx-auto" alt="..." style={{width: '12rem', height:'12rem'}}/>
                <div className="card-body mx-auto">
                  <h5 className="card-title ">{`${userData.firstName} ${userData.lastName}`}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className={`list-group-item ${styles.listGroup}`}>
                      <div>Email : {`${userData.email}`}</div>
                    
                  </li>
                  <li className={`list-group-item ${styles.listGroup}`}>
                     <div>Gender : {`${userData.gender}`}</div>
                      <div>DOB : {userData.dob.split('T')[0]}</div>
                  </li>                  
                  <li className={`list-group-item ${styles.listGroup}`}>
                  <div>Age : {`${userData.age}`}</div>
                    <div>Mobile : {`${userData.mobile}`}</div>
                  </li>                </ul>
                <div className={`card-body ${styles.listGroup}`}>
                <select className={`form-select ${styles.selectClient}`} aria-label="Default select example"
                onChange = {(e) => setSelectClient(e.target.value)}>
                 <option selected>Select Client</option>
                {
                    clients.map(client => {
                        let clientInfo = `Id: ${client.clientId}, Name: ${client.clientName}`;
                        return(
                            <option value={client.clientId}>{clientInfo}
                            </option>
                        )
                    })
                }
                </select>
                <button type="button" className={`btn btn-success ${styles.saveBtn}`} onClick = {saveUser}>Save</button>
                </div>
            </div>
           </div>
    </>
    )
}

export default User;
