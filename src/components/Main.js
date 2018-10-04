import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'


// <span className="image main"><img id = "pic1" src={pic01} alt="" /></span>
class Main extends React.Component {

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Locked Out?</h2>
          
          <ul className = "fa-ul">
            <li><i className="fa-li fa fa-angle-double-right"></i><h4>8:00am to 5:00pm Weekdays?</h4><p> <i className="fa fa-map-marker"></i>&nbsp;&nbsp; <a href="https://www.google.com/maps/place/Clothier+Hall,+New+Brunswick,+NJ+08901/@40.5033252,-74.4490208,19z/data=!3m1!4b1!4m5!3m4!1s0x89c3c7ab3386b1b7:0x4222e45824a2dedf!8m2!3d40.5033242!4d-74.4484736?hl=en" target="_blank">Go to Clothier Hall</a></p></li>
            <li><i className="fa-li fa fa-angle-double-right"></i><h4>5:00pm to 8:00pm Weekdays?</h4><p><i className="fa fa-phone"></i>&nbsp;&nbsp;Call the RA on Campus Duty:&nbsp;&nbsp;<a href="tel:+17327356242">+17327356242</a></p></li>
            <li><i className="fa-li fa fa-angle-double-right"></i><h4>Any other time?</h4><p><i className="fa fa-phone"></i>&nbsp;&nbsp;Call the RA on Duty: &nbsp; <a href="tel:+17325248974">+17325248974</a></p></li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Need help?</h2>
          <div>
            <button className = "collapsible">In a crisis?</button>
            <div className ="innerContent">
              <div><h1></h1></div>
              <ul className = "fa-ul">
                <li><i className="fa-li fa fa-angle-double-right"></i><p>RUPD:</p></li>
                  <p><i className="fa fa-phone"></i> &nbsp;&nbsp;Emergency: &nbsp;&nbsp;<a href="tel:+1911">911</a></p>
                  <p><i className="fa fa-commenting-o"></i> &nbsp;&nbsp;Can't Call?:&nbsp;&nbsp; <a href="sms://+69050">Text "RUNB" to 69050 </a></p>
                  <p><i className="fa fa-phone"></i> &nbsp;&nbsp;Non-emergency:&nbsp;&nbsp; <a href="tel:+17329327211">+17329327211</a></p>
              </ul>
            </div>
          </div>
          <div><h1></h1></div>
          <div>
            <button className = "collapsible">Walking home at night?</button>
            <div className ="innerContent">
              <div><h1></h1></div>
              <ul className = "fa-ul">
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Knight Mover | M-Th 3:00 am - 6:00am |&nbsp;&nbsp;<i className="fa fa-phone"></i> &nbsp;<a href="tel:+17329327433">+17329327433</a></p></li>
                <li><i className="fa-li fa fa-angle-double-right"></i><p>RUPD Courtesy Escort | Anytime |&nbsp;&nbsp;<i className="fa fa-phone"></i> &nbsp;<a href="tel:+17329327211">+17329327211</a></p></li>
              </ul>
            </div>
          </div>
          <div><h1></h1></div>
          <div>
            <button className = "collapsible">Wellness services</button>
            <div className ="innerContent">
              <div><h1></h1></div>
              <ul className = "fa-ul">
                <li><i className="fa-li fa fa-angle-double-right"></i><p>CAPS | Counseling & Therapy | &nbsp;&nbsp;<i className="fa fa-phone"></i> &nbsp;<a href="tel:+18489327884">+18489327884</a></p></li>
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Health Centers | Locations & Hours | <i className = "fa fa-laptop"></i>&nbsp;&nbsp;<a target = "_blank" href="http://health.rutgers.edu/about-us/hours-locations/">https://tinyurl.com/healthoursloc</a></p></li>
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Health Centers | Make an Appointment | <i className = "fa fa-laptop"></i>&nbsp;&nbsp;<a target = "_blank" href="http://health.rutgers.edu/about-us/hours-locations/">https://tinyurl.com/rhsappt</a></p></li>
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Suicide Prevention Lifeline: &nbsp;&nbsp; | <i className = "fa fa-phone"></i>&nbsp;&nbsp;<a target = "_blank" href="tel:+18002738255">18002738255</a></p></li>
                <li><i className="fa-li fa fa-angle-double-right"></i><p>NJ Hope Line: &nbsp;&nbsp; <i className = "fa fa-phone"></i>&nbsp;&nbsp;<a target = "_blank" href="tel:+18556546735">+18556546735</a></p></li>
                <li><i className="fa-li fa fa-angle-double-right"></i><p>National Crisis Text Line: &nbsp;&nbsp; <i className = "fa fa-commenting-o"></i>&nbsp;&nbsp;<a href="sms:741741">Text KNIGHTS to 741741 (people of color text STEVE)</a></p></li>
                
              </ul>
            </div>
          </div>
          <div><h1></h1></div>
          <div>
            <button className = "collapsible">Maintenance services</button>
            <div className ="innerContent">
              <div><h1></h1></div>
              <ul className = "fa-ul">
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Work Order System | <i className="fa fa-laptop"></i>&nbsp;&nbsp;<a href="https://tinyurl.com/rutgersfixit" target="_blank">https://tinyurl.com/rutgersfixit</a></p></li>
              </ul>
            </div>
          </div>
          <div><h1></h1></div>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Hungry?</h2>
          <p> Click below for options! </p>
          <div>
            <button className = "collapsible">Delivery</button>
            <div className ="innerContent">
            <div><h1></h1></div>
              <ul className = "fa-ul">
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Hansel & Griddle | American | min: $10 :
                  &nbsp;&nbsp;<a href="https://hanselngriddle.foodtecsolutions.com/menu?" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a href="tel:+17328467090 " ><i className="fa fa-phone"></i></a></p></li>
                
