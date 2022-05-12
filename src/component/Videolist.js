import React from "react";
import VideoItem from './VideoItem'
import './ComponentSyles.css'

const Videolist = ({videos}) => {
    const renderedVideos = videos.map(video =>{
        return <VideoItem video={video} /> 
    }) 
    return(
        <div className="video-list">
            {renderedVideos}
        </div>
    )
}

export default Videolist;