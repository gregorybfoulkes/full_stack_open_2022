const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  const Header = (props) => {
    console.log(props.course.name)
    return (
      <div>
        <h2>{props.course.name}</h2>
      </div>
    )
  }
  const Content = (props) => {
    console.log(props.parts)
    return(
      <div>
        <Part part={props.parts.parts[0].name} exercise={props.parts.parts[0].exercises}/>
        <Part part={props.parts.parts[1].name} exercise={props.parts.parts[1].exercises}/>
        <Part part={props.parts.parts[2].name} exercise={props.parts.parts[2].exercises}/>
      </div>
     
    )
  }

  const Part = (props) => {

    return(
      <div>
        <p>{props.part} {props.exercise}</p>
      </div>
    )
  }

  const Total = (props) => {

    return (
      <div>
        <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course} />
      <Total parts={course}/>
    </div>
  )
}

export default App