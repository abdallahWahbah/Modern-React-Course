import React, {useState} from "react";
import Accordion from './components/Accordion';
import Drobdown from "./components/Drobdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = 
[
    {
        title: 'What is React?',
        content: 'React is a javascript Framework'
    },
    {
        title: 'Why to use React?',
        content: 'React is a favourite JS framework among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'We use React by using components'
    }
];

const options = 
[
    {
        label: "the red color",
        value: "red"
    },
    {
        label: "the green color",
        value: "green"
    },
    {
        label: "the blue color",
        value: "blue"
    }
]

const App = (props)=>
{
    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            
            {/* <Drobdown 
            selected = {selected}
            onSelectChange = {setSelected}
            options={options}
            /> */}
            <Translate />
        
        </div>
    )
}

export default App;