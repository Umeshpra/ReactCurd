import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DisplayUser() {

  const [data, setData] = useState([])

  useEffect(()=>{
    try {
      axios.get("http://localhost:3000/api/getalluser")
      .then((res)=>{
        setData(res.data);
      });
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  },[data])
  
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="m-2">
          <h1 className="text-success mb-5 mt-5">Display Data</h1>
          
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="bg-primary">
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Password</th>
                  <th>User Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 ?(
                  data.map((user, index)=>(
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.role}</td>
                    <td>
                      <Link to={'/viewUser/' + user._id} className="btn btn-primary btn-sm me-2">View</Link>
                      <Link to={'/updateUser/' + user._id} className="btn btn-warning btn-sm">Edit</Link>
                      <Link to={'/deleteUser/' + user._id} className="btn btn-danger btn-sm ms-2">Delete</Link>
                    </td>
                  </tr>
                  ))
                
                ):(
                    <tr>
                      <td colSpan={5}> no data available</td>
                    </tr>
                )}
                {/* Add more table rows for each user */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayUser;
