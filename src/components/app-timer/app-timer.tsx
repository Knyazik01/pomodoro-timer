import { Component, getAssetPath, h, Prop, State } from '@stencil/core';
// import { AppTimerCountdown } from '../app-timer-countdown/app-timer-countdown';
import { TimersGrid } from "./TimersGrid";

const countdowns = [
  {time: 10, text: "10 sec"},
  {time: 5*60, text: "5 min"},
  {time: 10*60, text: "10 min"},
  {time: 15*60, text: "15 min"},
  {time: 20*60, text: "20 min"},
  {time: 30*60, text: "30 min"},
];

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

  startTimer(time) {
    this.clearInterval();
    this.showCountDown = true;
    this.time = time;
    this.timer = window.setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        this.onTimeIsEnded();
      }
    }, 1000);
  }

  render() {
    return (
      <div class="timer-page">
        {this.showCountDown
          ? <app-timer-countdown time={this.time} stopTimer={this.stopTimer}/>
          : <TimersGrid countdowns={countdowns} startTimer={(time) => this.startTimer(time)}/>
        }
    </div>)
  }
}
