import './App.css';
import { useState } from 'react';

function App() {
  const [searchText,setSearchText] = useState("")
 const languagesList = ["stepehen","sonali","akashay","apurav","barath","malavika","rajesh","hortie","harshi"]
  return (
    <div  style={{width:"50vw",textAlign:"center", marginLeft:"400px"}}>
      <div style={{padding:"15px",borderStyle : "solid", borderWidth: "2px",textAlign:"center"}}>
      
     <input style={{ padding:"15px", fontSize:"15px", border:"solid 1px",borderRadius:"5px",color:"white",backgroundColor:"black"}} id='SearchInput' placeholder='Enter your name' type= "search"  value={searchText} 
      onChange={(event)=>// eslint-disable-next-line 
      {{setSearchText(event.target.value)}}}
      
      /> 
     {languagesList.filter(eachLanguage=> 
         eachLanguage.includes((searchText.toLowerCase())))
         .map(FilteredLang => {
       return(
        <ul style={{textAlign:'center',fontFamily:"Roboto",fontWeight:"bold",fontSize:"20px",shadow:"5px",borderBottom:"solid 1px"}}>{FilteredLang}</ul>
       )
     })}
   </div>
   </div>
  );
}

export default App;
 


      