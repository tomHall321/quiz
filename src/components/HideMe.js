import React, { Component } from "react";

class HideMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isItHidden: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
        isItHidden: true,
    });
  }

  render() {
    return (
      <p hidden={this.state.isItHidden} onClick={this.handleClick}>
        {this.props.children}
      </p> 
    //   The 'hidden' global attribute is a Boolean attribute indicating that the element is not yet, or is no longer, relevant.
    );
  }
}

export default HideMe;