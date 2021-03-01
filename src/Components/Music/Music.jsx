import React, { useState, useEffect } from "react";
// import useSound from 'use-sound';
// import boopSfx from '../../sounds/boop.mp3';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Music = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );
};

export default Music;

// function Music() {
//     const [isChecked, setIsChecked] = React.useState(
//         false
//     );
//
//     const [playActive] = useSound(
//         '/sounds/pop-down.mp3',
//         { volume: 0.25 }
//     );
//     const [playOn] = useSound(
//         '/sounds/pop-up-on.mp3',
//         { volume: 0.25 }
//     );
//     const [playOff] = useSound(
//         '/sounds/pop-up-off.mp3',
//         { volume: 0.25 }
//     );
//
//     return (
//         <Checkbox
//             name="demo-checkbox"
//             checked={isChecked}
//             size={24}
//             label="I agree to self-isolate"
//             onChange={() => setIsChecked(!isChecked)}
//             onMouseDown={playActive}
//             onMouseUp={() => {
//                 isChecked ? playOff() : playOn();
//             }}
//         />
//     );
// }
//
// export default Music;