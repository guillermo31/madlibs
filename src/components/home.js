import React, { Component } from 'react';

import Header from './header'


class Home extends Component {
  render() {
    return (
      <div className = "home">
        {Header('madlibs', 'random paragraph my name is guillermo ramos ')}

      </div>
    );
  }
}
export default Home;