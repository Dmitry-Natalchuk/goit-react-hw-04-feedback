import { Component } from 'react';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';




export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
}

  handleClick = acc => {
    this.setState(prevState => ({
    [acc]: prevState[acc] + 1,
  }));
};

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
};

  countPositiveFeedbackPercentage = () => {
    const totalPositive = this.countTotalFeedback()
    const {good} = this.state
    return Math.round(good / totalPositive * 100)
};
render() {
  const { good, neutral, bad } = this.state;
  const totalFeedback = this.countTotalFeedback();
  const totalPositiv = this.countPositiveFeedbackPercentage();
  const options = Object.keys(this.state);

  return (
    <>
    <Section title = "Please leave feedback">
      <FeedbackOptions options={options}  onLeaveFeedback = {this.handleClick} />
    </Section>

     <Section title="Statistics">
      {totalFeedback !== 0 ? (
        <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPositiv}
            />
       ) : (
       <Notification message="There is no feedback" />
     )}
     </Section>
    </>
    )
  }
};
