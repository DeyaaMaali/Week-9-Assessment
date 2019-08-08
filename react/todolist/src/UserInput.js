import React, { Component } from 'react';
import UserOutput from './UserOutput'


export default class UserInput extends Component {
  state = {
    username: ""
  }

  addItem = (e) =>{
    this.setState({username: this.state.username = e.target.value})
    console.log(this.state.username)
  }
  render() {
  return (
    <div >
      <ul>
      <input type="text" onChange={this.addItem}/> <button onClick={this.props.add.bind(this, this.state)}>Press</button>
      {this.props.info.map(elem => <UserOutput info={elem}/>)}
      </ul>
    </div>
  );
}}

