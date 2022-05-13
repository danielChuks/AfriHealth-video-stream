import './App.css';
import  Search from './component/Search'
import Videolist from './component/Videolist'
import youtube from './Apis/youtube'
import { useState } from 'react';
import VideoDetails from './component/VideoDetails';

console.log(process.env)

const App = () => {
  const [videos, setVideos] = useState([]);
  const [videoSelect, setVideoSelect] = useState(null)
  const search = async (search) => {
      const response = await youtube.get('./search', {
        params:{
          q: search
        }
      })
      setVideos(response.data.items);
  }

       const onVideoSelected = (video) =>{
              setVideoSelect(video)
            }

  return (
    <div className="App">
      <Search search={search}/>
      <VideoDetails video={videoSelect}/>
      <Videolist onVideoSelected={onVideoSelected} videos={videos} />
    </div>
  );
}

export default App;
