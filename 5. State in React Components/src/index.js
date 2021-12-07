import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        // we call super() to make sure that the constructor of the parent (React.component) is called

        this.state={lat: null, errorMessage: ''}

        // takes 2 parameters (callback)
        // the second paramaeter is failure callback // is called when getCurrentPosition is unable to get user's physical location
        window.navigator.geolocation.getCurrentPosition(
            // to update the state, we call setState
            (position) =>
            {
                this.setState({lat: position.coords.latitude})
            },
            (err) => 
            {
                this.setState({errorMessage: err.message})
                console.log(err);
            }
        );
    }
    render()
    {
        if(this.state.lat && !this.state.errorMessage)
        {
            return(
                <div>Latitude: {this.state.lat}</div>
            );
        }
        if(!this.state.lat && this.state.errorMessage)
        {
            return(
                <div>Error: {this.state.errorMessage}</div>
            );
        }
        
        return(
            <div>Loading....</div>
        )
            
    };
}

ReactDOM.render(<App/>, document.querySelector("#root"));
