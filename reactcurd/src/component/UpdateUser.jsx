import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from "react-hot-toast"

function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/userView/${id}`)
      .then((res) => {
        const userData = res.data;
        setName(userData.name);
        setEmail(userData.email);
        setPassword(userData.password);
        setRole(userData.role);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit= (e)=>{
    e.preventDefault();
    // console.log(name,email,password,role)
    const userData = {
      name,
      email,
      password,
      role
    }
    try {
      axios.put(`http://localhost:3000/api/userUpdate/${id}`, userData)
      .then((res)=>{
        toast.success("User updated Successfully", res.message)
        navigate('/displayUser')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data.message);
      });
    } catch (error) {
      console.log(error)
      toast.message(error.data.message)
      
    }
  }
  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h3>User Update</h3>
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <label to="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label to="exampleInputPassword1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label to="exampleInputPassword1">password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label to="exampleInputPassword1">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                 
                </div>
                {/* <!-- /.card-body --> */}

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- form start --> */}
      </div>
    </>
  );
}

export default UpdateUser;
