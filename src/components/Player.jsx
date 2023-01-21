import { faBackwardStep, faCirclePause, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

function Player({songs, isPlaying, setIsPlaying, audioElem, currentSong, setCurrentSong}) {
    const clickRef = useRef();

    const PlayPause = () => {
        setIsPlaying(!isPlaying)
    }
    
    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentSong.length;
    }

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

    return(
        <div className="player">
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