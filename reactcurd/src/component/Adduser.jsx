import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

function Adduser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [isAuth, setIsAuth] = useState(false);
  // const [isAuth, setIsAuth] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, role);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/userInsert",
        {
          name,
          email,
          password,
          role,
        }
      );
      toast.success("User Added Successfully",data.message);

      setName("");
      setEmail("");
      setPassword("");
      setRole("user");
      setIsAuth(true);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  if (isAuth) {
    return <Navigate to={"/displayUser"} />;
  }
  return (
    <>
      <div className="container mt-5" style={{ width: "40%" }}>
        <h2 className="bg-info text-center">Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
            >
              <option value={"user"}>User</option>
              <option value={"admin"}>Admin</option>
            </select>
          </div>
          <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
        </form>
      </div>
    </>
  );
}

export default Adduser;
