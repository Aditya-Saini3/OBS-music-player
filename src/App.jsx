import { useState, useRef, useEffect } from "react"
import Player from "./components/Player";
import sidhuSongs from "./data.json";

function App() {
  const [songs, setSongs] = useState(sidhuSongs);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(sidhuSongs[1]);

  const audioElem = useRef()

  useEffect(() => {
    if(isPlaying) {
      audioElem.current.play()
    }
    else {
      audioElem.current.pause()
    }
  }, [isPlaying])

  const onPlaying = () => {
    
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({...currentSong, "progress": ct / duration * 100, "length": duration })
  }
  
  return (
    <div className="App">
      <audio src={currentSong.src} ref={audioElem} onTimeUpdate={onPlaying}></audio>
      <Player
          currentSong={currentSong} 
          setCurrentSong={setCurrentSong}
          songs={songs}
          setSongs={setSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioElem={audioElem}
      />
    </div>
  )
}

export default App
