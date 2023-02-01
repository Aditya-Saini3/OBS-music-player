import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";

function Player({songs, isPlaying, setIsPlaying, currentSong, setCurrentSong}) {
    const clickRef = useRef();
    const audioElem = useRef()

    //Playing and Pausing song based on state
    useEffect(() => {
        if(isPlaying) {
          audioElem.current.play()
        }
        else {
          audioElem.current.pause()
        }
    }, [isPlaying, currentSong])

    //Setting state isPlaying to play and pause song
    const PlayPause = () => {
        setIsPlaying(!isPlaying)
    }
    
    //Move to the time of audio where according to the click on seekbar
    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentSong.length;
    }

    //Move to Previous song
    const prev = () => {
        const index = songs.findIndex(x => x.songName == currentSong.songName)
        if(index == 0) {
            setCurrentSong(songs[songs.length - 1])
        }
        else {
            setCurrentSong(songs[index - 1])
        }
        audioElem.current.currentTime = 0;
    }

    //Move to next song
    const forw = () => {
        const index = songs.findIndex(x => x.songName == currentSong.songName)
        if(index == songs.length - 1) {
            setCurrentSong(songs[0])
        }
        else {
            setCurrentSong(songs[index + 1])
        }
        audioElem.current.currentTime = 0;
    }

    //Updating seekbar while song is playing
    const onPlaying = () => {
    
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;
        setCurrentSong({...currentSong, "progress": ct / duration * 100, "length": duration })

        //Skip to next song when song ends.
        if(duration === ct) {
            forw()
        }
      }

    return(
        <div className="player">
            <audio src={currentSong.src} ref={audioElem} onTimeUpdate={onPlaying} ></audio>
            <div className="songDetails">
                <span>{currentSong.songName}</span>
                <span>{currentSong.singer}</span>
            </div>
            <div className="navigation">
                <div className="navigation_wrapper" onClick={(e) => checkWidth(e)} ref={clickRef}>
                    <div className="seekbar" style={{width: `${currentSong.progress}%`}}></div>
                </div>
            </div>
            <div className="controls">
                <FontAwesomeIcon icon={faBackwardStep} className="icon" onClick={() => prev()}/>
                {isPlaying ?
                    <FontAwesomeIcon icon={faCirclePause} className="icon pauseBtn" onClick={() => PlayPause()}/> :
                    <FontAwesomeIcon icon={faCirclePlay} className="icon playBtn" onClick={() => PlayPause()}/> 
                }
                <FontAwesomeIcon icon={faForwardStep} className="icon" onClick={() => forw()}/>
            </div>
        </div>
    )
}

export default Player;