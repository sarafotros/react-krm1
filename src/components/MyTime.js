import React, { Component } from 'react'

export default class MyTime extends Component {
  constructor(props) {
     super(props)
    this.state = {
        time: new Date().toLocaleTimeString()
    }
   setInterval(() => {
       this.setState({
           time: new Date().toLocaleTimeString()
       })
   }, 1000);
  }
    render() {
        // let time = new Date().toLocaleTimeString()
        return (
            <div style={{ width: 150, height: 40, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <span>{this.state.time}</span>
            </div>
        )
    }
}
