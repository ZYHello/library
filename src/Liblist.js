import React, { Component } from 'react'
import LibBookCase from './libBookCase'

class LibList extends Component{
  constructor(){
    super() ;
 }

  render(){
    return (
      <div className="list-body">
        <div className="header">
          <span className='logo'> </span>
          <span className='account'></span>
        </div>

        <div className="list-wrapper">
          <input className="input"/>
          <button className="button">检索</button>
        </div>

        <div className="list-number">共检测到 本书</div>
        <LibBookCase/>
        
        <div className="list-image"></div>
      </div>
      )
  }
}
export default LibList