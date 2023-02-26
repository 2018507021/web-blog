import { Link } from 'react-router-dom';
import './topBar.css'

const TopBar = () => {
  const user=false;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="fa-brands topIcon fa-linkedin"></i>
        <i className="fa-brands topIcon fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">HOME</Link></li>
            <li className="topListItem"> <Link to="/" className="link">ABOUT</Link></li>
            <li className="topListItem"> <Link to="/" className="link">CONTACT</Link></li>
            <li className="topListItem"> <Link to="/write" className="link">WRITE</Link></li>
            <li className="topListItem"> {user && "LOGOUT" }</li>
            
        </ul>
      </div>
      <div className="topright">
        {
          user ?(
            <img src="images/remove-bg.jpg" alt="" className="TopImage" />
          ):
          (
          <>
            <ul className="topList">
              <li className="topListItem"><Link to="/login" className="link">LOGIN</Link></li>
              <li className="topListItem"><Link to="/register" className="link">REGISTER</Link></li>
            </ul>
              
            
          </>
        )}
        
        <i className="fa-solid topSearchIcon fa-magnifying-glass"></i>
      </div>

    </div>
  )
}

export default TopBar
