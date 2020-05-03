import React from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class MessageList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    );
  }
}

export class ChatApp extends React.Component {
  state = {
    messages: [],
    inputMsg: '',
  };

  handleInput = (evt) => {
    this.setState({
      inputMsg: evt.target.value,
    });
  };
  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      const newMessages = [...this.state.messages, text];
      this.setState({
        messages: newMessages,
        inputMsg: '',
      });
    }
  };
  clearMsg = () => {
    this.setState({
      messages: [],
    });
  };
  render() {
    const { messages, inputMsg } = this.state;
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <div>
          <Input
            placeholder="text your message"
            prefix={<UserOutlined />}
            size="middle"
            value={inputMsg || ''}
            style={{ width: '80%' }}
            onChange={this.handleInput}
            onPressEnter={this.handleSend}
          />
          <Button type="primary" onClick={this.handleSend}>
            Send
          </Button>
          <Button type="danger" onClick={this.clearMsg}>
            Clear
          </Button>
        </div>
        {/* <h2>{this.props.time.toLocaleString()}</h2> */}
      </div>
    );
  }
}

export default ChatApp;
