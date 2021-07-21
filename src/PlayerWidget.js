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

const PlayerWidget = ({ songName, upward, src }) => {
    const [playing, toggle] = useAudio(src);

    PlayerWidget.defaultProps = {
            songName: "Name of the Song",
            upward: true
    }

    return (
        <div className="player-widget">
            <div className={!upward ? "downward" : ""} >
                <span className="interval-song-name">
                    <p>"{songName}"</p>
                </span>
            </div>
            <div className="player-ui">
                {upward ? <img src="/arrow-up.svg" alt="arrow-up" /> : <img src="/arrow-down.svg" alt="arrow-down" />}
                <button onClick={toggle}>{playing ? <img src="/pause-icon.svg" alt="pause-icon" /> : <img src="/play-icon.svg" alt="play-icon" />}</button>
            </div>
        </div>
    )
}

export default PlayerWidget