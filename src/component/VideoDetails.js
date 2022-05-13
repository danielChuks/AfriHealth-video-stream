import React from 'react';
import './ComponentSyles.css'


const style = {
    height: '200px',
    width: '100%'

}

const VideoDetails = ({ video }) => {
    if(!video){
        return <p>Loading...</p>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(videoSrc)
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