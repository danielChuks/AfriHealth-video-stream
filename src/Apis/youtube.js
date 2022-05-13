import axios from 'axios'


const KEY = 'AIzaSyAtPsfyB0Sojyv1rgJkEGW26nnE90oxgdI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
        params:{
            part: 'snippet',
            maxResult: 5,
            key: KEY
        }
})