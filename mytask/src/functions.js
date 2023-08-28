
import './App.css'

let count=0
function Mycode(){
    const id =()=>{
    count=count+5
    document.getElementById("mypara").textContent=count;
    }
return(
        <div>
            <div className="App-header">
        <img src={"https://res.cloudinary.com/dswhesdgv/image/upload/v1659604577/samples/food/fish-vegetables.jpg"} className="App-image" alt="" />
        <span className="para">Tomato Resturent</span>
        <div className="Login">
          <span className="Login"> Login </span>
          <span> Sign Up</span>
        </div>
      </div>
      <div className="ClickCounter">
        <h1>Function Click Counter</h1>
        <p> No of clicks :<span id="mypara">0</span></p>
        <button className="Button" onClick={id}> Click ME :) </button>
      </div>
        </div>
    )
}
export default Mycode;
