import ImageCard from './ImageCard';
import './images-list.css';

const ImageList = (props)=>
{
    const images = props.images.map((image) =>
    {
        return <img id={image.id} src={image.urls.regular} alt={image.description}/>
    })
    
    return (
        // <div>{images}</div>
        <div className="images-list">
            {props.images.map((image)=>
            (
                <ImageCard key={image.id} image={image}/>
            ))}
        </div>
    )
}
export default ImageList;