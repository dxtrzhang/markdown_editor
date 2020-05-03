import React from 'react';
import ChatApp from './examples/ChatApp.js';
import TimerUseHOF from './examples/TimerUseHOF.js';
import './App.css';

const routeMap = {
  chat: ChatApp,
  timerUseHOF: TimerUseHOF,
};

const styles = {
  fontFamily: 'sans-serif',
  paddingLeft: '250px',
};

class App extends React.PureComponent {
  handleLinkClick = (key) => {
    window.history.pushState(null, '', `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, '');

    let CurrentPage = routeMap[currentPage] || <div>Hello</div>;
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map((key) => (
            <li
              key={key}
              className={key === currentPage ? 'is-active' : ''}
              style={{ listStyle: 'none' }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: '30px 0' }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

export default App;
