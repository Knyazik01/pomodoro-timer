import { FunctionalComponent, h } from '@stencil/core';

interface Countdown {
  time: number;
  text: string;
}
interface CountdownProps {
  countdowns: Countdown[];
  startTimer: (time: number) => void;
}

export const TimersGrid: FunctionalComponent<CountdownProps> = ({countdowns, startTimer}) => {
  return (
    <div>
      <h1 class="timer-page__choose-title">CHOOSE YOUR TIMER</h1>
      <div class="timer-page__choose-buttons-block">
        {countdowns.map(({ time, text }) => {
          return <button class="timer-page__choose-start-button" onClick={() => startTimer(time)}>{text}</button>
        })}
      </div>
    </div>
  )
}
