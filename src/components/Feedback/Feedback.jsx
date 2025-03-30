import React from 'react';
import s from "./Feedback.module.css"
const Feedback = ({click, totalFeedback}) => {
    return (
              <ul className={s.list}>
              <li>Good: {click.good}</li>
              <li>Neutral: {click.neutral}</li>
              <li>Bad: {click.bad}</li>
              <li>Total: {totalFeedback}</li>
              <li>Positive: {Math.round(click.good / totalFeedback * 100)} %</li>
              </ul>
         
      );
}
export default Feedback