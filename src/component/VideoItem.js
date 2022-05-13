import React from "react";

const VideoItem = ({video, onVideoSelected}) =>{
    return(
        <div onClick={() => onVideoSelected(video) } className="Video-item">
             <img src={video.snippet.thumbnails.medium.url} alt={'video to play'} />
            <div className="title">
                {video.snippet.title}
            </div>
        </div>
    )
}

export default VideoItem;