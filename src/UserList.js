import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));

  function handleAlbumClick(userId) {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Електронна пошта</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button onClick={() => handleAlbumClick(user.id)}>Album</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;