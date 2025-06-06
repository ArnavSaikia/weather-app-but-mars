import './TempCard.css';

function TempCard(){
    return (
        <div className="card">
            <span>Sol 259</span>
            <span>Aug 19</span>
            {/* line-break of some sort */}
            High: -17° F<br/>
            Low: -150° F
        </div>
    )
}

export default TempCard;