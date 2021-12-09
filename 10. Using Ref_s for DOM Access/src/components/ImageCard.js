
import React from 'react';
class ImageCard extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={spans: 0}

        this.imageRef = React.createRef();
    }
    componentDidMount()
    {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }
    // use arrow function whenever you will use a callback function to be safe
    setSpans =()=>
    {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans});
    }
    render()
    {
        const {description, urls} = this.props.image;

        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    // src={this.props.image.urls.regular}
                    // alt={this.props.image.description} 
                    src={urls.regular}
                    alt={description}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;