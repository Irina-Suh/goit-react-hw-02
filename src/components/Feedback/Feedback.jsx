import React from 'react';
import s from "./Feedback.module.css"
const Feedback = ({click, totalFeedback,positiveFeedback}) => {
    return (
              <ul className={s.list}>
              <li>Good: {click.good}</li>
              <li>Neutral: {click.neutral}</li>
              <li>Bad: {click.bad}</li>
              <li>Total: {totalFeedback}</li>
              <li>Positive: {positiveFeedback}%</li>
              </ul>
         
      );
}
export default Feedback