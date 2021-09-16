import { useState } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
      return;
    }
    if (option === 'neutral') {
      setNeutral(neutral + 1);
      return;
    }
    if (option === 'bad') {
      setBad(bad + 1);
      return;
    }
  };

  const totalFeedbacks = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = good + neutral + bad;

    return Math.round(((total - (neutral + bad)) / total) * 100);
  };

  let total = totalFeedbacks();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Expresso café">
        <FeedbackOptions
          title="Please leave feedback"
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />

        {total ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={total === 0 ? 0 : positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};
