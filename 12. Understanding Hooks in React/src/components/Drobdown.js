import React, {useState, useEffect, useRef} from "react";

const Drobdown = ({label, options, selected, onSelectChange}) =>
{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    
    // we use useEffect becaus we wanna assign the event handler only one time when the comp in rendered
    useEffect(()=>
    {
        const onBodyClick= (event)=>
        {
            if(ref.current.contains(event.target)) return; // if ref (form) contains the item that you clicked on (evet.target)
            
            setOpen(false);
        };

        // JS event listeners (document.addEventListener) are called before React event listeners (onClick={}) 
        document.body.addEventListener("click", onBodyClick, {capture: true}); // I am adding capture attribute cause I'm using react v17
    
        return () => // is called when the comp is deleted
        {
            document.body.removeEventListener("click", onBodyClick, {capture: true}); // I am adding capture attribute cause I'm using react v17
        }
    }, []);

    const renderedOptions = options.map(option =>
    {
        if(selected === option) return null;
        return (
            <div 
                key={option.value} 
                className="item" 
                onClick={() => onSelectChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return(
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label ? label : 'Select a Color'}</label>
                <div 
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open? "visible active" : ""}`}
                >
                    <i className="dropdown icon"> </i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
}

export default Drobdown;