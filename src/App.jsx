import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bgImage from './assets/background-temp.jpg';
import Metrics from './Metrics.jsx'
import TempCard from './TempCard.jsx'


function App() {
    const styles = {
        backgroundImage: `url(${bgImage})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flexbox",
        padding: "20px",
        paddingLeft: "50px",
        boxSizing: "border-box"
    };




    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     fetch("https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0")
    //     .then((returned) => returned.json())
    //     .then(json => {
    //         setData(json);
    //     })
    //     .catch(err => console.log(err));
    // }, []);

    // console.log(data);

    return(
        <>
            <div style={styles} className="text-box">
            <p className='title-insight'>
                Latest Weather<br></br>at Elysium Planitia
            </p>
            <p className="description-text">
                Daily weather measurements of the surface of Mars at Elysium Planitia <br></br>near Martian equator by InSight lander
            </p>
            <Metrics/>
            <div className='card-container'>
                <TempCard/>
                <TempCard/>
                <TempCard/>
                <TempCard/>
                <TempCard/>
                <TempCard/>
                <TempCard/>
            </div>
            
            </div >
        </>  
    )
}

export default App
