import React, { Component } from 'react';

export class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <button onClick={e => this.setState({ good: this.state.good + 1 })}>
          Good
        </button>
        <button
          onClick={e => this.setState({ neutral: this.state.neutral + 1 })}
        >
          Neutral
        </button>
        <button onClick={e => this.setState({ bad: this.state.bad + 1 })}>
          Bad
        </button>
        <p>Statistics</p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}
