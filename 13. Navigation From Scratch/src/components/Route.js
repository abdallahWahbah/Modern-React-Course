import {useEffect, useState} from "react";

const Route = ({path, children}) =>
{
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    // the purpose of this setState is only to make the Route page rerender itself
    useEffect(()=>
    {
        const onLocationChange = ()=>
        {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener("popstate", onLocationChange); // when we click on the link, this function is called

        return () => {window.removeEventListener("popstate", onLocationChange)};
    }, [])

    return currentPath === path ? children : null;
};

export default Route;