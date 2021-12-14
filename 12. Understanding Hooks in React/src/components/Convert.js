import axios from "axios";
import React, {useEffect, useState} from "react";

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language, text}) =>
{
    const [translatedText, setTranslatedText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(()=> // when the input changes, change the debouncedText after a second of stop typing
    {
        const timer = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return () => {clearTimeout(timer)}
    }, [text])

    useEffect(()=> // when the debouncedText changes, make an HTTP request
    {
        const doTranslation = async ()=>
        {
            const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, 
            {
                params:
                {
                    q: debouncedText, 
                    target: language.value,
                    key: KEY
                }
            });
            setTranslatedText(res.data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, debouncedText])

    return(
        <div className="ui header">
            <h1>{translatedText}</h1>
        </div>
    )
};

export default Convert;





// before debouncing (lecture 61) (on each key stroke, it makes a call to the api)
// ....................................................................
// import React, {useState} from "react";
// import Convert from "./Convert";
// import Drobdown from "./Drobdown";

// const options = 
// [
//     {
//         label: 'Afrikaans',
//         value: 'af'
//     },
//     {
//         label: 'Arabic',
//         value: 'ar'
//     },
//     {
//         label: 'Hindi',
//         value: 'hi'
//     }
// ]

// const Translate = (props) =>
// {
//     const [language, setLanguage] = useState(options[1]);
//     const [text, setText] = useState("");

//     return(
//         <div>
//             <div className="ui form">
//                 <div className="field">
//                     <label>Enter Text</label>
//                     <input value={text} onChange={(e)=>setText(e.target.value)} />
//                 </div>
//             </div>
//             <Drobdown label="Select a Language" options={options} selected={language} onSelectChange={setLanguage} />
//             <Convert language={language} text={text}/>
//         </div>
//     )
// }

// export default Translate