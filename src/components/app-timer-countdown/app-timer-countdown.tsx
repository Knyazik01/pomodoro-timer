import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: "app-timer-countdown",
  styleUrl: "app-timer-countdown.scss",
  shadow: true,
})
export class AppTimerCountdown {
  @Prop() time: number;
  @Prop() stopTimer: () => void;

  formatNumberToTwoDigits = (number: number): string => number.toString().padStart(2, '0');

  render() {
    let timeNow = this.time;
    let seconds = timeNow % 60;
    timeNow = (timeNow - seconds) / 60;
    let minutes = timeNow % 60;
    timeNow = (timeNow - minutes) / 60;
    let hours = timeNow;

    return (
      <div class="timer-page__single-timer">
        <div class={`timer-page__single-timer__countdown ${this.time <= 5 ? 'red' : ''} ${this.time <=5 && this.time > 0 ? 'big-text': ''} ${this.time === 0 ? 'time-ended' : ''}`}>
          <div class='timer-page__single-timer__countdown__hours'>
            <div class='timer-page__single-timer__countdown__count'>{this.formatNumberToTwoDigits(hours)}</div>
          </div>
          <div class='timer-page__single-timer__countdown__separator'>:</div>
          <div class='timer-page__single-timer__countdown__minutes'>
            <div class='timer-page__single-timer__countdown__count'>{this.formatNumberToTwoDigits(minutes)}</div>
          </div>
          <div class='timer-page__single-timer__countdown__separator'>:</div>
          <div class='timer-page__single-timer__countdown__seconds'>
            <div class='timer-page__single-timer__countdown__count'>{this.formatNumberToTwoDigits(seconds)}</div>
          </div>
        </div>
        <button onClick={this.stopTimer} class="timer-page__single-timer__countdown__stop-timer">Stop Timer</button>
      </div>
    )
  }
}
