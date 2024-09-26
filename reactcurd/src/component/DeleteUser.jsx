import axios from 'axios';
import { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

function DeleteUser() {
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    try {
      axios.delete(`http://localhost:3000/api/userDelete/${id}`)
      .then((res)=>{
        toast.success("User deleted Successfully")
        navigate('/displayUser',{state:res.data})
      });
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  },[id,navigate])
  return (
    <>
    
    
    </>
  )
}

export default DeleteUser