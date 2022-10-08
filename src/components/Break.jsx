import moment from "moment/moment";
import React from "react";

const Break = ({
    breakLength,
    incrementBreakLengthByOneMinute,
    decrementBreakLengthByOneMinute,
   }) => {
    const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes()
    return (
        <div className="break-session-container">
            <p className="session-type">Break</p>
            <p className="session-length">{breakLengthInMinutes}</p>
            <button className="decrement" onClick={decrementBreakLengthByOneMinute}></button>
            <button className="increment" onClick={incrementBreakLengthByOneMinute}></button>
        </div>
    )
}

export default Break;
