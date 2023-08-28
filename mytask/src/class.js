import './App.css'
import React from 'react'

class MyClass extends React.Component {
  constructor(){
    super()
    this.state={count:0}
}
    myClick =()=>{
      this.setState({count:this.state.count+5})
}
    render() {
      return <>
      <div>
      <div className="ClickCounter">
        <h1> Class Click Counter</h1>
        <p> No Of Click: {this.state.count} </p>
        <button className="Button" onClick={this.myClick} > Click ME :) </button>
      </div>
        </div>
      </>
    }
  }
export default MyClass;