
const Content = ({parts}) => {

  return(
      parts.map( val => <p key={val.name}>{val.name} {val.exercises}</p>)
    )
  }

  export default Content