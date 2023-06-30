import { useEffect, useState } from "react";

const Timer = ({id,time}) => {
    const [timer, setTimer] = useState(time);

    useEffect(()=>{
        if (timer===0) return;
        const timerTimeout = setTimeout(() => setTimer(timer-1), 1000);
        return ()=> clearTimeout(timerTimeout);
    },[timer]);
	return (
	<>
        <h2 id={id}>{timer}</h2>
	</>
	);
};

export default Timer;
