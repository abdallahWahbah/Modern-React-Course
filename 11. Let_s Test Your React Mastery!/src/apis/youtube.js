import axios from "axios";

const KEY = `AIzaSyC0iF0f1qd0kHSjx5tnIsn9J7Y2Wtd6gNo`;

export default axios.create(
{
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:
    {
        part: 'snippet',
        key: KEY,
        type: 'video',
        maxResults: 5
    }
});