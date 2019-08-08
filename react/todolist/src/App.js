import React, { Component } from 'react';
import UserInput from './UserInput'

export default class App extends Component {
  state = {
    info:[
    {
      username: "Deyaa",
     password: 123456},
    {
      username: "Jouza",
     password: 654321
    }
  ]
}

add = (newInfo) => {

  newInfo.id = this.state.info.length + 1;

  this.setState({

    info: [...this.state.info, newInfo]

  })
}

  render() {
  return (
    <div >
      WORKS
      <UserInput info = {this.state.info} add={this.add}/>
    </div>
  );
}}

