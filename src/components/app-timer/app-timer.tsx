import { Component, h, Listen, State } from '@stencil/core';
import { TimerCountdown } from './timer-countdown/timer-countdown';

@Component({
  tag: "app-timer",
  styleUrl: "app-timer.css",
  shadow: true,
})
export class AppTimer {
  @State() time: number = 7494;
  @State() showCountDown: boolean = false;
  timer;

/*  connectedCallback = () => {

  }*/

  clearInterval = () => {
    window.clearInterval(this.timer)
  }
  stopTimer = () => {
    // console.log("stop");
    this.showCountDown = false;
    this.clearInterval();
    this.time = 0;
  }

  startTimer(e) {
    this.clearInterval();
    const {target} = e;
    const {dataset: {time}} = target;
    // console.log([time]);
    if(isNaN(+time)) return;
    console.log(time);
    this.showCountDown = true;
    this.time = +time;
    this.timer = window.setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  render() {
    return (
      <div class="main">
        {this.showCountDown
          ? <div class="timer-is-active">
              <TimerCountdown time={this.time} />
              <button onClick={this.stopTimer}>Stop Timer</button>
            </div>
          : <div>
            <h1>CHOOSE YOUR TIMER</h1>
            <div class="timer-time-buttons">
              {/*<button onClick={this.startTimer} data-time={5}>5 sec</button>*/}
              <button class="timer-time-button" onClick={(e: UIEvent) => this.startTimer(e)} data-time={5}>5 sec</button>
              <button class="timer-time-button" onClick={(e: UIEvent) => this.startTimer(e)} data-time={5*60}>5 min</button>
              <button class="timer-time-button" onClick={(e: UIEvent) => this.startTimer(e)} data-time={10*60}>10 min</button>
              <button class="timer-time-button" onClick={(e: UIEvent) => this.startTimer(e)} data-time={15*60}>15 min</button>
              <button class="timer-time-button" onClick={(e: UIEvent) => this.startTimer(e)} data-time={20*60}>20 min</button>
              <button class="timer-time-button" onClick={(e: UIEvent) => this.startTimer(e)} data-time={30*60}>30 min</button>
            </div>
          </div>

        }
    </div>)
  }
}
