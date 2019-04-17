import * as React from 'react'
import Layout from '../component/layout'
import Info from '../component/about/info';
import { Props, about } from '../data/about'
import { NextFunctionComponent } from 'next';
import About from '../component/about/about';
import TeamPage from '../component/about/team';
const AboutPage: NextFunctionComponent<Props> = (props) => {
  return (
    <Layout >
        <Info></Info>
		
        
				{About(props!)}
				{TeamPage(props.team!)}

		
              </Layout>
  )
}
AboutPage.getInitialProps = async () => {
	//TODO: We can even fetch data from here.
	return about;
  
  }
export default AboutPage;