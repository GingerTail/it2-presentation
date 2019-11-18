import React,{Component} from "react"
import "../stylesheet/castroute.css"
import InfoActor from "./InfoActor";
import isaiah from "../images/isaiah.png"
import richie from "../images/richie.png"
import james from "../images/james.png"
import jessica from "../images/jessica.png"
import jay from "../images/jay.png"
import CastLgModal from "./CastLgModal";

export default class CastRoute extends Component{
        constructor(props){
            super(props);
            this.state={
                actorName: "",
                character: "",
                activeInfo: false
            }
        }

        DisplayInfo= (e)=>{
                console.log(e)
                this.setState({activeInfo: true})
                switch(e){
                    case "isaiah" :  
                    this.setState({actorName : "Isaiah Mustafa"})
                    this.setState({character: "Mike Hanlon"})
                    break;
                    case "bill":
                            this.setState({actorName : "Bill Hader"})
                            this.setState({character: "Richie Tozier"})
                            break;
                    case "james": 
                    this.setState({actorName : "James McAvoy"})
                    this.setState({character: "Bill Denbrough"})
                    break;
                    case "jessica":
                            this.setState({actorName : "Jessica Chastain"})
                            this.setState({character: "Beverly Marsh"})
                            break;
                    case "jay":
                            this.setState({actorName : "Jay Ryan"})
                            this.setState({character: "Ben Hanscom"})
                            break;
                        default: break;
                }
        }

