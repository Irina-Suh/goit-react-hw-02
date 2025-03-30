import './App.css'
import { useState , useEffect } from 'react';
//import { Counter } from './components/Counter/Counter';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification'

const App = () => {
   // const [ setCounter] = useState(0);
    const [click, setClick] = useState({
        good: 0,
        neutral: 0,
        bad: 0
         
    });
    const updateFeedback = feedbackType => {
        setClick((type) => ({
            ...type,
            [feedbackType]: type[feedbackType] + 1,
        }));
      // setCounter(counter + 1);
        }
        const totalFeedback = click.good + click.neutral + click.bad;

        const handleResetClick = () => {
         //  totalFeedback = 0;
         //  setCounter(0);
             setClick({
              good: 0,
               neutral: 0,
              bad: 0
             });
          
          };
          useEffect(() => {
            const savedStats = JSON.parse(localStorage.getItem('feedback'));
            if (savedStats) {
                setClick(savedStats);
            }
        }, []);

          useEffect(() => {
            localStorage.setItem('feedback', JSON.stringify(click));
        }, [click]);

        
 
  return (
    <>
<Description/>
<Options updateFeedback={updateFeedback}  totalFeedback={totalFeedback} handleResetClick ={handleResetClick}/>

{ 
(totalFeedback > 0) ? <Feedback click={click} totalFeedback={totalFeedback}/>//(<Notification message = {totalFeedback} />) 
                      : (<Notification message="No feedback yet" />)
} 




    </>
  );
};

export default App
