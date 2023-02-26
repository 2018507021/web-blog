import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form  className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" name="" placeholder="Enter Your Email....." id="" />
        <label>Password</label>
        <input type="password" className="loginInput" />
        <button className="loginSubmit">Submit</button>
        <button className="loginRegisterSubmit"><Link to="/register" className="link">Register</Link></button>
      </form>
    </div>
  )
}

export default Login
