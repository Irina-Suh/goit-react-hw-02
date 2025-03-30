
import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {


  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState({
      good: 0,
      neutral: 0,
      bad: 0
       
  });
  const updateGood = () => {
    setClick({
      ...click,
       good:  click.good + 1
    });
    setCounter(counter + 1);
  };

  const updateNeutral = () => {
    setClick({
      ...click,
      neutral:  click.neutral + 1
    });
    setCounter(counter + 1);
  };

  const updateBad = () => {
    setClick({
      ...click,
       bad:  click.bad + 1
    });
    setCounter(counter + 1);
  };

  const handleResetClick = () => {
    setCounter(0);
    setClick({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <div className={s.flex}>
          <button className='btn' onClick={updateGood}>
            Good
          </button>
          <button onClick={updateNeutral} className='btn'>
          Neutral
          </button>
          <button onClick={updateBad} className='btn'>
          Bad
          </button>
          <button onClick={handleResetClick} className='btn'>
            Reset
          </button>
          <ul>
          <li>Good: {click.good}</li>
          <li>Neutral: {click.neutral}</li>
          <li>Bad: {click.bad}</li>
          <li>Total: {counter}</li>
          <li>Positive: {click.good / counter * 100} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
};