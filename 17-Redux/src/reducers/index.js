import {combineReducers} from 'redux';

const songsReducer = () =>// static list (no parameters)
{
    return [
        {
            title:"Song 1",
            duration: "1:11"
        },
        {
            title:"Song 2",
            duration: "2:22"
        },
        {
            title:"Song 3",
            duration: "3:33"
        },
        {
            title:"Song 4",
            duration: "4:44"
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) =>
{
    if(action.type === "SONG_SELECTED")
    {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
// now, any other file inside our project have access to the combined reducers