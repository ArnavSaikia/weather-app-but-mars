import './TempCard.css';

function TempCard(props){
    const date = new Date(props.sent.First_UTC);
    const mmdd = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric" 
    });


    return (
        <div className="card" onClick={props.onClick}>
            <span><b>Sol {props.sent.sol}</b></span>
            <span>{mmdd}</span>
            <hr style={{
               border: "none",
               width: "95%" ,
               height: "2px",
               background: "white"
            }}/>
            High: {props.sent.AT.mx.toFixed(2)}° C<br/>
            Low: {props.sent.AT.mn.toFixed(2)}° C
        </div>
    )
}

export default TempCard;