                <li><i className="fa-li fa fa-angle-double-right"></i><p>La Familia | Pizza | min: $10 :
                  &nbsp;&nbsp;<a href="https://lafamilianewbrunswick.com/35923" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a href="tel:+17329379500 " ><i className="fa fa-phone"></i></a></p></li>
               
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Jimmy Johns | Subs | min: n/a :
                  &nbsp;&nbsp;<a href="http://online.jimmyjohns.com/" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a href="tel:+17326265566 " ><i className="fa fa-phone"></i></a></p></li>
                
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Wings Over | Wings & Fried Foods | min: $10 :
                  &nbsp;&nbsp;<a href="https://eatstreet.com/new-brunswick-nj/restaurants/wings-over-rutgers" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a href="tel:+17325431111 " ><i className="fa fa-phone"></i></a></p></li>
                
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Cookie Rush | Cookies | min: $15 :
                  &nbsp;&nbsp;<a href="https://eatstreet.com/new-brunswick-nj/restaurants/cookie-rush-new-brunswick?order-source=CAS_WWW" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a href="tel:+173225377306 " ><i className="fa fa-phone"></i></a></p></li>
              </ul>
            </div>
          </div>
          <div><h1></h1></div>
          <div>
            <button className = "collapsible">Dine-in</button>
            <div className ="innerContent">
            <div><h1></h1></div>
              <ul className = "fa-ul">
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Tacoria | Mexican | $ :
                  &nbsp;&nbsp;<a href="http://tacoria.com/tacoria-menu-2017.pdf" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a target = "_blank" href="https://www.google.com/maps/dir//tacoria,+Easton+Avenue,+New+Brunswick,+NJ/@40.4977458,-74.4839676,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x89c3c65684d83d1d:0x602639d35d0cd114!2m2!1d-74.4489481!2d40.4976858!3e3" ><i className="fa fa-map-marker"></i></a></p></li>
                  
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Fritz's | American | $ :
                  &nbsp;&nbsp;<a href="https://lafamilianewbrunswick.com/35923" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a target = "_blank" href="https://www.google.com/maps/dir//Fritz's,+115+Easton+Ave,+New+Brunswick,+NJ+08901/@40.4992636,-74.4541375,17z/data=!4m16!1m6!3m5!1s0x89c3c655f9f16081:0x259da1135ddf6be6!2sFritz's!8m2!3d40.4992636!4d-74.4519488!4m8!1m0!1m5!1m1!1s0x89c3c655f9f16081:0x259da1135ddf6be6!2m2!1d-74.4519488!2d40.4992636!3e3" ><i className="fa fa-map-marker"></i></a></p></li>
                
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Efes | Mediterranean | $$ :
                  &nbsp;&nbsp;<a href="https://efesgrill.com/new-brunswick/" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a target = "_blank" href="https://www.google.com/maps/dir//Efes+Mediterranean+Grill,+Easton+Avenue,+New+Brunswick,+NJ/@40.4974505,-74.4830656,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x89c3c656b0f21205:0x5f1a067ad4ce069a!2m2!1d-74.4480461!2d40.4973905!3e3" ><i className="fa fa-map-marker"></i></a></p></li>
                
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Thai Noodle | Thai | $ :
                  &nbsp;&nbsp;<a href="https://www.allmenus.com/nj/new-brunswick/23961-thai-noodle/menu/" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a target = "_blank" href="https://www.google.com/maps/dir//Thai+Noodle,+Easton+Avenue,+New+Brunswick,+NJ/@40.5000108,-74.4896222,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x89c3c6ff3d13861b:0x1ae9b973b2dc595e!2m2!1d-74.4546027!2d40.4999508!3e3" ><i className="fa fa-map-marker"></i></a></p></li>
                
                <li><i className="fa-li fa fa-angle-double-right"></i><p>Thomas Sweets' | Ice Cream & Sweets | $ :
                  &nbsp;&nbsp;<a href="https://thomassweetnb.com/" target="_blank"><i className="fa fa-laptop"></i></a>
                  &nbsp;&nbsp; &nbsp;&nbsp;<a target = "_blank" href="https://www.google.com/maps/dir//Thomas+Sweet+Ice+Cream,+Easton+Avenue,+New+Brunswick,+NJ/@40.4982202,-74.4842326,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x89c3c65681769f3f:0xe53a7ac74307c46e!2m2!1d-74.4492131!2d40.4981602!3e3" ><i className="fa fa-map-marker"></i></a></p></li>
              </ul>
            </div>
          </div>
          <div><h1></h1></div>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Announcements</h2>
           <ul className = "fa-ul">
            <li><i className="fa-li fa fa-angle-double-right"></i><h4>OPEN-DOOR POLICY PLSSSSS</h4><p>The floor high-key feels like a ghost town <i className="fa fa-smile-o fa-flip-vertical"></i></p></li>
            <li><i className="fa-li fa fa-angle-double-right"></i><h4>DANIEL'S (S503) BIRTHDAY WEDNESDAY, OCT. 10 </h4></li>
          </ul>
          <p><em>See a bug or wanna recommend a fix? Click below to report it! </em></p>
          <a href="mailto:sridhar.sriram@rutgers.edu?subject=[RUTGERSGUIDE BUG]"><i className="fa fa-envelope"></i></a>
          {close}
        </article>

      </div>
    )
  }
}


Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main