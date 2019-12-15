import React, { Component } from 'react'
import LibCommentInput from './LibCommentInput'
import LibCommentList from './LibCommentList'

class LibBook extends Component{
  constructor(){
    super() ;
  }

  render(){
    return(
    <div>
      <div className="basic">
        <span className="title">
            <img/>
            <p clasName="subtitle"></p>
        </span>
        <span className="basic-favor"></span>
        <span className="basic-photo"></span>
        <span className="basic-information">
          <span className="basic-name"></span>
          <span className="basic-mark"></span>
          <span className="information">
            <p className="author">作者：</p>
            <p className="publisher">出版社：</p>
            <p className="time">出版时间：</p>
            <p className="isbn">ISBN：</p>
            <p className="price">价格：</p>
            <p className="type">图书类型：</p>
            <p className="location">出版地址：</p>
          </span>
        </span>
        <div className="class">
            <img/>
            <p></p>
        </div>
      </div>

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