import { useState } from "react";
import {useLoaderData} from "react-router-dom"

const Users = () => {
  const loadedUsers=useLoaderData()
  const [users,setUsers]=useState(loadedUsers)

  const handelDelete = id =>{
    fetch(`http://localhost:5000/user/${id}`,{
      method:'DELETE'
    })
    .then(res =>res.json())
    .then(data =>{
      if(data.deletedCount > 0){
        console.log('deleted successfully')
        const reamainingUser=users.filter(user =>user._id !==id)
        setUsers(reamainingUser)
      }
    })
  }
  return (
    <div>
      <h2>users {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
      users.map(user =>   <tr key={user._id}>
        <th>1</th>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.lastLoggedAt}</td>
        <td>

          <button onClick={() => handelDelete(user._id)} className="btn">X</button>
        </td>
      </tr>)
    }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;
