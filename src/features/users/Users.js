import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector(state => state.users)
  const usersArray = users.map(user => 
    <li key={user.username}>{user.username}</li>
    )
  return (
    <div>
      <ul>
        Users!
        {usersArray}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
