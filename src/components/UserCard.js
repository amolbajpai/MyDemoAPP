import React from 'react'
import Title from './Title'

function UserCard({name, email, rollNo}) {
  return (
    <div>
        <Title name={name} collegeName={"MJP1"}/>
        <h1>{name}</h1>
        <p>{email} -  {rollNo}</p>
    </div>
  )
}

export default UserCard