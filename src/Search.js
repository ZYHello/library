import React, { Component } from 'react'

class Search extends Component{
  
  render(){
    return (
      <div className='body'>
        <div id='header'>
          <span className='logo'>
            <img className='logo-image' src='headerlogo.svg'/>
          </span>

          <span className='account'>
            <img className='account-image' src='account.svg'/>
          </span>
        </div>
 
        <div className='wrapper'>
          <span className='wrapper-input'>
            <input className='input'>
              请输入关键字
            </input>
          </span>

        <span className='wrapper-button'>
          <button className='button'>
            检索
          </button>
        </span>

        <div className="libList"></div>

        </div>

        <div id='footer'></div>
      </div>
    )
  }
}
export default Search