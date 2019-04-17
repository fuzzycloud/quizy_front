import * as React from 'react'

import { Props, Team } from '../../data/about'
import { NextFunctionComponent } from 'next';

const TeamPage: NextFunctionComponent<Team[]> = (w) => {
  return (
      <div>
          <div className="colorlib-trainers">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
						<h2>Our Experienced Professor</h2>
						{/* <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p> */}
					</div>
				</div>
				<div className="row">
    {w.map((value, index) => {
        return (
            
					// <div className="col-md-3 col-sm-3 animate-box">
					// 	<div className="trainers-entry">
					// 		<div className="trainer-img" style={{backgroundImage : 'url(/static/images/person1.jpg)'}} ></div>
					// 		<div className="desc">
					// 			<h3>Olivia Young</h3>
					// 			<span>Teacher</span>
					// 		</div>
					// 		<p>Far far away, behind the word mountains, far from the countries Vokalia</p>
					// 		<p className="social"><a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a></p>
					// 	</div>
					// </div>

					// <div className="col-md-3 col-sm-3 animate-box">
					// 	<div className="trainers-entry">
					// 		<div className="trainer-img" style={{backgroundImage : 'url(/static/images/person2.jpg)'}} ></div>
					// 		<div className="desc">
					// 			<h3>Daniel Anderson</h3>
					// 			<span>Professor</span>
					// 		</div>
					// 		<p>Far far away, behind the word mountains, far from the countries Vokalia</p>
					// 		<p className="social"><a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a></p>
					// 	</div>
					// </div>

					// <div className="col-md-3 col-sm-3 animate-box">
					// 	<div className="trainers-entry">
					// 		<div className="trainer-img" style={{backgroundImage : 'url(/static/images/person3.jpg)'}} ></div>
					// 		<div className="desc">
					// 			<h3>David Brook</h3>
					// 			<span>Teacher</span>
					// 		</div>
					// 		<p>Far far away, behind the word mountains, far from the countries Vokalia</p>
					// 		<p className="social"><a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a></p>
					// 	</div>
					// </div>

					<div className="col-md-3 col-sm-3 animate-box">
						<div className="trainers-entry">
							<div className="trainer-img" style={{backgroundImage : 'url(/static/images/person4.jpg)'}} ></div>
							<div className="desc">
								<h3>{value.name}</h3>
								<span>{value.position}</span>
							</div>
							<p>{value.info}</p>
							<p className="social"><a href={value.t_link}>Twitter</a> <a href={value.f_link}>Facebook</a> <a href={value.e_link}>Email</a></p>
						</div>
					</div>
			
            )
        })}
        	</div>
			</div>
		</div>
     </div>
)
}
export default TeamPage