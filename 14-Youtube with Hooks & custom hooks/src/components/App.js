import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () =>
{
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("cars");
    
    useEffect(()=>
    {
        setSelectedVideo(videos[0]);
        console.log(videos[0]);
    }, [videos]);

    
    
    return(
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            // onVideoSelect={(video) => setSelectedVideo(video)} 
                            // equal to 
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;








// import React from 'react';
// import youtube from '../apis/youtube';
// import SearchBar from './SearchBar';
// import VideoList from './VideoList';
// import VideoDetail from './VideoDetail';

// class App extends React.Component
// {
//     state={videos: [], selectedVideo: null};

//     componentDidMount()
//     {
//         this.onTermHandler("cats");
//     }

//     onTermHandler= async (term)=>
//     {
//         const response = await youtube.get('/search', 
//         {
//             params:
//             {
//                 q: term
//             }
//         });

//         this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
//     }

//     onVideoSelect = video =>
//     {
//         console.log('From the App',  video);
//         this.setState({selectedVideo: video});
//     }
    
//     render()
//     {
//         return(
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermHandler}/>
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </div>
//                         <div className="five wide column">
//                             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default App;