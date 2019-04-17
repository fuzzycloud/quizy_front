import * as React from 'react'
import Head from 'next/head'
type Page = "Home "
type Props = {
    title?: string,
    page?: Page
  }
  
  const Layout: React.FunctionComponent<Props> = ({ children, title = 'Quizy', page = "Home"  }) => (
    <div>
       <Head>
       <meta charSet="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<title>{title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="" />

  {/* <!-- Facebook and Twitter integration --> */}
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700" rel="stylesheet"/>
	
	{/* <!-- Animate.css --> */}
	<link rel="stylesheet" href="/static/css/animate.css"/>
	{/* <!-- Icomoon Icon Fonts--> */}
	<link rel="stylesheet" href="/static/css/icomoon.css"/>
	{/* <!-- Bootstrap  --> */}
	<link rel="stylesheet" href="/static/css/bootstrap.css"/>

	{/* <!-- Magnific Popup --> */}
	<link rel="stylesheet" href="/static/css/magnific-popup.css"/>

	{/* <!-- Flexslider  --> */}
	<link rel="stylesheet" href="/static/css/flexslider.css"/>

	{/* <!-- Owl Carousel --> */}
	<link rel="stylesheet" href="/static/css/owl.carousel.min.css"/>
	<link rel="stylesheet" href="/static/css/owl.theme.default.min.css"/>
	
	{/* <!-- Flaticons  --> */}
	<link rel="stylesheet" href="/static/fonts/flaticon/font/flaticon.css"/>

	{/* <!-- Theme style  --> */}
	<link rel="stylesheet" href="/static/css/style.css"/>

	{/* <!-- Modernizr JS --> */}
	<script src="/static/js/modernizr-2.6.2.min.js"></script>
	{/* <!-- FOR IE9 below --> */}
	{/* <!--[if lt IE 9]> */}
	<script src="/static/js/respond.min.js"></script>
	{/* <![endif]--> */}

       </Head>

       <div className="colorlib-loader"></div>

	{/* <div id="page"> */}
		<nav className="colorlib-nav" role="navigation">
			<div className="upper-menu">
				<div className="container">
					<div className="row">
						<div className="col-xs-4">
							<p>Welcome to Quizy</p>
						</div>
						<div className="col-xs-6 col-md-push-2 text-right">
							<p>
								<ul className="colorlib-social-icons">
									<li><a href="#"><i className="icon-twitter"></i></a></li>
									<li><a href="#"><i className="icon-facebook"></i></a></li>
									<li><a href="#"><i className="icon-linkedin"></i></a></li>
									<li><a href="#"><i className="icon-dribbble"></i></a></li>
								</ul>
							</p>
							<p className="btn-apply"><a href="#">Apply Now</a></p>
						</div>
					</div>
				</div>
			</div>
			<div className="top-menu">
				<div className="container">
					<div className="row">
						<div className="col-md-2 ">
							<div id="colorlib-logo" ><a href="index">
							<img src="/static/images/logo.png" alt="logo" className="logo"/>Quizy</a></div>
							{/* <div id="colorlib-logo"><a href="index"> */}
							{/* <img src="/static/images/logo.png" alt="logo" className="logo"/> */}
							{/* </a></div> */}
						</div>
						<div className="col-md-10 text-right menu-1">
							<ul>
								<li className="active"><a href="index">Home</a></li>
                                <li><a href="about">About</a></li>
                                <li><a href="contact">Contact</a></li>
                                {/* other menu */}
                                
                                {/* <li className="has-dropdown">
									<a href="courses">Courses</a>
									<ul className="dropdown">
										<li><a href="courses-single">Courses Single</a></li>
										<li><a href="#">Mobile Apps</a></li>
										<li><a href="#">Website</a></li>
										<li><a href="#">Web Design</a></li>
										<li><a href="#">WordPress</a></li>
									</ul>
								</li>
								
								<li><a href="event">Events</a></li>
								<li><a href="news">News</a></li> */}
								
								<li className="btn-cta"><a href="#"><span>Login</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
        {children}
        <div>
        <div id="colorlib-subscribe" className="subs-img" style={{backgroundImage: 'url(/static/images/img_bg_2.jpg)'}} data-stellar-background-ratio="0.5">
			<div className="overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
						<h2>Subscribe Newsletter</h2>
						<p>Subscribe our newsletter and get latest update</p>
					</div>
				</div>
				<div className="row animate-box">
					<div className="col-md-6 col-md-offset-3">
						<div className="row">
							<div className="col-md-12">
							<form className="form-inline qbstp-header-subscribe">
								<div className="col-three-forth">
									<div className="form-group">
										<input type="text" className="form-control" id="email" placeholder="Enter your email"/>
									</div>
								</div>
								<div className="col-one-third">
									<div className="form-group">
										<button type="submit" className="btn btn-primary">Subscribe Now</button>
									</div>
								</div>
							</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer id="colorlib-footer">
			<div className="container">
				<div className="row row-pb-md">
					<div className="col-md-3 colorlib-widget">
						<h4>About Quizy</h4>
						<p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
						<p>
							<ul className="colorlib-social-icons">
								<li><a href="#"><i className="icon-twitter"></i></a></li>
								<li><a href="#"><i className="icon-facebook"></i></a></li>
								<li><a href="#"><i className="icon-linkedin"></i></a></li>
								<li><a href="#"><i className="icon-dribbble"></i></a></li>
							</ul>
						</p>
					</div>
					<div className="col-md-3 colorlib-widget">
						<h4>Quick Links</h4>
						<p>
							<ul className="colorlib-footer-links">
								<li><a href="about"><i className="icon-check"></i> About Us</a></li>
								{/* <li><a href="#"><i className="icon-check"></i> Testimonials</a></li>
								<li><a href="#"><i className="icon-check"></i> Courses</a></li>
								<li><a href="#"><i className="icon-check"></i> Event</a></li>
								<li><a href="#"><i className="icon-check"></i> News</a></li> */}
								<li><a href="contact"><i className="icon-check"></i> Contact</a></li>
							</ul>
						</p>
					</div>

					<div className="col-md-3 colorlib-widget">
						<h4>Recent Post</h4>
						<div className="f-blog">
							<a href="blog.html" className="blog-img" style={{backgroundImage: 'url(/static/images/blog-1.jpg)'}}>
							</a>
							<div className="desc">
								<h2><a href="blog.html">Creating Mobile Apps</a></h2>
								<p className="admin"><span>18 April 2018</span></p>
							</div>
						</div>
						<div className="f-blog">
							<a href="blog.html" className="blog-img" style={{backgroundImage: 'url(/static/images/blog-2.jpg)'}}>
							</a>
							<div className="desc">
								<h2><a href="blog.html">Creating Mobile Apps</a></h2>
								<p className="admin"><span>18 April 2018</span></p>
							</div>
						</div>
						<div className="f-blog">
							<a href="blog.html" className="blog-img" style= {{backgroundImage: 'url(/static/images/blog-3.jpg)'}}>
							</a>
							<div className="desc">
								<h2><a href="blog.html">Creating Mobile Apps</a></h2>
								<p className="admin"><span>18 April 2018</span></p>
							</div>
						</div>
					</div>

					<div className="col-md-3 colorlib-widget">
						<h4>Contact Info</h4>
						<ul className="colorlib-footer-links">
							<li>291 South 21th Street, <br></br> Suite 721 New York NY 10016</li>
							<li><a href="tel://1234567920"><i className="icon-phone"></i> + 1235 2355 98</a></li>
							<li><a href="mailto:info@yoursite.com"><i className="icon-envelope"></i> info@yoursite.com</a></li>
							<li><a href="http://luxehotel.com"><i className="icon-location4"></i> yourwebsite.com</a></li>
						</ul>
					</div>
				</div>
			</div>
			{/* <div className="copy">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<p>
								<small className="block">&copy; <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</small><br> 
								<small className="block">Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a>, <a href="http://pexels.com/" target="_blank">Pexels</a></small>
							</p>
						</div>
					</div>
				</div>
			</div> */}
		</footer>
	</div>

	<div className="gototop js-top">
		<a href="#" className="js-gotop"><i className="icon-arrow-up2"></i></a>
	</div>
	
	{/* <!-- jQuery --> */}
	<script src="/static/js/jquery.min.js"></script>
	{/* <!-- jQuery Easing --> */}
	<script src="/static/js/jquery.easing.1.3.js"></script>
	{/* <!-- Bootstrap --> */}
	<script src="/static/js/bootstrap.min.js"></script>
	{/* <!-- Waypoints --> */}
	<script src="/static/js/jquery.waypoints.min.js"></script>
	{/* <!-- Stellar Parallax --> */}
	<script src="/static/js/jquery.stellar.min.js"></script>
	{/* <!-- Flexslider --> */}
	<script src="/static/js/jquery.flexslider-min.js"></script>
	{/* <!-- Owl carousel --> */}
	<script src="/static/js/owl.carousel.min.js"></script>
	{/* <!-- Magnific Popup --> */}
	<script src="/static/js/jquery.magnific-popup.min.js"></script>
	<script src="/static/js/magnific-popup-options.js"></script>
	{/* <!-- Counters --> */}
	<script src="/static/js/jquery.countTo.js"></script>
	{/* <!-- Main --> */}
	<script src="/static/js/main.js"></script>



       </div>
       )

export default Layout
