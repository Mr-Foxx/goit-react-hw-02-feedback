import React, {Component} from "react";
import { Statistics } from "../components/Statistics/Statistics";
import {FeedbackOptions} from "../components/FeedbackOptions/FeedbackOptions";
import { Countainer } from "../components/Section/Section.styled";
import { Section } from "../components/Section/Section";



export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGoodClick=()=>{
    this.setState({good:this.state.good +1})
  }

  handleNeutralClick=()=>{
    this.setState({neutral:this.state.neutral +1})
  }

  handleBadClick=()=>{
    this.setState({bad:this.state.bad +1})
  }

  countTotalFeedback=()=>{
    const{good,neutral,bad}=this.state
    const totalFeedback= good + neutral + bad
    return totalFeedback
  }

  countPositiveFeedbackPercentage=()=>{
    const{good,neutral,bad}=this.state
    const totalFeedback= good + neutral + bad
    const positiveFeedback=Math.round((good / totalFeedback) * 100)
    return positiveFeedback
  }

  handleLeaveFeedback= elem=>{
    this.setState(prevState=>({[elem]: prevState[elem] +1}))
  }


  render(){
    const options = ['good', 'neutral', 'bad'];
    const {good, neutral, bad} = this.state
    const total = good + neutral + bad;

    return(
      

       <Countainer>

          <Section title='Please leave feedback'>

            <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback}/>

          </Section>

            {total===0
            ? <p>Please leave feedback</p>
            : <Section title='Statistic'>
          
             <Statistics
               good={good}
               bad={bad}
               neutral={neutral}
               totalFeedback={this.countTotalFeedback()}
               positiveFeedback={this.countPositiveFeedbackPercentage()}
               />

               </Section>
             }
      
      </Countainer>
   )
  }
};



