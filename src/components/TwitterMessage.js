import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message:''
    };
  }

  handleChars= event => {
    this.setState({
      message:event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.handleChars} maxChars={this.props.maxChars} type="text" name="message" id="message" />
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
