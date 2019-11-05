import React,{Component} from "react"
import "../stylesheet/traileroute.css"

export default class TrailerRoute extends Component{

    render(){
        return(
            <div id="trailer" className="animated fadeIn">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zqUopiAYdRg?autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )
    }
}