import axios from 'axios';

const KEY = 'AIzaSyCx4q50kLu2s6QoToMQwIfOqptj0nVZJCM';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});