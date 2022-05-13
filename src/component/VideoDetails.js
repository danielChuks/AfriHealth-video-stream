import React from 'react';
import './ComponentSyles.css'


const VideoDetails = ({ video }) => {
    if(!video){
        return <p>USE THE SEARCH</p>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
            <div className="">
            <iframe className="video-display" src={videoSrc} width="500" height="300"/>
            </div>
                <div className='description'>
                    <p className="">{video.snippet.title}</p>   
                    <div>{video.snippet.description}</div>
                </div>  
        </div> 

    )
}


export default VideoDetails;