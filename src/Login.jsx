import bgImage from './assets/background-temp.jpg';
import './Login.css';

function Login(){
    const styles = {
        backgroundImage: `url(${bgImage})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flexbox",
        padding: "20px",
        paddingLeft: "50px",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center"
    };

    return(
        <div style={styles} className="cover-box">
            <h2>Please Enter Your Name</h2>
            <input type="text"></input>
        </div>
    )
}

export default Login;