import { useState } from "react"
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";

const styleSheet = {
    borderBottom: "2px solid #7baaf7",
    color: "#7baaf7"
}

const Countdown = () => {
    let [state, setState] = useState(false);

    const toggle = () => {
        setState(!state);
    }

    return (
        <div id="box">
            <div id="head">
                <div style={state ? styleSheet : {}} onClick={toggle}> TIMER </div>
                <div style={!state ? styleSheet : {}} onClick={toggle}> STOPWATCH </div>
            </div>

            <div id="show">
                {state ? <Timer /> : <Stopwatch />}
            </div>

        </div>
    )
}

export default Countdown;
