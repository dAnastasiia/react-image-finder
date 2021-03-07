import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  render() {
    const { children } = this.props;

    return <div className="Section">{children}</div>;
  }
}

export default Section;
