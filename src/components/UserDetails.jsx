import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const {id} = useParams();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=> response.json())
    .then((data)= setUser(data))
    .catch((error)=> console.error("Error fetching user details:", error))
  }, [id]);

  if(!user){
    return <p>Loading user datails....</p>
  }
  return (
    <div>
     <h1>User Details</h1>
     <p><strong>Name:</strong>{user.name}</p>      
     <p><strong>Email:</strong>{user.email}</p>      
     <p><strong>Phone:</strong>{user.phone}</p>      
     <p><strong>Website:</strong>{user.website}</p>      
     <p><strong>company:</strong>{user.company}</p>      
     <p><strong>Address</strong>{user.address}</p>      
    </div>
  )
}

export default UserDetails