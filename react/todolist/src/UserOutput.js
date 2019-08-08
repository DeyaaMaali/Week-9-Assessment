import React, { Component } from 'react';


export default class UserOutput extends Component {
  render() {
  return (
    <>
      {/* <p>{this.props.info[0].username}</p>
      <p>{this.props.info[1].username}</p> */}

      <li>{this.props.info.username}</li>
    </>
  );
}}

