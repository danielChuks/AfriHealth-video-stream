import './App.css';
import  Search from './component/Search'
import Videolist from './component/Videolist'
import PlayingVideo from './component/PlayingVideo';
import youtube from './Apis/youtube'
import { useState } from 'react';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [videoSelect, setVideoSelect] =useState(null)
  const search = async (search) => {
      const response = await youtube.get('./search', {
        params:{
          q: search
        }
      })
      setVideos(response.data.items);
  }

      // const onVideoSelect = video =>{
      //   setVideoSelect(video)
      // }

  return (
    <div className="App">
      <Search search={search}/>
      <PlayingVideo />
      <Videolist videos={videos} />
    </div>
  );
}

export default App;
