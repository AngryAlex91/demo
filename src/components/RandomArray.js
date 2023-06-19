import React, { useState } from 'react'

function RandomArray() {

    const [users, setUsers] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [searchId, setSearchId] = useState('')
    const [searchReasult, setSearchReasult] = useState('')

    function addUser() {
        setUsers([...users, {
            id:users.length,
            name: inputValue
        }])
        setInputValue('')
    }

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    function deleteUser(id) {
        setUsers(users.filter(user => 
            user.id !== id))
    }

    function searchUser() {
        const result = users.find(user => 
            user.id == searchId)
        setSearchReasult(result ? result.name : 'not found')
        setSearchId('')
    }

    const hadleSearchValue = (e) => {
        setSearchId(e.target.value)
    }

  return (
    <>
    <div>
        <input type='text' value={searchId} onChange={hadleSearchValue}/>
        <button onClick={searchUser}>Search user</button>
        <textarea value={searchReasult} readOnly/>
    </div>
    <div>
        <input type='text' value={inputValue} onChange={handleInputValue}/>
        <button onClick={addUser}>Add user</button>
        <ul>
            {users.map(user => 
            <li key={user.ide}>{user.name}
            <button onClick={() => deleteUser(user.id)}>delete user</button></li>)}

        </ul>
        
    </div>
      
    </>
  )
}

export default RandomArray