    render(){
        return(
            <>
            <div className="cast-container animated fadeIn">
                {this.state.activeInfo &&  <CastLgModal name={this.state.actorName} character={this.state.character}/> }
                <div className="cast-bg animated fadeIn d-none d-sm-none d-lg-none d-xl-block">
                <img src={isaiah}  onMouseEnter={(e) => this.DisplayInfo(e.currentTarget.alt)} onMouseLeave={() => this.setState({activeInfo : false})} className="actor-img" alt="isaiah"/>
                <img src={richie} onMouseEnter={(e) => this.DisplayInfo(e.currentTarget.alt)} onMouseLeave={() => this.setState({activeInfo : false})} className="actor-img" alt="bill"/>
                <img src={james} onMouseEnter={(e) => this.DisplayInfo(e.currentTarget.alt)}  onMouseLeave={() => this.setState({activeInfo : false})} className="actor-img" alt="james"/>
                <img src={jessica} onMouseEnter={(e) => this.DisplayInfo(e.currentTarget.alt)} onMouseLeave={() => this.setState({activeInfo : false})} className="actor-img" alt="jessica"/>
                <img src={jay}onMouseEnter={(e) => this.DisplayInfo(e.currentTarget.alt)}  onMouseLeave={() => this.setState({activeInfo : false})} className="actor-img ml-4" alt="jay"/>  
                </div>
               
                <div className="cast-bg-small aniamted fadeIn d-block d-lg-block d-xl-none">
                <div className="row text-center">
                    <div className="col-12 bg-cast-small" style={{backgroundImage: 'url("https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/06/screen_shot_2018-06-10_at_12.01.42_pm.png")'}}>
                        <div className="text-cast-small" >
                        <h3>Isaiah Mustafa</h3>
                        <h5>As Mike Hanlon</h5>
                        <p><strong>Description</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus cum, accusantium exercitationem, inventore tempore accusamus, eaque fugiat ut libero tenetur voluptatibus. Nisi dolor magni alias, facere itaque maiores pariatur cumque harum, nam distinctio sequi officia deleniti? Omnis, reiciendis aliquam. Natus ullam harum nostrum quaerat. Atque recusandae saepe, eligendi pariatur explicabo laudantium ullam qui totam tempora hic vel animi ex nesciunt quam, minus cumque dolores distinctio inventore laborum, ipsum nobis aliquid. Veritatis tenetur cupiditate consectetur corrupti incidunt, sint praesentium nihil dolores quas quaerat quo impedit cumque id magni labore adipisci voluptate magnam sunt aliquam. Amet quae ut officiis tempore similique.</p>
                        </p>
                        </div>
                    </div>
                    <div className="col-12 bg-cast-small" style={{backgroundImage: 'url("https://mr.comingsoon.it/imgdb/PrimoPiano/94162_ppl.jpg")'}}>
                    <div className="text-cast-small" >
                    <h3>Bill Hader</h3>
                    <h5>As Richie Tozier</h5>
                        <p><strong>Description</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus cum, accusantium exercitationem, inventore tempore accusamus, eaque fugiat ut libero tenetur voluptatibus. Nisi dolor magni alias, facere itaque maiores pariatur cumque harum, nam distinctio sequi officia deleniti? Omnis, reiciendis aliquam. Natus ullam harum nostrum quaerat. Atque recusandae saepe, eligendi pariatur explicabo laudantium ullam qui totam tempora hic vel animi ex nesciunt quam, minus cumque dolores distinctio inventore laborum, ipsum nobis aliquid. Veritatis tenetur cupiditate consectetur corrupti incidunt, sint praesentium nihil dolores quas quaerat quo impedit cumque id magni labore adipisci voluptate magnam sunt aliquam. Amet quae ut officiis tempore similique.</p>
                        </p>
                        </div>
                    </div>
                    <div className="col-12 bg-cast-small" style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3NAiYJJJ5ao4oDW9ZQ7ta9512Y6ne9-DlLiiVT2NJ9GPO3Yk6&s")'}}>
                    <div className="text-cast-small" >
                   <h3>James McAvoy</h3>
                   <h5>As Bill Denbrough</h5>
                        <p><strong>Description</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus cum, accusantium exercitationem, inventore tempore accusamus, eaque fugiat ut libero tenetur voluptatibus. Nisi dolor magni alias, facere itaque maiores pariatur cumque harum, nam distinctio sequi officia deleniti? Omnis, reiciendis aliquam. Natus ullam harum nostrum quaerat. Atque recusandae saepe, eligendi pariatur explicabo laudantium ullam qui totam tempora hic vel animi ex nesciunt quam, minus cumque dolores distinctio inventore laborum, ipsum nobis aliquid. Veritatis tenetur cupiditate consectetur corrupti incidunt, sint praesentium nihil dolores quas quaerat quo impedit cumque id magni labore adipisci voluptate magnam sunt aliquam. Amet quae ut officiis tempore similique.</p>
                        </p>
                    </div>
                    </div>
                    <div className="col-12 bg-cast-small" style={{backgroundImage: 'url("https://www.cinepremiere.com.mx/wp-content/uploads/2019/07/Jeesica-Chastain.jpg")'}}>
                    <div className="text-cast-small" >
                    <h3>Jessica Chastain</h3>
                    <h5>As Beverly Marsh</h5>
                        <p><strong>Description</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus cum, accusantium exercitationem, inventore tempore accusamus, eaque fugiat ut libero tenetur voluptatibus. Nisi dolor magni alias, facere itaque maiores pariatur cumque harum, nam distinctio sequi officia deleniti? Omnis, reiciendis aliquam. Natus ullam harum nostrum quaerat. Atque recusandae saepe, eligendi pariatur explicabo laudantium ullam qui totam tempora hic vel animi ex nesciunt quam, minus cumque dolores distinctio inventore laborum, ipsum nobis aliquid. Veritatis tenetur cupiditate consectetur corrupti incidunt, sint praesentium nihil dolores quas quaerat quo impedit cumque id magni labore adipisci voluptate magnam sunt aliquam. Amet quae ut officiis tempore similique.</p>
                        </p>
                    </div>
                    </div>
                    <div className="col-12 bg-cast-small" style={{backgroundImage: 'url("https://ewedit.files.wordpress.com/2019/09/rev-1-it2-06927r_high_res_jpeg.jpg")'}}>
                    <div className="text-cast-small" >
                    <h3>Jay Ryan</h3>
                    <h5>As Ben Hanscom</h5>
                        <p><strong>Description</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus cum, accusantium exercitationem, inventore tempore accusamus, eaque fugiat ut libero tenetur voluptatibus. Nisi dolor magni alias, facere itaque maiores pariatur cumque harum, nam distinctio sequi officia deleniti? Omnis, reiciendis aliquam. Natus ullam harum nostrum quaerat. Atque recusandae saepe, eligendi pariatur explicabo laudantium ullam qui totam tempora hic vel animi ex nesciunt quam, minus cumque dolores distinctio inventore laborum, ipsum nobis aliquid. Veritatis tenetur cupiditate consectetur corrupti incidunt, sint praesentium nihil dolores quas quaerat quo impedit cumque id magni labore adipisci voluptate magnam sunt aliquam. Amet quae ut officiis tempore similique.</p>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                 </div>
            </>
        )
    }
}