import * as React from 'react'

const Testimonial = () => (
    <div id="colorlib-testimony" className="testimony-img" style={{backgroundImage : 'url(/static/images/img_bg_2.jpg)'}} data-stellar-background-ratio="0.5">
			<div className="overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
						<h2>What Are The Users Says</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center">
						<div className="row animate-box">
							<div className="owl-carousel1">
								<div className="item">
									<div className="testimony-slide">
										<div className="testimony-wrap">
											<blockquote>
												<span>Sophia Foster</span>
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
											</blockquote>
											<div className="figure-img" style={{backgroundImage : 'url(/static/images/person1.jpg)'}}></div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="testimony-slide">
										<div className="testimony-wrap">
											<blockquote>
												<span>John Collins</span>
												<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
											</blockquote>
											<div className="figure-img" style={{backgroundImage : 'url(/static/images/person2.jpg)'}}></div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="testimony-slide">
										<div className="testimony-wrap">
											<blockquote>
												<span>Adam Ross</span>
												<p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
											</blockquote>
											<div className="figure-img" style={{backgroundImage : 'url(/static/images/person3.jpg)'}}></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


)
export default Testimonial