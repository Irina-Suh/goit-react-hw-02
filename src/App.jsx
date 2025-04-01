import './App.css'
import { useState , useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification'

const App = () => {

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
      
        }
        const totalFeedback = click.good + click.neutral + click.bad;
        const positiveFeedback = totalFeedback>0 ? (Math.round(click.good / totalFeedback * 100)) : 0;
       
        const handleResetClick = () => {
         
             setClick({
              good: 0,
              neutral: 0,
              bad: 0
             });
        
          };

      useEffect(() => {
    
        const saved = window.localStorage.getItem('feedback');
        if (saved) {
          const parsed = JSON.parse(saved);
          setClick({
              good: parsed.good,
              neutral: parsed.neutral,
              bad: parsed.bad})
         } 
     
    }, []);


        useEffect(() => {
          const local = {
              
              good: click.good,
              neutral: click.neutral,
              bad: click.bad,
              totalFeedback: totalFeedback,
              positiveFeedback: positiveFeedback
  
          };
          localStorage.setItem('feedback', JSON.stringify(local));
      }, [click]);

        
 
  return (
    <>
<Description/>
<Options updateFeedback={updateFeedback}  totalFeedback={totalFeedback} 
         handleResetClick ={handleResetClick}/>

{ 
(totalFeedback > 0) ? <Feedback click={click} totalFeedback={totalFeedback}  positiveFeedback ={positiveFeedback} />//(<Notification message = {totalFeedback} />) 
                      : (<Notification message="No feedback yet" />)
} 

    </>
  );
};

export default App
