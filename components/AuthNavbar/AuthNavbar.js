import React, {useEffect, useState} from 'react';
import styles from './AuthNavbar.module.css';
import { useRouter } from 'next/router'
import { useUserContext } from '../../pages/context/state';
const AuthNavbar = () => {
  const {usersContext, welcomeContext} = useUserContext();

  const {showUsers, setShowUsers} = usersContext;
  const {showWelcome, setShowWelcome} = welcomeContext;
  
  const router = useRouter();
  const logoutHandler = async() => {
  const response = await fetch('/api/logout.services', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        }
      })
    setShowWelcome(true);
    setShowUsers(false);

    const res = await response.json();
    router.push('/');
  }
    
  const showUsersList = () => {
    console.log('clicked on users list');
    setShowUsers(true);
    setShowWelcome(false);
  }
       
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="https://paxcom.ai/" target='_blank'>
                    Paxcom
                </a>
            </div>
            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://paxcom.ai/" target='_blank'>About</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Users
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" onClick = {showUsersList}>Users List  <i className={`fas fa-users ${styles.icon}`}></i></a></li>
                            <li><a className="dropdown-item" href="#">Clients List <i className={`fas fa-users ${styles.icon}`}></i></a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Add User <i className={`fas fa-user-plus ${styles.icon}`}></i></a></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" onClick={logoutHandler}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
        </>
    )
}

export default AuthNavbar;

