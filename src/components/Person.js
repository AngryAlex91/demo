import React from 'react'
import Child from './Child'


const persons = [
  {
    id:1,
    name:'Alex',
    age:12
  },
  {
    id:2,
    name:'Mike',
    age:15
  }
]

const personList = persons.map(person => <Child key = {person.id} person = {person}/>)



function Person() {

  

 
  return (
    <div>
      {personList}
    </div>
  )
}

export default Person
