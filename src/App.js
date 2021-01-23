import React, { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";
import styles from "./App.module.css";
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
  mathPercentage = () => {
    return Math.floor(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };
  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions feedbackAction={this.feedbackAction} />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              percentage={this.mathPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
