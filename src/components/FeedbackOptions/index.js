import React, { Component } from "react";

export class FeedbackOptions extends Component {
  render() {
    const { feedbackAction } = this.props;
    return (
      <>
        <button name="good" onClick={feedbackAction}>
          Good
        </button>
        <button name="neutral" onClick={feedbackAction}>
          Neutral
        </button>
        <button name="bad" onClick={feedbackAction}>
          Bad
        </button>
      </>
    );
  }
}

export default FeedbackOptions;
