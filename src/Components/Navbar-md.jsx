import React,{Component} from "react"
import "../stylesheet/navbarmd.css"
import {Link} from "react-router-dom";
export default class Navbarmd extends Component{


    render(){
        return(
            <div className="navbar-container fixed-top d-sm-block d-lg-none d-xl-none">
                <div className="row">
                    <div className="col-6">
                        <Link to="/"><img className="m-1" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/IT_%282017_film%29_logo.svg" alt="it2-logo" width="50px"/></Link>
                    </div>
                    <div className="col-6">
                        <div className="float-right text-navbar">
                        <Link to="/Trailer"><p> Trailer</p></Link>
            <Link to ="/Plot"><p>Plot</p></Link>
            <Link to="/Cast"><p>Cast</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}