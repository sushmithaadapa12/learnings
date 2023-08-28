import './App.css'
const Userprofile=(props)=>{
    const  {userDetails}=props
    const {imageurl,name,role,uniqueId}=userDetails
    const onDelete=()=>{
        console.log("hi ")
    }
    return(
    <li className="user-card-container">
        <img src={imageurl} className="avatar" alt="avatar"/>   
        <div className="user-details-container">
            <h1 className="user-name">{name} </h1>
            <p className="user-designation"> {role}</p>
        </div>
        <button className='delete-button' onClick={onDelete} > 
            <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" className='delete-img'/>
        </button>
    </li>
    )
}
export default Userprofile