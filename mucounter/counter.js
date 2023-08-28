import {Component} from 'react'

class Counter extends Component{
    state={count:0}
    increment=()=>{
        this.setState(prevState =>{
            return {
                count:prevState.count+1
            }
        })
    }
    decrement=()=>{
        this.setState(prevState =>{
            return {
                count:prevState.count-1
            }
        })
    }
    Reset=()=>{
        this.setState(prevState =>{
            return {
                count:0
            }
        })
    }
    render(){
        const {count}=this.state
        return(
            <div className='Con'>
                <div className='container'>
                <h1 className='heading'> Counter</h1>
                <p className='count'> {count} </p>
                <div>
                    <button className='button' onClick={this.increment}> Increase</button>
                    <button className='button' onClick={this.Reset}> Reset</button>
                    <button className='button' onClick={this.decrement}> Decrease</button>

                </div>
            </div>
            </div>
        )
    }
}
export default Counter