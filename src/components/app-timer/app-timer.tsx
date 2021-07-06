import { Component, h, State } from '@stencil/core';

@Component({
  tag: "app-timer",
  styleUrl: "app-timer.css",
  shadow: true,
})
export class AppTimer {
  @State() time: number = 7494;

  seconds: number = this.time % 60;
  minutes: number = (this.time - this.seconds) / 60 % 60;
  hours: number = (((this.time - this.seconds) / 60) - this.minutes) / 60;

  connectedCallback() {
    window.setInterval(() => {
      this.time--;
    }, 1000);
  }

  render() {
    let timeNow = this.time;
    let seconds = timeNow % 60;
    timeNow = (timeNow - seconds) / 60;
    let minutes = timeNow % 60;
    timeNow = (timeNow - minutes) / 60;
    let hours = timeNow;

    return <div class="main">
      <div class='hours'>
        <button>+</button>
        <div class='count'>{hours}</div>
        <button>-</button>
      </div>
      <div class='minutes'>
        <button>+</button>
        <div class='count'>{minutes}</div>
        <button>-</button></div>
      <div class='seconds'>
        <button>+</button>
        <div class='count'>{seconds}</div>
        <button>-</button></div>
    </div>
  }
}
