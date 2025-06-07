import './TempCard.css';

function TempCard(){
    return (
        <div className="card">
            <span><b>Sol 259</b></span>
            <span>Aug 19</span>
            <hr style={{
               border: "none",
               width: "95%" ,
               height: "2px",
               background: "white"
            }}/>
            High: -17° F<br/>
            Low: -150° F
        </div>
    )
}

export default TempCard;