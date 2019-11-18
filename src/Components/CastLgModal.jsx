import React, {Component} from "react"
import "../stylesheet/castroute.css"

export default class CastLgModal extends Component{


    render(){
        return(

            <>
                <div className="cast-modal-container animated fadeInUp">
                    <h3>{this.props.name}</h3>
                    <h5>As {this.props.character}</h5>
                        <p><strong>Description</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus cum, accusantium exercitationem, inventore tempore accusamus, eaque fugiat ut libero tenetur voluptatibus. Nisi dolor magni alias, facere itaque maiores pariatur cumque harum, nam distinctio sequi officia deleniti? Omnis, reiciendis aliquam. Natus ullam harum nostrum quaerat. Atque recusandae saepe, eligendi pariatur explicabo laudantium ullam qui totam tempora hic vel animi ex nesciunt quam, minus cumque dolores distinctio inventore laborum, ipsum nobis aliquid. Veritatis tenetur cupiditate consectetur corrupti incidunt, sint praesentium nihil dolores quas quaerat quo impedit cumque id magni labore adipisci voluptate magnam sunt aliquam. Amet quae ut officiis tempore similique.</p>
                        </p>
                </div>

            </>
        )
    }
}