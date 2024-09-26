import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const [user, setUser] = useState("");
  const { id } = useParams();

  useEffect(() => {
    try {
      axios.get(`http://localhost:3000/api/userView/${id}`).then((res) => {
        const userData = res.data;
        setUser(userData);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="m-2">
            <h1 className="text-success mb-5 mt-5">View User Data</h1>

            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="bg-primary">
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Password</th>
                    <th>User Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.role}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
