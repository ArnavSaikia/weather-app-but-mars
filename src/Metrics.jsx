import './Metrics.css';
import farenheitCelsiusConvert from './Utils.jsx';

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
                <span>High: {props.sent.AT.mx.toFixed(2)}° C| {farenheitCelsiusConvert(props.sent.AT.mx,'C').toFixed(2)}° F</span><br/>
                <span>Low: {props.sent.AT.mn.toFixed(2)}° C| {farenheitCelsiusConvert(props.sent.AT.mn,'C').toFixed(2)}° F</span>
            </div>
        </div>
    )
}

export default Metrics;