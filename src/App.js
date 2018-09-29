import React, { Component, Fragment } from 'react';

import Header from './Partials/Header/Header';
import Main from './Main/Main'

class App extends Component {
  render() {
    return (

      <Fragment>
        <Header />
        <Main />

      </Fragment>
    );
  }
}

export default App;
