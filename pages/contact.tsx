import * as React from 'react'
import Layout from '../component/layout'
import Info from '../component/contact/info';
import Form from '../component/contact/form';
import { Props, contact } from '../data/contact'
import { NextFunctionComponent } from 'next';
import Contact_detail from '../component/contact/detail';
const ContactPage: NextFunctionComponent<Props> = (props) => {
  return (
    <Layout >
<div>
<Info></Info>
		
		<div id="colorlib-contact">
			<div className="container">
				<div className="row">
				{Contact_detail(props!)}
					<Form></Form>
				</div>
			</div>
		</div>
		{/* <div id="map" className="colorlib-map"></div> */}
        </div>
         </Layout>
         )
			 }
			 ContactPage.getInitialProps = async () => {
				//TODO: We can even fetch data from here.
				return contact;
			
			}
       
       export default ContactPage;