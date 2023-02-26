import './singlePost.css'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="../images/pexels3.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet 
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
       <div className="singlePostInfo">
        <span className="singlePostAuthor">
            Author: <b>raltunpicak</b>
        </span>
        <span className="singlePostDate">
            1 hours Ago
        </span>
        </div> 
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione itaque voluptas quia quos distinctio cupiditate dicta fugit officiis alias possimus reprehenderit fugiat veniam a, ea error eligendi aliquam deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sint temporibus unde architecto atque magnam vero, nostrum officiis laboriosam dignissimos repudiandae natus sit! Nesciunt ipsa nam quam ea hic ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus rem quidem quae? Excepturi veniam culpa officia natus reiciendis voluptatem veritatis ratione esse magnam. Odio esse nulla alias sit distinctio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, nostrum. Modi quaerat, obcaecati dolorum ut suscipit totam enim soluta praesentium maxime, repellat magni veritatis sint nisi illo quis animi unde.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam atque ut laborum, doloribus, explicabo deleniti recusandae rem iusto reiciendis at assumenda delectus et cupiditate, itaque voluptatum veniam quibusdam in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam, distinctio reprehenderit minima eligendi sint, cupiditate qui alias veritatis molestias, dicta excepturi consequatur suscipit sapiente quae soluta amet hic quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum a qui voluptatem ipsum. Ipsam corporis nam possimus voluptatibus accusantium repellat fugiat est a recusandae odit quas, fuga voluptates adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut eligendi autem pariatur, eos sequi perspiciatis distinctio, tempore id eius molestias fugiat cumque totam unde inventore quidem dicta. Dolore, odio?</p>
      </div>
    </div>
  )
}

export default SinglePost
