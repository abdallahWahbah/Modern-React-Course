const Link = ({children, className, href}) =>
{
    const linkClick = (event)=>
    {

        if(event.metaKey || event.ctrl) // to open the link in a new tab when you click on ctrl + mouse click (from mac or windows)(just ignore it)
        {
            return;
        }

        event.preventDefault();
        // to change url without loading the page
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent); // dispatch this event to the window ( I am using it in the Route page)
    }

    return <a onClick={linkClick} className={className} href={href}>{children}</a>
}

export default Link;