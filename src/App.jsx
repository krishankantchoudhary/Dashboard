
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Togglemode from "../src/Components/Togglemode"
import TaskManager from './pages/TaskManager'
import { FaRegUser } from "react-icons/fa";
import LoginPage from './pages/LoginPage'

function App() {
 

  return (
    <div >
      <div className="navbar">
      <FaRegUser className='icon'/>
      <NavLink className ="a" to="/">Dashboard</NavLink>
      <NavLink className="a" to="/LoginPage">Login Page</NavLink>
      <NavLink className ="a" to="/TaskManager">TaskManager</NavLink>
      </div>

      

      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
        <Route path="/TaskManager" element={<TaskManager></TaskManager>}></Route>
      </Routes>

      <Togglemode></Togglemode>

    </div>
  )
}

export default App
