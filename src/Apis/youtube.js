import axios from 'axios'


const KEY = 'AIzaSyBmZ7p9PI6DLsTRgaWNtd3n5s3VpoWY5b8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
        params:{
            part: 'snippet',
            maxResult: 5,
            key: KEY
        }
})