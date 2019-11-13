import React, { Component } from "react";
import "../stylesheet/home.css";
import BotNav from "./BotNav";
import ModalPlot from "./ModalPlot";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TrailerRoute from "./TrailerRoute";
import CastRoute from "./CastRoute";
import AudioManager from "./AudioManager";
import Navbarmd from "./Navbar-md";
import backgroundHome from"../images/background-home.png"
import redBaloon from "../images/redBaloon.png"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTrailer: false,
      togglePlot: false,
      volume: 0
    };
  }


  render() {
      this.state.volume = 3;
    return (
      <Router>
        <AudioManager/>
        <Route exact path="/" render={() =>

        <div className="background animated fadeIn" style={{backgroundImage: `url(${backgroundHome})`}}>
        <div className="baloon">
          <img src={redBaloon} alt="redBaloon"/>
        </div>

          </div>
      }/>
 
        
        <div id="logo">
            <Link className="d-none d-sm-none d-lg-none d-xl-block" to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/IT_%282017_film%29_logo.svg" /></Link>  
          <div id="text-underlogo" className="d-none d-sm-none d-lg-none d-xl-block">
            <Link to="/Trailer"><h3> Trailer</h3></Link>
            <Link to ="/Plot"><h3>Plot</h3></Link>
            <Link to="/Cast"><h3>Cast</h3></Link>
          </div>
        </div>
        <Navbarmd/>
           <Route exact path="/Plot" component={ModalPlot}/>
      <div className="gif-bg"></div>
           <Route exact path="/Cast" component={CastRoute}/>          
            <Route exact path="/Trailer" component={TrailerRoute}/>
      </Router>
    );
  }
}
