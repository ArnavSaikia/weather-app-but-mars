import bgImage from './assets/background-temp.jpg';
import './Login.css';

function Login(props){
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

    function enterName(e){
        props.setter(e.target.value);
    }

    return(
        <div style={styles} className="cover-box">
            <h2>Please Enter Your Name</h2>
            <input className="name-input" type="text" onKeyDown={(e) => {
                if (e.key == 'Enter'){
                    enterName(e);
                }
            }}></input>
        </div>
    )
}

export default Login;