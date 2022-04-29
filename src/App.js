import React, {Fragment, useState, Component} from 'react';
import Header from './components/Layout/Header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/Layout/List';
import FetchProduct from './components/Layout/FetchProduct';

class App extends Component {
  render() {
    return(
      <Fragment>
        <Header/>
        <FetchProduct/>
        <List/>
      </Fragment>
    );
}
}
export default App;
