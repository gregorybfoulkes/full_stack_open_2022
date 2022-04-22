import { useState } from 'react'

const Button = ({text,onclick}) => {

  return (
    <button onCLick={onclick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={setGood(good + 1) } text='Good'/>
      <h2>Statistics</h2>
    </div>
  )
}

export default App