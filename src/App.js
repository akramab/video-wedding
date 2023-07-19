import './App.css';
import ReactPlayer from 'react-player'
import { useState } from "react";
import axios from "axios";


function App() {
  const [url, setUrl] = useState("https://api.kramili.site/static/7.mp4");
  return (
    
    <div className="App">
      <ReactPlayer url={url} playing='true'  controls='true' onEnded={
        () => {
          axios.get('https://api.kramili.site/users/current-video').then((response) => {
            let currentIdx = response.data.current_index
            let videoList = response.data.video_list
            setUrl(videoList[currentIdx]);
          });

          // setUrl("https://api.kramili.site/static/3.mp4")
        }
      }/>
    </div>
  );
}

export default App;
