import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <h1 class="app-home__title">
          Welcome to the Pomodoro Timer App.<br />Let start tracking time!
        </h1>

        <stencil-route-link url="/timer">
          <button class="app-home__button">Timer page</button>
        </stencil-route-link>
      </div>
    );
  }
}
