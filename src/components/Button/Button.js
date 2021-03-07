import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button className="Button" type="button" onClick={onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
