import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state={lat: null, errorMessage: ''}
    // }
    state={lat: null, errorMessage: ''} //  this is equivelant to initializing the state in the constructor, but without "this."
    
    componentDidMount() // is called when the component is rendered to the screen
    {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
        console.log('My component is rendered')
    }
    componentDidUpdate() // is called when we update the state
    {
        console.log('Updated')
    }
    componentWillUnmount(){} // is called when we remove the component

    renderContent()
    {
        if(this.state.lat && !this.state.errorMessage)
        {
            return(
                <SeasonDisplay lat={this.state.lat}/>
            );
        }
        if(!this.state.lat && this.state.errorMessage)
        {
            return(
                <div>Error: {this.state.errorMessage}</div>
            );
        }
        
        return(
            <Spinner message="Please, accept location access"/>
        )
    }

    render()
    {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    };
}

ReactDOM.render(<App/>, document.querySelector("#root"));
