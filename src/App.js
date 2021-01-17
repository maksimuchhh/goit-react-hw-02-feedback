import React, { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackAction = (evt) => {
    const name = evt.target.name;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions feedbackAction={this.feedbackAction} />
        </Section>
        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.good + this.state.neutral + this.state.bad}
              percentage={Math.floor(
                (this.state.good * 100) /
                  (this.state.good + this.state.neutral + this.state.bad)
              )}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
