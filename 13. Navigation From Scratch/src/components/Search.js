import axios from "axios";
import React, {useState, useEffect} from "react";

const Search = (props) =>
{
    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(()=>
    {
        const timer = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => {clearTimeout(timer)}
    }, [term])  // whenever we change the term, we change the debouncedTerm, so the other useEffect is called cause it depends on debouncedTerm
    
    useEffect(()=>
    { // It's not allowed to use async/await in the callback function, instead, make a nested func inside it and call it
        const search = async()=>
        {
            const response = await axios.get("https://en.wikipedia.org/w/api.php", 
            {
                params:
                {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm
                }
            })
            setResults(response.data.query.search);
        };
        search();
    }, [debouncedTerm])

    const renderedResults = results.map(result =>
    {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    {/* to convert text (coming from untrusted source) to HTML  */}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )  
    })

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        type="text"
                        className="input"
                        onChange={e => setTerm(e.target.value)}
                        value={term}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;