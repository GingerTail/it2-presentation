import React,{Component} from "react"
import "../stylesheet/infoactor.css"

export default class InfoActor extends Component{
    

    render(){
        return(
            <>
            <div className="actor-container">
                <div className="row">
                <h1>Test</h1>
                    <div className="col-12">
                        <img src="http://yesofcorsa.com/wp-content/uploads/2019/06/It-Chapter-Two-Wallpaper-1024x576.jpg" className="img-fluid"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}