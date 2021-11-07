import React, {useMemo, useState} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Users.module.css';
import User from '../user/User'



const Users = ({currUsers, loading, numberOfUsers, usersPerPage, setCurrPage}) => {
    

    // userData that shows onClick in the list
    const [userData, setUserData] = useState(null);

    // user we want to search
    const [search, setSearch] = useState('');
    // onclick to submit btn search for user if found show all of them else show all the listed users
    const [searchBtnClickedStatus, setSearchBtnClickedStatus] = useState(false);


    // userState of array of searchedUser
    const [searchedUser, setSearchedUser] = useState([]);

    const pageCount = Math.ceil(numberOfUsers / usersPerPage);
    

    const cancelBtnHandler = () => {
        setUserData(null);
    }

    const showProfile = (user) => {
       setUserData(user);
    }

    const changePage = ({selected}) => {
        setCurrPage(selected);
    }
    const searchUser = () => {
        setSearchBtnClickedStatus(true);
        const filteredArray = currUsers.filter( user => user.firstName.includes(search) ||
        user.lastName.includes(search) ||
        user.email.includes(search));
        setSearchedUser(filteredArray);
    }
    // const users = useMemo(()=>{
    //     if(search){ 
    //     setPageUsers(currUsers.filter(user => {
    //             user.firstName.includes(search) ||
    //             user.email.includes(search)
    //             // user.nam
    //         }));
    //     }
    // }, [currUsers, search])


    return(
        <>
            <div className={styles.body}>
                <div className={styles.leftBody}>
                    <div className={styles.heading}> Users
                    </div>
                    <div className={styles.lowerBody}>
                        <div className={styles.optionsContainer}>
                            <ul className={styles.options}>
                                <li className={styles.liItem}>Total Records: {numberOfUsers}</li>
                                <li>
                                    <div className="input-group mb-3">
                                        <input type="text" className= 'form-control'  placeholder="Search" aria-label="Search" 
                                            onChange={(e) => setSearch(e.target.value)}>
                                        </input>
                                        <div className="input-group-append">
                                            <span className={styles.cancelBtn}><i className={`fas fa-times`}></i></span>
                                          <button className="btn btn-outline-success" type="button" onClick={searchUser} >Search</button>
                                        </div>
                                    </div>
                                </li>
                                <li className={styles.liItem}> <i className={`fas fa-user-plus ${styles.icon}`}></i>add user</li>
                                <li className={styles.liItem}> <i className={`fas fa-user-times ${styles.icon}`}></i>delete user</li>
                                <li className={styles.liItem}> <i className={`fas fa-user-edit ${styles.icon}`}></i>edit user</li>

                            </ul>
                        </div>
                        <div className={styles.displayContainer}>
                            <div className={styles.allUsers}>
                                {
                                    loading ? <h2>Loading ...</h2> : 
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Gender</th>
                                                <th>Email</th>
                                                <th>Mobile</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        {

                                            searchBtnClickedStatus && search ? searchedUser.map(user => {
                                                return (
                                                 <tr key={user._id} className={styles.userDataRow} onClick={() => showProfile(user)}>
                                                     <td>{user.firstName}</td>
                                                     <td>{user.lastName}</td>
                                                     <td>{user.gender}</td>
                                                     <td>{user.email}</td>
                                                     <td>{user.mobile}</td>
                                                 </tr> 
                                                )
                                            }):  
                                            currUsers.map(user => {
                                                return (
                                                 <tr key={user._id} className={styles.userDataRow} onClick={() => showProfile(user)}>
                                                     <td>{user.firstName}</td>
                                                     <td>{user.lastName}</td>
                                                     <td>{user.gender}</td>
                                                     <td>{user.email}</td>
                                                     <td>{user.mobile}</td>
                                                 </tr> 
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                    
                                }
                            </div>
                        </div>
                    </div>
                    <ReactPaginate 
                        previousLabel={'Previos'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={styles.pagginationBtns}
                        previousLinkClassName={styles.previosBtn}
                        nextLinkClassName={styles.nextBtn}
                        disabledClassName={styles.paginationDisabled}
                        activeClassName={styles.paginationActive}                        
                    />
                </div>
                <div className={styles.rightBody}>
                {
            
                    userData && <User cancelBtnHandler = {cancelBtnHandler} userData={userData}/>
               
                }
                </div>
            </div>    
            
        </>
    )

}

export default Users;