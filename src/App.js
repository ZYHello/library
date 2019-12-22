import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import LibApp from './LibApp' ;
import LibList from './Liblist' ;
import LibBook from './LibBook' ;
 
class App extends React.Component {
  render(){
    return(
      <Router >
        <div>
          <Route exact path="/" component={LibApp} />
          <Route exact path="/LibList" component={LibList} />
          <Route exact path="/LibBook" component={LibBook} />
        </div>
      </Router>
    )
  }
}
export default App ;