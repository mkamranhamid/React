import React, { Component } from 'react';


export class App extends Component {
    constructor(props){
      super(props);
    //   console.log("PROPS IS BELOW")
    //   console.log(props)
      this.state = {
          post: 100,
          message: ''
      }
      this.welcomeMessage = 'Hello World';
      this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(postId, e){
      console.log(this.state.message)
  }
  
  handleChange(e){
      this.setState({message: e.target.value})
  }

  render(){
    return (
      <div> 
        <div>
        <p>{this.state.message}</p>
        <input type='text' value={this.state.message} onChange={this.handleChange.bind(this)} placeholder="Write a comment..."/></div>
        <button onClick={ this.handleClick}>Add</button>
      </div>
    );
  }
}