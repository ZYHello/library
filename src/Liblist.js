import React, { Component } from 'react'
import LibBookCase from './libBookCase'

class LibList extends Component{
  constructor(){
    super() ;
 }

  render(){
    return (
      <div className="list">
        <div className="list-wrapper">
          <input className="list-input"/>
          <button className="list-button">检索</button>
        </div>

        <div className="list-number"></div>
        <LibBookCase/>

      </div>
      )
  }
}
export default LibList