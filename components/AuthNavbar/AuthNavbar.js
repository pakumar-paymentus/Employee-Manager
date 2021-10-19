import Head from 'next/head';
import styles from  './AuthNavbar.module.css';
import Link from 'next/link';
import cookie from 'js-cookie';
import {Dropdown, DropdownMenu , DropdownToggle} from 'react-bootstrap';

const AuthNavbar = ({token}) => {

    const logoutHandler = async() => {
        //remove client side general user
        cookie.remove('user');
        const response = await fetch('/api/logout.services', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const res = await response.json();
        router.push('/');
        

        
    }
    return(
        <>

        <div className={styles.nav}>
                <div className={styles.paxcom}>Paxcom</div>
                <ul className={styles.right_nav}>
                    <li className={`${styles.li} ${styles.active}`}>
                        Home
                    </li>
                    <li className={styles.li}>
                        <Link href='https://paxcom.ai/#about'><a>About</a></Link>
                    </li>
                    <l1 className={styles.dropdown}>
                        <div className={styles.dropdown}>
                            <i className={`fas fa-caret-square-down ${styles.dropbtn}`}></i>
                        <div className={styles.dropdownContent}>
                        <Link href='/users'> 
                            <a target="_blank">Users-List<i className={`fas fa-users ${styles.icon}`}></i></a>
                        </Link>   
                        <Link href={'/register'}>
                            <a target='_blank'>Add User<i className={`fas fa-user-plus ${styles.icon}`}></i></a>
                        </Link>
                        </div>
                    </div>
                    </l1>
                    <li className={styles.li} onClick={logoutHandler}>
                        Logout
                    </li>
                    {/* <li className={styles.NavDropdown}>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                
                    </li> */}
                   
                    
                </ul>
                
            </div> 
            
   

        </>
    )

}

export default AuthNavbar;
export function getServerSideProps({req, res}){
    const token = cookie.parse(req.headers.cookie).token;
    console.log(token);
    return{
        props:{
            token: token
        }
    }
}