import axios from 'axios';

// Hidden for security purposes
const KEY = '';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});