
import React from "react";
import './../styles/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from "./UserList";
import UserDetails from "./UserDetails";
const App = () => {

  const users = [
    {id: 1, name: "Leanne Graham", age: 28, email:"John@example.com"},
    {id:2, name: "Jane Smith", age:33, email:"Jane@example.com"},
    {id:3, name: "Sam Wilson" , age:33, email:"surend@example.com"},
  ]
  return (
 
    <Router>
 
   <Routes>
    <Route path="/" element={<UserList users={users } /> }/>
    <Route path="/user/:id" element={<UserDetails users={users}/>}/>
   </Routes>
   </Router>
  
  )
}

export default App
