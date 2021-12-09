import './SeasonDisplay.css';

const seasonConfig = 
{
    summer: 
    {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter:
    {
        text: "Burr, it's chilly",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month)=>
{
    if(month > 2 && month < 9)
    {
        return lat > 0 ? "summer" : "winter";
    }
    else
    {
        return lat > 0 ? "winter" : "summer"
    }
}

const SeasonDisplay = (props)=>
{
    const season = getSeason(props.lat, new Date().getMonth()); // getMonth() is zero-based .. 0 for january
    const {text, iconName} = seasonConfig[season]

    return (<div className={`season-display ${season}`}>
        <i className={`icon-left icon massive ${iconName}`}/>
        <h1>{text}</h1>
        <i className={`icon-right icon massive ${iconName}`}/>
    </div>)
}
export default SeasonDisplay;