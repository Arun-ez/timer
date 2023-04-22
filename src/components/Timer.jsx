import { useEffect, useRef, useState } from "react"
import "./module.css"

const Timer = () => {

    let [minute, setMinute] = useState(5);
    let [second, setSecond] = useState(0);
    let [status, setStatus] = useState(false);
    let intervlId = useRef(null);

    const start = () => {

        if (minute == 0 && second == 0) {
            setMinute(5);
        }

        intervlId.current = setInterval(() => {

            setSecond((prevSecond) => {

                if (prevSecond > 0) {
                    return prevSecond - 1;
                } else {
                    setMinute((prevMinute) => {

                        if (prevMinute > 0) {
                            return prevMinute - 1;
                        } else {
                            pause();
                            setSecond(0);
                            setMinute(0);
                        }
                    })

                    return 59;
                }
            })

        }, 1000)

        setStatus(true);
    }

    const pause = () => {
        clearInterval(intervlId.current);
        setStatus(false);
    }

    const reset = () => {
        pause();
        setSecond(0);
        setMinute(5);
    }

    useEffect(() => {
        start();
    }, [])

    return (

        <div id="main">

            <div style={{ height: "145px" }}>
                <div id="status">

                    <div>
                        <h1> {minute} </h1>
                        <p> m </p>
                    </div>

                    <div>
                        <h1> {second < 10 ? "0" + second : second} </h1>
                        <p> s </p>
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

export default Timer;
