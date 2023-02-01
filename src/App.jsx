import { useState, useRef, useEffect } from "react"
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Hero from "./components/VariableComp/Hero";
import sidhuSongs from "./data.json";

function App() {
  const [songs, setSongs] = useState(sidhuSongs);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(sidhuSongs[1]);

  
  return (
    <div className="App">
      <Sidebar />
      <Topbar />
      <Hero />
      <Player
          currentSong={currentSong} 
          setCurrentSong={setCurrentSong}
          songs={songs}
          setSongs={setSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
      />
    </div>
  )
}

export default App
