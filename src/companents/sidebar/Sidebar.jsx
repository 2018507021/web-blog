import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
     <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="../images/me.jpg" className="sidebarImg" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis similique enim officia ducimus provident!</p>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORİES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Football</li>
            <li className="sidebarListItem">Game</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
        </ul>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="fa-brands sidebarIcon fa-linkedin"></i>
            <i className="fa-brands sidebarIcon fa-instagram"></i>
        </div>
    </div>
    </div>
  )
}

export default Sidebar
