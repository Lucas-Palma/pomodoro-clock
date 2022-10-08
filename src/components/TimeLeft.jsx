import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";

momentDurationFormatSetup(moment)

const TimeLeft = ({
    handleResetButtonClick,
    handleStartStopClick,
    timerLabel,
    startStopButtonLabel,
    timeLeft
}) => {
    
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false})
    return ( 
        <div className="time-left-container">
            <p id="timer-label">{timerLabel}</p>
            <p id="time-left">{formattedTimeLeft}</p>
            <button id="start" onClick={handleStartStopClick}>
                {startStopButtonLabel}
            </button>
            <button id="reset" onClick={handleResetButtonClick}>
                Reset
            </button>
        </div> 
    )
}

export default TimeLeft