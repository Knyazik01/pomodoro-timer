import { Fragment, FunctionalComponent, h } from '@stencil/core';

interface CountdownProps {
  time: number;
  stopTimer: () => void;
}

export const AppTimerCountdown: FunctionalComponent<CountdownProps> = ({time, stopTimer}) => {
  const formatNumberToTwoDigits = (number: number): string => number.toString().padStart(2, '0');

  let timeNow = time;
  let seconds = timeNow % 60;
  timeNow = (timeNow - seconds) / 60;
  let minutes = timeNow % 60;
  timeNow = (timeNow - minutes) / 60;
  let hours = timeNow;

  return (
    <Fragment>
      <div class={`timer-countdown ${time <= 5 ? 'red' : ''} ${time <=5 && time > 0 ? 'big-text': ''} ${time === 0 ? 'time-ended' : ''}`}>
        <div class='hours'>
          <div class='count'>{formatNumberToTwoDigits(hours)}</div>
        </div>
        <div class='separator'>:</div>
        <div class='minutes'>
          <div class='count'>{formatNumberToTwoDigits(minutes)}</div>
        </div>
        <div class='separator'>:</div>
        <div class='seconds'>
          <div class='count'>{formatNumberToTwoDigits(seconds)}</div>
        </div>
      </div>
      <button onClick={stopTimer} class="stop-timer">Stop Timer</button>
    </Fragment>
  )
}
