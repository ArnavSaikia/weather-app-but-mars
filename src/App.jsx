import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bgImage from './assets/background-temp.jpg';
import Metrics from './Metrics.jsx'
import TempCard from './TempCard.jsx'
import Login from './Login.jsx'


function App() {
    // const styles = {
    //     backgroundImage: `url(${bgImage})`,
    //     width: "100vw",
    //     height: "100vh",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     display: "flexbox",
    //     padding: "20px",
    //     paddingLeft: "50px",
    //     boxSizing: "border-box"
    // };


    const [data, setData] = useState(null);
    const [solsData, setSolsData] = useState([]);
    const [name, setName] = useState(null);
    const [timeOfDay, setTimeOfDay] = useState(null);
    const [backgroundImages, setBackgroundImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    function getTimeOfDay(date = new Date()) {
        const hours = date.getHours();
        
        if (hours >= 5 && hours < 12) {
            return 'Morning';
        } else if (hours >= 12 && hours < 17) {
            return 'Afternoon';
        } else if (hours >= 17 && hours < 21) {
            return 'Evening';
        } else {
            return 'Night';
        }
    }

    useEffect(() => setTimeOfDay(getTimeOfDay()));

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

    useEffect(() => {
        const fetchImages = async () => {
        try {
            const res = await fetch(
            "https://images-api.nasa.gov/search?q=mars+surface&media_type=image"
            );
            const json = await res.json();
            const items = json.collection.items;
            const urls = items
            .map(item => item.links?.[0]?.href)
            .filter(Boolean);
            setBackgroundImages(urls);
        } catch (err) {
            console.error("Error fetching background images:", err);
        }
        };
        fetchImages();
    }, []);

    useEffect(() => {
        if (backgroundImages.length === 0) return;
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 1 * 60 * 1000); // 10 minutes
        return () => clearInterval(intervalId);
    }, [backgroundImages]);

    const backgroundImageUrl = backgroundImages.length
    ? backgroundImages[currentIndex]
    : './assets/background-temp.jpg'; 

    const styles = {
        backgroundImage: `url(${backgroundImageUrl})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flexbox",
        padding: "20px",
        paddingLeft: "50px",
        boxSizing: "border-box",
        transition: "background-image 1s ease-in-out", // smooth fade
    };

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

    if(!name) return(
        <Login setter={setName}/>
    )

    return(
        <>
            <div style={styles} className="text-box">
            <p className='title-insight'>
                {/* Latest Weather<br></br>at Elysium Planitia */}
                Good {timeOfDay} {name}
            </p>
            <p className="description-text">
                InSight is taking daily weather measurements (temperature, <br/>
                wind, pressure) on the surface of Mars at Elysium Panitia, a flat, <br/>
                smooth plan near Mars' equator.
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
