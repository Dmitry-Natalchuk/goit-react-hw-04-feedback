import { useState } from 'react';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';




export const App = () => {
const [good,setGood] = useState(0)
const [neutral,setNeutral] = useState(0)
const [bad,setBad] = useState(0)

const handleClick = acc => {
  switch (acc){
    case "good" :
      setGood(prevGood => prevGood + 1)
      break;
    case "neutral" :
      setNeutral(prevNeutral => prevNeutral + 1)
      break;
    case "bad" :
      setBad(prevBad => prevBad + 1)
      break;
    default:
      return
  }
};
 

  const countTotalFeedback = () => {
    return good + neutral + bad
};

  const countPositiveFeedbackPercentage = () => {
    const totalPositive = countTotalFeedback()
    return Math.round(good / totalPositive * 100)
};
  const totalFeedback = countTotalFeedback();
  const totalPositiv = countPositiveFeedbackPercentage();
  const options = Object.keys({good,neutral,bad});

  return (
    <>
    <Section title = "Please leave feedback">
      <FeedbackOptions options={options}  onLeaveFeedback = {handleClick} />
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
};
