import './some.css';
import Userprofile from './some'
import {Component} from 'react'  
const intialuserDetailsList=[
  { uniqueNo:1,
    imageurl: 'https://res.cloudinary.com/dswhesdgv/image/upload/v1659604578/samples/people/smiling-man.jpg'  ,
    name:'Venaktesh',
    role:'Software Engineer',
  },
  { uniqueNo:2,
    imageurl: 'https://res.cloudinary.com/dswhesdgv/image/upload/v1661246073/photo-1544005313-94ddf0286df2_ppouos.jpg'  ,
    name:'Sushmitha',
    role:'Backend developer',
  },
  { uniqueNo:3,
    imageurl: 'https://res.cloudinary.com/dswhesdgv/image/upload/v1661246071/images_1_xroq3g.jpg'  ,
    name:'Swarup',
    role:'Frontend developer',
  }
  ,
  { uniqueNo:4,
    imageurl: 'https://res.cloudinary.com/dswhesdgv/image/upload/v1661246071/images_hyi1t5.jpg'  ,
    name:'Harshi',
    role:'Flutter developerrr ',
  },
  { uniqueNo:5,
    imageurl: 'https://res.cloudinary.com/dswhesdgv/image/upload/v1661760904/pexels-photo-2379004_ov4tuu.jpg'  ,
    name:'Anupam',
    role:'IOS developerrrrrr',
  }
]


class  App extends Component{
  state={searchInput:"",
  userDetailsList:intialuserDetailsList,
}

  onChangeInput=event=>{
    this.setState({
      searchInput: event.target.value /* we can keep functions and objects in setstate */
    })
  }
  render(){
    const {searchInput,userDetailsList} =this.state
    const searchResults=userDetailsList.filter(eachUser=>
      eachUser.name.toLowerCase().includes(searchInput)
    )
    console.log(searchResults)
  return(                                                                                                                                                                                                       
    <div className="app-container">
    <h1 className="title"> User List </h1>
    <input type="search" onChange={this.onChangeInput} value={searchInput}/>
    <ul>
      { searchResults.map((eachItem)=>(
        <Userprofile userDetails={eachItem} key={eachItem.uniqueNo}/>
      ))}
    </ul>
  </div>                              
  )}
}

         

export default App;
 