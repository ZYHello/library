import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LibCommentInput from './LibCommentInput'
import LibCommentList from './LibCommentList'

class LibBook extends Component{
  constructor(){
    super() ;
  }

  render(){
    return(
      <div className="book-body">
        <div className="header">
          <span className='logo'> </span>
          <span className='account'></span>        
        </div>

      
        <Link to="/LibList/">
          <div className="back">
            ◀返回上一级
          </div>
        </Link>

        <div className="basic">
          <span className="title">
            <img src="icon-basicinfo.svg" className="icon-info"></img>
            <p clasName="subtitle">| BASTIC INFORMATION</p>
          </span>
          <span className="basic-favor"></span>
          <span className="basic-photo"></span>
          <span className="basic-information">
            <span className="basic-name"></span>
            <span className="basic-mark"></span>
            <span className="information">
              <p className="_author">作者：</p>
              <p className="_publisher">出版社：</p>
              <p className="_date">出版时间：</p>
              <p className="isbn">ISBN：</p>
              <p className="price">价格：</p>
              <p className="type">图书类型：</p>
              <p className="address">出版地址：</p>
            </span>
          </span>
          <div className="class">
            <img/>
            <p></p>
          </div>
        </div>

        <div className="interval"></div>

        <div className="location">
          <div className="location-title">
            <img/>
            <p className="subtitle"></p>
          </div>
          <table>
            <tr>
              <td>索书位</td>
              <td>所在馆藏地点</td>
              <td>在馆状态</td>
            </tr>
            <tr>
              <td></td>
               <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>          
          </table>
        </div>

        <div className="interval"></div>

        <div className="comments">
          <div className="title">
              <img/>
              <p className="subtitle"></p>
          </div>
          <div><LibCommentInput/></div>
          <div><LibCommentList/></div>
        </div>
      </div>
    )
  }
}
export default LibBook