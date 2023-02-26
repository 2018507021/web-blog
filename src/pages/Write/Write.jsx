import './write.css'

const Write = () => {
  return (
    <div className="write">
        <img src="./images/pexels4.jpg" alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" name="" id="" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your store...." className="writeInput writeText" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="writeSubmit"> Submit </button>
      </form>
    </div>
  )
}

export default Write
