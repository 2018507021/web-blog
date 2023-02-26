import './single.css'
import Sidebar from '../../companents/sidebar/Sidebar'
import SinglePost from '../../companents/singlePost/SinglePost'
const Single = () => {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default Single
