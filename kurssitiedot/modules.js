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

export default Course