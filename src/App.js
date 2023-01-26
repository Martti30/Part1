
import { useState } from 'react'

const Button = (props) => {

return (
      <button onClick={() => props.setCounter(props.counter+ 1)}>{props.text}</button>
      
)

}



const StatisticLine = (props) => {

return (
      
      <p>{props.text} {props.value}</p>
      // <p>neutral: {props.neutral}</p>
      // <p>bad: {props.bad}</p>
)


}

const Statistics = (props) => {

  if (props.good + props.neutral + props.bad===0) {
    return (

      <h3>
      No feedback given
      </h3>)
    }

  return(
    <div>
      <h2>statistics</h2>

      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value ={(props.good * 1 + props.bad * -1)/(props.good + props.neutral + props.bad)} />
      <StatisticLine text="positive" value ={100 * props.good/(props.good + props.neutral + props.bad)} />



      
      </div>
  )

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  return (
    <div>
      <h1>give feedback</h1>
     <Button counter = {good} setCounter = {setGood} text="good"/>
     <Button counter = {neutral} setCounter = {setNeutral} text="neutral"/>
     <Button counter = {bad} setCounter = {setBad} text="bad"/>





      <Statistics good = {good}
                  bad = {bad}
                  neutral = {neutral} 
      />

       </div>
  )
}

export default App

