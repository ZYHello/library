import React, { Component } from 'react'
import LibBook from './LibBook'

class LibBookCase extends Component{
  constructor(){
    super() ;
  }

  render() {
    return(
      <div className="book" onclick="">
        <span className="book-photo"></span>

        <span className="book-imformation">
          <div className="book-title">
            <span className="book-name"></span>
            <span className="book-mark"></span>
          </div>
            
          <span className="book-background">
            <p className="author">书籍作者：</p>、
            <p className="publisher">出版商：</p>
            <p className="date">出版日期：</p>
            <p className="isbn">ISBN:</p>
          </span>
        </span>

        <span><LibBook/></span>
      </div>
    )
  }
}
export default LibBookCase