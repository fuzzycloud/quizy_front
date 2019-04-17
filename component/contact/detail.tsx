import * as React from 'react'
import { Props} from '../../data/contact'
import { NextFunctionComponent } from 'next';
const Contact_detail: NextFunctionComponent<Props> = (props) => {
  return (
    

    <div className="col-md-10 col-md-offset-1 animate-box">
    <h2>Contact Information</h2>
    <div className="row">
        <div className="col-md-12">
            <div className="contact-info-wrap-flex">
                <div className="con-info">
                    <p><span><i className="icon-location-2"></i></span> {props.address}</p>
                </div>
                <div className="con-info">
                    <p><span><i className="icon-phone3"></i></span> <a href="tel://1234567920">{props.contact_no}</a></p>
                </div>
                <div className="con-info">
                    <p><span><i className="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">{props.email}</a></p>
                </div>
                <div className="con-info">
                    <p><span><i className="icon-globe"></i></span> <a href="#">{props.website}</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Contact_detail