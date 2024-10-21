import React from 'react'
import { useParams } from 'react-router-dom'


const UserDetails = ({users}) => {
  const {id} = useParams()
  const user = users.find((user)=>user.id === parseInt(id));

if(!user){
  return <h2>User Not found</h2>
}
  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong></p>
      <p><strong>Age:</strong></p>
      <p><strong>Email:</strong></p>
    </div>
  )
}

export default UserDetails