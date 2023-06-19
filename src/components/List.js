import React from 'react'
import Person from './Person'

function List() {
    const persons = [
        {
            id:1,
            name:'Alex',
            age:'12'

        },
        {
            id:2,
            name:'Mike',
            age:'16'


        }
]

const personList = persons.map((person,index) => (<Person key ={index} person={person}/>
   
))


  
  return (
    <div>
      {personList}
    </div>
  )
}

export default List
