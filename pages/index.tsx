import * as React from 'react'
import Layout from '../component/layout'
import Info from '../component/index/info';
import { Props, index } from '../data/index'
import { NextFunctionComponent } from 'next';
import TeamPage from '../component/about/team';
import Courses from '../component/index/courses';
import Data from '../component/index/data';
import OurClasses from '../component/index/classes';
import Testimonial from '../component/index/testimonial';
import UpComingEvent from '../component/index/upcoming';
import RecentNews from '../component/index/news';
import InfoBox from '../component/index/info_box';
import Questions from '../component/index/que';
import QuestionPage from '../component/index/que';
const IndexPage: NextFunctionComponent<Props> = (props) => {
  return (
    <Layout >
    <div>
   <Info></Info>
		
		<div id="colorlib-intro">
			<div className="container">
				<div className="row">
					<Courses></Courses>
					<div className="col-md-8">
						<div className="about-desc animate-box">
							<h2>{props.title}</h2>
							<p>{props.info}.</p>
							{/* <Questions></Questions> */}
							{QuestionPage(props.que!)}
					</div>
				</div>
			</div>
		</div>
		
</div>
		<InfoBox></InfoBox>
		<Data></Data>
		<OurClasses></OurClasses>
		<Testimonial></Testimonial>
		{TeamPage(props.team!)}
		<UpComingEvent></UpComingEvent>


		<RecentNews></RecentNews>

    </div>
      </Layout>
  )
}
IndexPage.getInitialProps = async () => {
	//TODO: We can even fetch data from here.
	return index;

}
export default IndexPage;