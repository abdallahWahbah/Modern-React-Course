import axios from "axios";
import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component
{
    state={images:[]}
    onSearchSubmit = async (term)=> // arrow function to aviod "this" problems
    {
        const response = await axios.get("https://api.unsplash.com/search/photos", 
        {
            params:
            {
                query: term
            }, 
            headers:
            {
                Authorization: "Client-ID 1J4_ZNRnROi0OcgUr23zXe3OowRYLDw4IHSdQCuzRUs"
            }
        });
        this.setState({images: response.data.results});
        console.log(this.state.images);
    }

    render()
    {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
export default App;