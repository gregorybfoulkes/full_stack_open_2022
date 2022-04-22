import React, { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const StatisticLine = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({clicks}) => {
    const total = clicks.good + clicks.neutral + clicks.bad
    const average = total / 3
    const positive = clicks.good * (100/total)

    if (total === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }

    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={clicks.good} />
            <StatisticLine text="neutral" value={clicks.neutral} />
            <StatisticLine text="bad" value={clicks.bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      </div>
    )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad + 1})


  return (
    <div>
      <Header name="Customer feedback" />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Header name="Statistics" />
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App