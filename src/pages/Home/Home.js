import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/">Welcome</Link>
      </div>
    );
  }
}

export default Home;
