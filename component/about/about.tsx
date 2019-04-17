import * as React from 'react'

import { Props } from '../../data/about'
import { NextFunctionComponent } from 'next';

const About: NextFunctionComponent<Props> = (props) => {
  return (
    <div id="colorlib-about" className="colorlib-light-grey">
    <div className="container">
        <div className="row row-pb-md">
            <div className="col-md-8 col-md-offset-2 row-pb-md animate-box">
                <div className="video colorlib-video" style={{backgroundImage : 'url(/static/images/img_bg_1.jpg)'}} >
                    <a href={props.video_link} className="popup-vimeo"><i className="icon-play3"></i></a>
                    <div className="overlay"></div>
                </div>
            </div>
            <div className="col-md-10 col-md-offset-1 text-center animate-box">
                <div className="about-wrap">
                    <div className="heading-2">
                        <h2>{props.title}</h2>
                    </div>
                    <p>{props.info1}</p>
                    <p>{props.info2}</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 animate-box">
                <p>{props.info3}</p>
            </div>
            <div className="col-md-4 animate-box">
                <p>{props.info4}</p>
            </div>
            <div className="col-md-4 animate-box">
                <p>{props.info5}</p>
            </div>
        </div>
    </div>
</div>
  )
}
export default About