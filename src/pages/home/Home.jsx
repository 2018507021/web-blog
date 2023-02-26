import './Home.css';
import Header from '../../companents/header/Header';
import Posts from '../../companents/posts/Posts';
import Sidebar from '../../companents/sidebar/Sidebar';
const Home = () => {
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>       
      </div>
    </>
  )
}

export default Home
