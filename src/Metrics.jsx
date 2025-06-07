import './Metrics.css'

function Metrics(props){
    const date = new Date(props.sent.First_UTC);
    const mmdd = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric" 
    });

    return(
        <div className="today-weather-info">
            <div className="sol-box">
                <span>Sol {props.sent.sol}</span><br/>
                <span>{mmdd}</span>
            </div>
            <div className="hi-lo-temp">
                <span>High: {props.sent.AT.mx.toFixed(2)}° F| C</span><br/>
                <span>Low: {props.sent.AT.mn.toFixed(2)}° F| C</span>
            </div>
        </div>
    )
}

export default Metrics;