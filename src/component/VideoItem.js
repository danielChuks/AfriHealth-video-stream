import React from "react";

const VideoItem = ({video}) =>{
    console.log(video)
    return(
        <div className="Video-item">
             <img src={video.snippet.thumbnails.medium.url} />
            <div className="title">
                {video.snippet.title}
            </div>
        </div>
    )
}

export default VideoItem;