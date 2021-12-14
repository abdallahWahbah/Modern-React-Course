import React, {useState} from "react";
import Convert from "./Convert";
import Drobdown from "./Drobdown";

const options = 
[
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = (props) =>
{
    const [language, setLanguage] = useState(options[1]);
    const [text, setText] = useState("");

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
            </div>
            <Drobdown label="Select a Language" options={options} selected={language} onSelectChange={setLanguage} />
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate