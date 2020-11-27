import React, { Component } from "react";

class MinimumLength extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    let { value } = this.state;
    let { length } = this.props;

    return (
      <>
        <input onChange={(event) => this.handleInput(event)} value={value} />
        <p hidden={value.length >= length ? true : false}>
          Too short!
        </p>
      </>
    );
  }
}

export default MinimumLength;