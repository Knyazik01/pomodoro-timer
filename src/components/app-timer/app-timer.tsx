import { Component, getAssetPath, h, Prop, State } from '@stencil/core';
import { AppTimerCountdown } from '../app-timer-countdown/app-timer-countdown';

@Component({
  tag: "app-timer",
  styleUrl: "app-timer.scss",
  shadow: true,
})
export class AppTimer {
  @State() time: number = 7494;
  @State() showCountDown: boolean = false;
  timer: number = null;

  @Prop() src = "../../assets/sounds/buzzer.mp3";
  audio = new Audio(getAssetPath(`./assets/${this.src}`));

  playSound = () => {
    this.audio.play();
  }

  stopSound = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
  }


  hideTimer = () => {
    this.showCountDown = false;
  }

  clearInterval = () => {
    window.clearInterval(this.timer);
  }

  breakTick = () => {
    this.clearInterval();
    this.time = 0;
  }

  stopTimer = () => {
    this.hideTimer();
    this.breakTick();
  }

  hideTimerAndStopSound = () => {
    this.stopSound();
    this.hideTimer();
  }

  onTimeIsEnded = () => {
    this.playSound();
    this.breakTick();

    setTimeout(this.hideTimerAndStopSound, 1500);
  }

  startTimer(e) {
    this.clearInterval();
    const {target} = e;
    const {dataset: {time}} = target;
    if(isNaN(+time)) return;
    this.showCountDown = true;
    this.time = +time;
    this.timer = window.setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        this.onTimeIsEnded();
      }
    }, 1000);
  }

  render() {
    return (
      <div class="main">
        {this.showCountDown
          ? <div class="timer-is-active">
              <AppTimerCountdown time={this.time} stopTimer={this.stopTimer}/>
            </div>
          : <div>
            <h1>CHOOSE YOUR TIMER</h1>
            <div class="timer-time-buttons">
              <button class="timer-time-button" onClick={(e: UIEvent) => this.startTimer(e)} data-time={5*2}>10 sec</button>
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
