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


    const [data, setData] = useState(null);
    const [solsData, setSolsData] = useState([]);
    const [name, setName] = useState(null);
    useEffect(() => {
        fetch("https://api.nasa.gov/insight_weather/?api_key=KLaoBR5qU1BWec3jwGG9RdKK8qJwjqQfJogjl1rE&feedtype=json&ver=1.0")
            .then((returned) => returned.json())
            .then((json) => {
            setData(json);
            const solDataArray = json.sol_keys.map(sol => ({
                sol: sol,
                ...json[sol]
            }));
            setSolsData(solDataArray);
            })
            .catch(err => console.log(err));
        }, []);

    console.log(data);

    function changeToCurrentCard(index){
        let copy = [...solsData];
        [copy[index] , copy[6]] = [copy[6] , copy[index]];
        let copysCopy = copy.filter((value,index) => index!=6?value:false);
        copysCopy = copysCopy.sort();
        copy = [...copysCopy,copy[6]];
        copysCopy = copysCopy.sort((a, b) => Number(a.sol) - Number(b.sol));
        copy = [...copysCopy, copy[6]];
        setSolsData(copy);
    }



    if(!data) return(
        <h1>WORKING ON IT</h1>
    );

    return(
        <>
            <div style={styles} className="text-box">
            <p className='title-insight'>
                Latest Weather<br></br>at Elysium Planitia
            </p>
            <p className="description-text">
                Daily weather measurements of the surface of Mars at Elysium Planitia <br></br>near Martian equator by InSight lander
            </p>
            <Metrics sent={solsData[6]}/>
            <div className='card-container'>
                <TempCard sent={solsData[0]} onClick={() => changeToCurrentCard(0)}/>
                <TempCard sent={solsData[1]} onClick={() => changeToCurrentCard(1)}/>
                <TempCard sent={solsData[2]} onClick={() => changeToCurrentCard(2)}/>
                <TempCard sent={solsData[3]} onClick={() => changeToCurrentCard(3)}/>
                <TempCard sent={solsData[4]} onClick={() => changeToCurrentCard(4)}/>
                <TempCard sent={solsData[5]} onClick={() => changeToCurrentCard(5)}/>
            </div>
            
            </div >
        </>  
    )
}

export default App
