import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LibApp extends Component{
  constructor () {
    super() ;
  }

  render(){
    return (
      <div className="body">
        <div className='header'>
          <span className='logo'> </span>
          <span className='account'></span>
        </div>
 
        <div className='wrapper'>
          <span className='wrapper-input'>
            <input className='input' placeholder="  请输入关键字检索"/>
          </span>

          <span className='wrapper-button'>
            <Link to="/LibList">
              <button className='button' onClick="">
                检索
              </button>
            </Link>
          </span>
        </div>

        <div className='footer'>
          <p>加入我们-联系方式-意见反馈</p>
          <p>POWERED BY TWT STUDIO@2000-2019</p>
        </div>
      </div>
    )
  }
}
export default LibApp