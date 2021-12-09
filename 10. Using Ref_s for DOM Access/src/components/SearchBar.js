import React from "react";

class SearchBar extends React.Component
{
    state={term: ''};

    submitHandler = (event) => // i made this an arrow function to solve the problem of "this" keyword
    { // arrow function automaticelly bind the function
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render()
    {
        return(
            <div className="ui segment">
                <form onSubmit={this.submitHandler} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" 
                                onChange={(event) => {this.setState({term: event.target.value})}}
                                value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;