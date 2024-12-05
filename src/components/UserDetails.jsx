import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams(); // Get user ID from URL params
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data); // Set fetched user data to state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, [id]);

  // Show loading message only when loading is true
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render user details once data is fetched
  return (
    <div>
      {user ? (
        <>
          <h1>User Details</h1>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}

export default UserDetails;
