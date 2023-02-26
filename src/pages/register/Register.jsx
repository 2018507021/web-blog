import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form  className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" name="" placeholder="Enter Your Username....." id="" />
        <label>Email</label>
        <input type="email" className="registerInput" name="" placeholder="Enter Your Email....." id="" />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter Your Password....." />
        <button className="RegisterSubmit">Register</button>
        <button className="RegisterLogin"><Link to="/login" className="link">Login</Link></button>
      </form>
    </div>
  )
}

export default Register
