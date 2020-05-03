import React from 'react';
import withTimer from './withTimer';

class TimerUseHOF extends React.Component {
  render() {
    return <h2>{this.props.time.toLocaleString()}</h2>;
  }
}

export default withTimer(TimerUseHOF);
