import './Metrics.css'

function Metrics(props){
    return(
        <div className="today-weather-info">
            <div className="sol-box">
                <span>Sol 265</span><br/>
                <span>August 25</span>
            </div>
            <div className="hi-lo-temp">
                <span>High: -15° F| C</span><br/>
                <span>Low: -147° F| C</span>
            </div>
        </div>
    )
}

export default Metrics;