import './post.css';


const Post = () => {
  return (
    <div className="post">
      <img src="../images/pexels2.jpg" alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr/>
        <span className="postDate">2 hours ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aspernatur rem? Odio odit nostrum excepturi earum corrupti ex aliquam at quo aut est, nisi nulla culpa tempore distinctio adipisci reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem, perferendis pariatur vel magnam maiores sequi facilis quasi iure facere atque placeat illum tempora, in recusandae. Deleniti ab molestias dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, laborum perspiciatis ratione fugit impedit veritatis, dignissimos nostrum sunt id vel at. Recusandae temporibus commodi quaerat animi debitis illo saepe deleniti</p>
    </div>
  )
}

export default Post
