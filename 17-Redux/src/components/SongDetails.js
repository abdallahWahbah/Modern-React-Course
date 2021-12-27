import {connect} from 'react-redux';

const SongDetails = ({song}) =>
{
    // console.log(song)
    if(!song) return <div>Please, select a song</div>
    return(
        <div>
            <h1>Details For:</h1>
            <br></br>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    )
}


const mapStateToProps = (state)=>
{
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetails);