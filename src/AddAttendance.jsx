import React,{useState,useEffect} from 'react'
import axios from "axios";
import "./AddAttendance.css";

function AddAttendance() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const baseUrl = "https://scouts-qrcode.onrender.com/addattendance";

    useEffect(() => {
      setLoading(true)
      fetch(baseUrl)
        .then(response => response.json())
        .then(json => setUsers(json))
        .finally(() => {
          setLoading(false)
        })
    }, [])

    const handleChange = (user) => async () => {
        const res = await axios.post(
          baseUrl, JSON.stringify(user), {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        console.log(res)

    }
  return (
    <div className="App">
    {loading ? (
      <div>Loading...</div>
    ) : (
      <>
        <h1>Users</h1>
        <table border={1}>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.attendance} <button onClick={handleChange(user)}>+</button></td>
            </tr>
          ))}
        </table>
      </>
    )}
  </div>
  )
}

export default AddAttendance