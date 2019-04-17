import * as React from 'react'

import { Props, Question } from '../../data/index'
import { NextFunctionComponent } from 'next';

const QuestionPage: NextFunctionComponent<Question[]> = (w) => {
  return (
    <div className="fancy-collapse-panel">
    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    {w.map((value, index) => {
        return (
    //  <div className="panel panel-default">
    //      <div className="panel-heading" role="tab" id="headingOne">
    //          <h4 className="panel-title">
    //              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Why choose us?
    //              </a>
    //          </h4>
    //      </div>
    //      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
    //          <div className="panel-body">
    //              <div className="row">
    //                           <div className="col-md-6">
    //                               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
    //                           </div>
    //                           <div className="col-md-6">
    //                               <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    //                           </div>
    //                       </div>
    //          </div>
    //      </div>
    //  </div>
    //  <div className="panel panel-default">
    //      <div className="panel-heading" role="tab" id="headingTwo">
    //          <h4 className="panel-title">
    //              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What we do?
    //              </a>
    //          </h4>
    //      </div>
    //      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
    //          <div className="panel-body">
    //              <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    //                         <ul>
    //                             <li>Separated they live in Bookmarksgrove right</li>
    //                             <li>Separated they live in Bookmarksgrove right</li>
    //                         </ul>
    //          </div>
    //      </div>
    //  </div>
     <div className="panel panel-default">
         <div className="panel-heading" role="tab" id={value.q_id}>
             <h4 className="panel-title">
                 <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href={value.link} aria-expanded="false" aria-controls="collapseThree">{value.que}
                 </a>
             </h4>
         </div>
         <div id={value.a_id} className="panel-collapse collapse" role="tabpanel" aria-labelledby={value.q_id}>
             <div className="panel-body">
                 <p>{value.data}</p>	
             </div>
         </div>
     </div>
  
    )
})}
   </div>
    
    
    </div>
	 
)
}
export default QuestionPage