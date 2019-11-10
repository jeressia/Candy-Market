import React, { Component } from 'react';

import ShowInventory from '../Inventory/Inventory';
import './Home.scss';

class Home extends Component {

  render () {
    const testText = this.props.testText;
    return (
      <div className="Home">
          <h1 className="pageTitle">{testText}</h1>
          <ShowInventory/>
      </div>
    );
  }
}

export default Home;