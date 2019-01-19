import React, { Component } from 'react';
import './App.css';
import NaviBar from './Components/NavBar';
import { Jumbotron, Button, Carousel, Grid, Row, Col } from 'react-bootstrap';
import GameSlides from './Components/GameSlides';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <NaviBar/>
        <Jumbotron>
          <h1>Knights Arcade</h1>
          <p>
            We really need a new name
          </p>
          <p>
            <Button bsStyle="primary">Button</Button>
          </p>
        </Jumbotron>

        <GameSlides/>
      </div>
    )
  }
}

export default Home;