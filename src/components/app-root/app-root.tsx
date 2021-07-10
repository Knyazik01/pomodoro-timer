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
        <header>
          <img src={Logo} alt='' class="logo" />
          {/*<Logo />*/}
          <h1>Pomodoro timer</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/timer" component="app-timer" exact={true}/>
            </stencil-route-switch>
          </stencil-router>
        </main>

        <footer>
          &copy; <a href='https://github.com/Knyazik01' target="_blank" title="GitHub account">Knyazik01</a>
        </footer>
      </div>
    );
  }
}
