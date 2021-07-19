import React, { useState, useEffect } from 'react';

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

const Player = ({ src }) => {
    const [playing, toggle] = useAudio(src);

    return (
        <div>
            <button onClick={toggle}>{playing ? <img src="/pause-icon.svg" alt="pause-icon" /> : <img src="/play-icon.svg" alt="play-icon" />}</button>
        </div>
    )
}

export default Player