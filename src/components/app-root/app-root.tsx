import { Component, h } from '@stencil/core';
import Logo from '../../assets/svg/logo.svg';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div class="root-block">
        <header class="header">
          <stencil-route-link url="/" class='header__logo-link'>
            <div class='header__logo-icon-block'>
              <img src={Logo} alt='' class="header__logo" />
              <h1 class="header__logo-text">Pomodoro Timer</h1>
            </div>
          </stencil-route-link>
        </header>

        <main class="main">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/timer" component="app-timer" exact={true}/>
            </stencil-route-switch>
          </stencil-router>
        </main>

        <footer class="footer">
          &copy; <a href='https://github.com/Knyazik01' class="footer__git-hub-link"
                    target="_blank" title="GitHub account">Knyazik01</a>
        </footer>
      </div>
    );
  }
}
