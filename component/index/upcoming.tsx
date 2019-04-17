import * as React from 'react'

const UpComingEvent = () => (
    <div className="colorlib-event">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
						<h2>Upcoming Events</h2>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
					</div>
				</div>
				<div className="event-flex row-pb-sm">
					<div className="half event-img animate-box" style={{backgroundImage : 'url(/static/images/event.jpg)'}}>
					</div>
					<div className="half">
						<div className="row">
							<div className="col-md-12 animate-box">
								<div className="event-entry">
									<div className="desc">
										<p className="meta"><span className="day">19</span><span className="month">Apr</span></p>
										<p className="organizer"><span>Organized by:</span> <span>Noah Henderson</span></p>
										<h2><a href="event.html">We Held Free Training for Basic Programming</a></h2>
									</div>
									<div className="location">
										<span className="icon"><i className="icon-map"></i></span>
										<p>291 South 21th Street, Suite 721 New York NY 10016</p>
									</div>
								</div>
							</div>
							<div className="col-md-12 animate-box">
								<div className="event-entry">
									<div className="desc">
										<p className="meta"><span className="day">19</span><span className="month">Apr</span></p>
										<p className="organizer"><span>Organized by:</span> <span>Noah Henderson</span></p>
										<h2><a href="event.html">You're Invited 1st Anniversary of Quizy</a></h2>
									</div>
									<div className="location">
										<span className="icon"><i className="icon-map"></i></span>
										<p>291 South 21th Street, Suite 721 New York NY 10016</p>
									</div>
								</div>
							</div>
							<div className="col-md-12 animate-box">
								<div className="event-entry">
									<div className="desc">
										<p className="meta"><span className="day">19</span><span className="month">Apr</span></p>
										<p className="organizer"><span>Organized by:</span> <span>Noah Henderson</span></p>
										<h2><a href="event.html">Practice Workshop 2018</a></h2>
									</div>
									<div className="location">
										<span className="icon"><i className="icon-map"></i></span>
										<p>291 South 21th Street, Suite 721 New York NY 10016</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

)
export default UpComingEvent