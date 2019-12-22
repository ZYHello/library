import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LibBookCase extends Component{
  constructor(){
    super() ;
  }

  render() {
    return(
       <Link to="/LibBook">
        <div className="book">
          <span className="book-photo">
            <img className="error" src="image-error.png"/>
          </span>
  
          <span className="book-imformation">
            <span className="book-title">
              <span className="red">r</span>
                人类简史：从动物到上帝
            </span>

            <span className="book-background">
              <p className="author">书籍作者：</p>
              <p className="publisher">出版商：</p>
              <p className="date">出版日期：</p>
            </span>

            <span className="book-mark">
              <p><b>★★★★☆ 4.0</b></p>
            </span>
          </span>
        
        </div>
      </Link>
    )
  }
}
export default LibBookCase