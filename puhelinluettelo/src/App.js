import React, { useState, useEffect  } from 'react'
//import axios from 'axios'
import server from './services/numbers'
import './index.css'
const PersonForm = (props) =>{
  return(
    <form onSubmit={props.function}>
    <div>name: <input value={props.name} onChange={props.personHandler}/></div>
    <div>number: <input value={props.number} onChange={props.numberHandler} /></div>
    <div><button type="submit">add</button></div>
  </form>
  )

}
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}
const Filter = (props) =>{
  return(
    <div> Filter shown with: <input value={props.value} onChange={props.eventHandler}/></div>
  )
}
const Persons = (props) =>{

  const persons=props.persons
  return (
    <>
    {persons.map(kikkare =>
      <p key={kikkare.id}>{kikkare.name} {kikkare.number}  <button onClick={() => {props.function(kikkare.id)}}>Delete</button></p>
        )}
  </>)
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [visiblePersons, setVisiblePersons]=useState(persons)
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const showMessage = message =>{
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)        
      }, 5000)
  }
  const buttonFunction = id =>{
    if(window.confirm("REALLY?!")){
    server.deleter(id)
    .then(response => {
      console.log(response.data)
      server.getAll()
      .then(response => {
        setPersons(response.data)
      })
            
    }
    )
    .catch(error => {showMessage("Person with this id can't be deleted:" + id)})
    
  }
  }
  useEffect(() => { 
    let copy=[]
    for (var value of persons){
      if (value.name.includes(filter)){
        console.log("found", value.name)
        console.log("with filter", filter)
        copy.push(value)
        console.log(copy)
      }
    }
    setVisiblePersons(copy)

   },[filter]);

   useEffect(() => { 
    setVisiblePersons(persons)
   },[persons]);

   useEffect(() => {
    console.log('effect')
    server.getAll()
    .then(response => {
      setPersons(response.data)
      console.log('persons',persons)
    })
  }, [])
  const addPerson = (event) => {    
        event.preventDefault()
        let duplicate=0;
        let newperson={ name: newName, number: newNumber };
        for (var value of persons){
          if(value.name===newName){
            if(window.confirm("REALLY UPDATE THIS NAME?!" + value.name)){
            server.update(value.id, newperson)
            .then(response=>{
              console.log(response)
              server.getAll()
              .then(response => {
                setPersons(response.data)
              })
            })
            .catch(error => {showMessage(newName + "may not be updated, maby its already removed?")})
            duplicate=1;
            }
          }
        }
        if(duplicate===0){
          server.create(newperson)  
          .then(response => {      
          console.log(response.data )
          setPersons(persons.concat(newperson))
          showMessage("Person " + newName + " added")  
        })
        .catch(error => {showMessage(newName + " can't be created")})
        
        }
        
        setNewName('')
        setNewNumber('')
        console.log(persons)
        console.log('button clicked', event.target)}
        
  

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      
      <Filter value={filter} eventHandler={handleFilterChange} />
      
      <h2>add new:</h2>
      <PersonForm function={addPerson} personHandler={handlePersonChange} name={newName} number={newNumber} numberHandler={handleNumberChange} />

         <h2>Numbers</h2>
      <Persons persons={visiblePersons} function={buttonFunction}/>

    </div>
  )

}

export default App