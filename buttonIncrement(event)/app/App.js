import React, { Component } from 'react';


export class App extends Component {
  constructor(){
      super();
       this.state = {
          count: 0
      }
      this.handleClick = this.handleClick.bind(this)
      this.names = [{key:0,name:'Zia'}, {key:1,name:'Hira'}, {key:2,name:'Inam'}, {key:3,name:'Rehan'}, {key:4,name:'Tauha'}];
  }
  handleClick(e){
      this.names.push({key:0,name: this.state.count + 5})
      this.setState({count: this.state.count + 1})
  }
  render(){
    var listItems = this.names.map(function(val) {
      return (
        <li>
          {val.name}
        </li>
      ); 
    });

    return (
      <div>
        <ul>
          {listItems}
          {this.state.count}
          <button onClick={ this.handleClick } > X < /button>
        </ul> 
      </div>
    ); 
  }
}


