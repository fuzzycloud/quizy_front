import * as React from 'react'

const Form = () => (
    <div className="col-md-10 col-md-offset-1 animate-box">
						<h2>Message Us</h2>
						<form action="#">
							<div className="row form-group">
								<div className="col-md-6">
									{/* <!-- <label for="fname">First Name</label> --> */}
									<input type="text" id="fname" className="form-control" placeholder="Your firstname"/>
								</div>
								<div className="col-md-6">
									{/* <!-- <label for="lname">Last Name</label> --> */}
									<input type="text" id="lname" className="form-control" placeholder="Your lastname"/>
								</div>
							</div>

							<div className="row form-group">
								<div className="col-md-12">
									{/* <!-- <label for="email">Email</label> --> */}
									<input type="text" id="email" className="form-control" placeholder="Your email address"/>
								</div>
							</div>

							<div className="row form-group">
								<div className="col-md-12">
									{/* <!-- <label for="subject">Subject</label> --> */}
									<input type="text" id="subject" className="form-control" placeholder="Your subject of this message"/>
								</div>
							</div>

							<div className="row form-group">
								<div className="col-md-12">
									{/* <!-- <label for="message">Message</label> --> */}
									<textarea name="message" id="message"  className="form-control" placeholder="Say something about us"></textarea>
								</div>
							</div>
							<div className="form-group">
								<input type="submit" value="Send Message" className="btn btn-primary"/>
							</div>
						</form>		
					</div>

)
export default Form