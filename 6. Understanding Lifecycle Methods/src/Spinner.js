const Spinner = (props) =>
{
 return(
    <div class="ui active dimmer">
        <div class="ui big text loader">{props.message}</div>
        {/* <div class="ui big text loader">{props.message || "Loading..."}</div> */}
    </div>
 )
}

Spinner.defaultProps=
{
    message: "Loading..." // to specify a default prop value in case the calling comp didn't send a prop ... equal to commented jsx code above
}
export default Spinner;