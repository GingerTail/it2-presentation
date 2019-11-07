import React,{Component} from "react"
import "../stylesheet/castroute.css"
import InfoActor from "./InfoActor";
import isaiah from "../images/isaiah.png"
import richie from "../images/richie.png"
import james from "../images/james.png"
import jessica from "../images/jessica.png"
import jay from "../images/jay.png"

export default class CastRoute extends Component{
        constructor(props){
            super(props);
            this.state={
                actorName: "",
                activeInfo: false
            }
        }

        DisplayInfo= (e)=>{
                console.log(e)
                switch(e){
                    case "isaiah" :  
                    case "james": 
                    case "jessica":
                    case "richie":
                    case "jay":
                        default: break;
                }
        }

    render(){
        return(
            <>
            <div className="cast-container animated fadeIn">
                <div className="cast-bg animated fadeIn">
                <img src={isaiah}  onMouseEnter={(e) => this.DisplayInfo(e.currentTarget.alt)} className="actor-img" alt="isaiah"/>
                  <img src={richie} className="actor-img" alt="isaiah"/>
                <img src={james} className="actor-img" alt="isaiah"/>
                <img src={jessica} className="actor-img" alt="isaiah"/>
            <img src={jay} className="actor-img" alt="isaiah"/>  
                </div>
                <div className="bg-use">

                </div>
                 </div>
            </>
        )
    }
}