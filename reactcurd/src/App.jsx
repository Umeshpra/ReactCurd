import { Route, Routes } from 'react-router-dom'
import Adduser from './component/Adduser'
import { Toaster } from 'react-hot-toast'
import DisplayUser from './component/DisplayUser'
import UpdateUser from './component/UpdateUser'
import DeleteUser from './component/DeleteUser'
import ViewUser from './component/ViewUser'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Adduser/>}></Route>
        <Route path='/displayUser' element={<DisplayUser/>}></Route>
        <Route path='/viewUser/:id' element={<ViewUser/>}></Route>
        <Route path='/updateUser/:id' element={<UpdateUser/>}></Route>
        <Route path='/deleteUser/:id' element={<DeleteUser/>}></Route>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
