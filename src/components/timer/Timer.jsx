import { useEffect, useState } from "react";

const Timer = ({id,time, action, counter}) => {
    const [timer, setTimer] = useState(time);
    console.log("render");
    useEffect(()=>{
        if (timer===0){
            setTimer(time);
            action();
            return;
        }
        const timerTimeout = setTimeout(() => setTimer(timer-1), 1000);
        return ()=> clearTimeout(timerTimeout);
    },[timer]);
    useEffect(()=>{
            setTimer(time);
    },[counter]);
	return (
	<>
        <h2 id={id}>{timer}</h2>
	</>
	);
};

export default Timer;
