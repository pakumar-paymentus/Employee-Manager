import AuthNavbar from '../components/AuthNavbar/AuthNavbar';
import styles from '../styles/homepage.module.css';
import cookie from 'cookie';

const home = ({ token, userName }) => {
    return (

        !token ? <h1>You are not authorized</h1> : <>
            <AuthNavbar />
            <div className={styles.body}>
                <div className={styles.main_container}>
                <h1>Welcome {userName}</h1>
                </div>
               
            </div>
        </>


    )
}

export default home;
export async function getServerSideProps({ req, res }) {

    let pairs = req.headers.cookie.split(";");
    let splittedPairs = pairs.map(cookie => cookie.split("="));
    const cookieObj = splittedPairs.reduce(function (obj, cookie) {
        // cookie[0] is the key of cookie
        // cookie[1] is the value of the cookie
        // decodeURIComponent() decodes the cookie
        // string, to handle cookies with special
        // characters, e.g. '$'.
        // string.trim() trims the blank spaces
        // auround the key and value.
        obj[decodeURIComponent(cookie[0].trim())]
            = decodeURIComponent(cookie[1].trim());

        return obj;
    }, {})
    return {
        props: {
            token: cookieObj.token|| "",
            userName:cookieObj.user || ""

        }

    }
}