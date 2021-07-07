import { FunctionalComponent, h } from '@stencil/core';

interface CountdownProps {
  time: number;
}

export const TimerCountdown: FunctionalComponent<CountdownProps> = ({time}) => {
  const formatNumberToTwoDigits = (number: number): string => number.toString().padStart(2, '0');

  let timeNow = time;
  let seconds = timeNow % 60;
  timeNow = (timeNow - seconds) / 60;
  let minutes = timeNow % 60;
  timeNow = (timeNow - minutes) / 60;
  let hours = timeNow;

  return (
    <div class="timer-countdown">
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
  )
}
