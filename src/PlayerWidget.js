import React, { useState, useEffect } from 'react';
import './PlayerWidget.css'

const useAudio = src => {
    const [audio] = useState(new Audio(src));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [audio, playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));

        };
    }, [audio]);

    return[playing, toggle];
}

const PlayerWidget = ({ songName, darkBG, upward, src }) => {
    const [playing, toggle] = useAudio(src);

    PlayerWidget.defaultProps = {
            songName: "Name of the Song",
            upward: true,
            darkBG: false
    }

    return (
        <div className="player-widget">
            <div className={!upward ? "downward" : ""} >
                <span className={`interval-song-name${darkBG ? "--white" : ""}`}>
                    <p>"{songName}"</p>
                </span>
            </div>
            <div className="player-ui">
                {upward ? <img src={darkBG ? '/arrow-white-up.svg' : '/arrow-black-up.svg'} alt="arrow-up" /> : <img src={darkBG ? '/arrow-white-down.svg' : '/arrow-black-down.svg'} alt="arrow-down" />}
                <button onClick={toggle}>{playing ? <img src={darkBG ? '/pause-icon-white.svg' : '/pause-icon-black.svg'} alt="pause-icon" /> : <img src={darkBG ? '/play-icon-white.svg' : '/play-icon-black.svg'} alt="play-icon" />}</button>
            </div>
        </div>
    )
}

export default PlayerWidget