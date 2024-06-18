import React, { useState, useEffect } from 'react';

function Question6() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users/');
        const result = await response.json();
        setData(result.users); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Question 6</h2>
      <div>
        {data.length > 0 ? (
          data.map((user) => (
            <div key={user.id}>
              <p>Name: {user.firstName} {user.lastName}</p>
              <p>Email: {user.email}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Question6;
