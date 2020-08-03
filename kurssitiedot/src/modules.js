import React from 'react'
const Course = (props) =>{
    return(
      
      <div>
          {props.course.map(kikkare =>
            <div key={kikkare.id}>
  
              <Header course={kikkare} />
              <Content parts={kikkare.parts}/>
              <Total parts={kikkare.parts}/>
            </div>
  
          )}
      </div>
    )
          }

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course.name}
      </h1>
    </div>

  )
}
const Content = (props) =>{
  
  return (
    <div>
        <ul>
          {props.parts.map(kikkare =>
          <li key={kikkare.id}>
            {kikkare.name} {kikkare.exercises} 
          </li>

          )}
        </ul>
    </div>
  )
}
const Total = (props) =>{
  const lista = props.parts.map(kikkare => kikkare.exercises)
  const numero= lista.reduce((a, b) => a + b, 0)
  return (
    <p>
      Number of exercises {numero}
    </p>
  )
}

export default Course