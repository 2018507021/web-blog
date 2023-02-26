import './settings.css'
import Sidebar from '../../companents/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Accounts</span>
            <span className="settingsDeleteTitle">Delete Accounts</span>
        </div>
        <form className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
            <img src="./images/pexels2.jpg" alt="" />
            <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" name="" id="fileInput" style={{display:"none"}}/>
        </div>
        <label >Username</label>
        <input type="text" placeholder="raltunpicak" />
        <label >Email</label>
        <input type="email" placeholder="raltunpicak@gmail.com" />
        <label >Password</label>
        <input type="password" />
        <button className="settingsSubmit">Update</button>
        </form>
        

      </div>
      <Sidebar/>
    </div>
  )
}

export default Settings
