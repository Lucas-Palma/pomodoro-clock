import moment from "moment/moment";
import React from "react";

const Session = ({
    sessionLength,
    decrementSessionLengthByOneMinute,
    incrementSessionLengthByOneMinute,
   }) => {
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes()
    return (
        <div className="break-session-container">
            <p className="session-type">Session</p>
            <p className="session-length">{sessionLengthInMinutes}</p>
            <button className="decrement" onClick={decrementSessionLengthByOneMinute}></button>
            <button className="increment" onClick={incrementSessionLengthByOneMinute}></button>
        </div>
    )
}

export default Session;
