import "./module.css"
import { useState, useRef } from "react";
const Stopwatch = () => {
    let [hour, setHour] = useState(0);
    let [minute, setMinute] = useState(0);
    let [second, setSecond] = useState(0);
    let [milisecond, setMilisecons] = useState(0);

    let [status, setStatus] = useState(false);
    let intervlId = useRef(null);

    const start = () => {

        intervlId.current = setInterval(() => {

            setMilisecons((prevMilisecond) => {
                if (prevMilisecond < 59) {
                    return prevMilisecond + 1;
                } else {

                    setSecond((prevSecond) => {
                        if (prevSecond < 59) {
                            return prevSecond + 1;
                        } else {

                            setMinute((prevMinute) => {
                                if (prevMinute < 59) {
                                    return prevMinute + 1;
                                } else {

                                    setHour((prevHour) => {
                                        if (prevHour < 24) {
                                            return prevHour + 1;
                                        } else {
                                            return 0;
                                        }
                                    })

                                    return 0;
                                }
                            })
                            return 0;
                        }
                    })

                    return 0;
                }
            })

        }, 10)

        setStatus(true);
    }

    const pause = () => {
        clearInterval(intervlId.current);
        setStatus(false);
    }

    const reset = () => {
        pause();
        setMilisecons(0);
        setSecond(0);
        setMinute(0);
        setHour(0);
    }

    return (

        <div id="main">

            <div style={{ height: "145px" }}>
                <div id="status">

                    <div style={hour > 0 ? { display: "flex" } : { display: "none" }}>
                        <h1> {hour} </h1>
                        <p> h </p>
                    </div>

                    <div style={minute > 0 ? { display: "flex" } : { display: "none" }}>
                        <h1> {minute} </h1>
                        <p> m </p>
                    </div>

                    <div>
                        <h1> {second < 10 ? "0" + second : second} </h1>
                        <p> s </p>
                    </div>

                    <div>
                        <h1> {milisecond} </h1>
                    </div>
                </div>
            </div>

            <div id="foot">
                <button onClick={status ? pause : start}> {status ? "STOP" : "START"} </button>
                <button onClick={reset}> RESET </button>
            </div>
        </div>

    )
}

export default Stopwatch
