
import { useState } from 'react'

const Statistics = (props) => {

  return(
    <div>
      <h2>statistics</h2>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all:{props.good + props.neutral + props.bad}</p>
      <p>average:{(props.good * 1 + props.bad * -1)/(props.good + props.neutral + props.bad)}</p>
      <p>positive:{100 * props.good/(props.good + props.neutral + props.bad)}</p>
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
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good = {good}
                  bad = {bad}
                  neutral = {neutral} 
      />

       </div>
  )
}

export default App

