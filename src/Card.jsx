const Card=(
    {
        pay,
        price,
        userLim,
        availPvt,
        availPhn,
        availSub,
        availRep,
    }
)=>{
    return(
        
        <div className="card">
            <h3>{pay}</h3>
            <h1>${price}/month</h1>
            <ul>
                <li className="enable">50GB Storage</li>
                <li className="enable">{userLim}</li>
                <li className="enable">Unlimited Public Projects</li>
                <li className="enable">Community Access</li>
                <li className={enable(availPvt)}>Unlimited Private Projects</li>
                <li className={enable(availPhn)}>Dedicated Phone Support</li>
                <li className={enable(availSub)}>Free Subdomain</li>
                <li className={enable(availRep)}>Monthly Status Reports</li>
            </ul>
            <button className="button">Subscribe</button>
        </div>

    );
}

function enable(isEnable){
    if(isEnable)
        return "enable";
    else
        return "disable";
}


export default Card