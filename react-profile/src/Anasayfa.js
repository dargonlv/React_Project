import React,{useEffect} from 'react'
import {Helmet} from "react-helmet"
import { appendScript } from './Jsappend';




function Anasayfa() {
    useEffect(() => {
        appendScript("assets/js/bootstrap.min.js");
        appendScript("assets/js/page-transition.js");
        appendScript("assets/js/imagesloaded.pkgd.min.js");
        appendScript("assets/js/validator.js");
        appendScript("assets/js/jquery.shuffle.min.js");
        appendScript("assets/js/masonry.pkgd.min.js");
        appendScript("assets/js/owl.carousel.min.js");
        appendScript("assets/js/jquery.magnific-popup.min.js");
        appendScript("assets/js/jquery.hoverdir.js");
        appendScript("assets/js/main.js");
      },[]);
    
  return (
    <div>
      <>
      
  {/* Loading animation */}
  <div className="preloader">
    <div className="preloader-animation">
      <div className="dot1" />
      <div className="dot2" />
    </div>
  </div>
  {/* /Loading animation */}
  <div id="page" className="page">
    {/* Header */}
    <header id="site_header" className="header mobile-menu-hide">
      <div className="my-photo">
        <img src="ASSETS/images/my_photo.png" alt="image" />
        <div className="mask" />
      </div>
      <div className="site-title-block">
        <h1 className="site-title">Alex Smith</h1>
        <p className="site-description">Web Designer</p>
      </div>
      {/* Navigation & Social buttons */}
      <div className="site-nav">
        {/* Main menu */}
        <ul id="nav" className="site-main-menu">
          {/* About Me Subpage link */}
          <li>
            <a
              className="pt-trigger"
              href="#home"
              data-animation={58}
              data-goto={1}
            >
              Home
            </a>
            {/* href value = data-id without # of .pt-page. Data-goto is the number of section */}
          </li>
          {/* /About Me Subpage link */}
          {/* About Me Subpage link */}
          <li>
            <a
              className="pt-trigger"
              href="#about_me"
              data-animation={59}
              data-goto={2}
            >
              About me
            </a>
          </li>
          {/* /About Me Subpage link */}
          <li>
            <a
              className="pt-trigger"
              href="#resume"
              data-animation={60}
              data-goto={3}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="pt-trigger"
              href="#portfolio"
              data-animation={61}
              data-goto={4}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="pt-trigger"
              href="#blog"
              data-animation={58}
              data-goto={5}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="pt-trigger"
              href="#contact"
              data-animation={59}
              data-goto={6}
            >
              Contact
            </a>
          </li>
        </ul>
        {/* /Main menu */}
        {/* Social buttons */}
        <ul className="social-links">
          <li>
            <a className="tip social-button" href="#" title="Twitter">
              <i className="fa fa-twitter" />
            </a>
          </li>{" "}
          {/* Full list of social icons: http://fontawesome.io/icons/#brand */}
          <li>
            <a className="tip social-button" href="#" title="Facebook">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Google Plus">
              <i className="fa fa-google-plus" />
            </a>
          </li>
          {/*<li><a class="tip social-button" href="#" title="Youtube"><i class="fa fa-youtube"></i></a></li>*/}
          {/*<li><a class="tip social-button" href="#" title="last.fm"><i class="fa fa-lastfm"></i></a></li>*/}
          {/*<li><a class="tip social-button" href="#" title="Dribbble"><i class="fa fa-dribbble"></i></a></li>*/}
        </ul>
        {/* /Social buttons */}
      </div>
      {/* Navigation & Social buttons */}
    </header>
    {/* /Header */}
    {/* Mobile Header */}
    <div className="mobile-header mobile-visible">
      <div className="mobile-logo-container">
        <div className="mobile-site-title">Alex Smith</div>
      </div>
      <a className="menu-toggle mobile-visible">
        <i className="fa fa-bars" />
      </a>
    </div>
    {/* /Mobile Header */}
    {/* Main Content */}
    <div id="main" className="site-main">
      {/* Page changer wrapper */}
      <div className="pt-wrapper">
        {/* Subpages */}
        <div className="subpages">
          {/* Home Subpage */}
          <section
            className="pt-page pt-page-1 section-with-bg section-paddings-0"
            style={{ backgroundImage: "url(images/home_page_bg_1.jpg)" }}
            data-id="home"
          >
            <div className="home-page-block-bg">
              <div className="mask" />
            </div>
            <div className="home-page-block">
              <div className="v-align">
                <h2>Alex Smith</h2>
                <div id="rotate" className="text-rotate">
                  <div>
                    <p className="home-page-description">Web Designer</p>
                  </div>
                  <div>
                    <p className="home-page-description">Frontend-developer</p>
                  </div>
                </div>
                <div className="block end" style={{ textAlign: "center" }}>
                  <ul className="info-list">
                    <li>
                      <span className="title">Age</span>
                      <span className="value">29</span>
                    </li>
                    <li>
                      <span className="title">Address</span>
                      <span className="value">88 Some Street, Some Town</span>
                    </li>
                    <li>
                      <span className="title">e-mail</span>
                      <span className="value">
                        <a href="mailto:email@example.com">email@example.com</a>
                      </span>
                    </li>
                    <li>
                      <span className="title">Phone</span>
                      <span className="value">+0123 123 456 789</span>
                    </li>
                    <li>
                      <span className="title">Freelance</span>
                      <span className="value available">Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* End of Home Subpage */}
          {/* About Me Subpage */}
          <section className="pt-page pt-page-2" data-id="about_me">
            <div className="section-title-block">
              <h2 className="section-title">About Me</h2>
              <h5 className="section-description">
                Artist, Thinker, Creative Doer
              </h5>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 subpage-block">
                <div className="general-info">
                  <h3>I am Web Developer/Designer @ Company.com</h3>
                  <p>
                    Proin laoreet elementum ligula, ac tincidunt lorem accumsan
                    nec. Fusce eget urna ante. Donec massa velit, varius a
                    accumsan ac, tempor iaculis massa. Sed placerat justo sed
                    libero varius vulputate. Ut a mi tempus massa malesuada
                    fermentum.
                  </p>
                  <p>
                    Sed eleifend sed nibh nec fringilla. Donec eu cursus sem,
                    vitae tristique ante. Cras pretium rutrum egestas. Integer
                    ultrices libero sed justo vehicula, eget tincidunt tortor
                    tempus. Sed tellus nibh, lobortis ut blandit sed, convallis
                    a mauris.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 subpage-block">
                <div className="block-title">
                  <h3>Testimonials</h3>
                </div>
                <div className="testimonials owl-carousel">
                  {/* Testimonial 2 */}
                  <div className="testimonial-item">
                    {/* Testimonial Content */}
                    <div className="testimonial-content">
                      <div className="testimonial-text">
                        <p>
                          "Proin auctor pulvinar tellus, et venenatis ligula
                          pharetra eu. Duis dictum nisi sed pellentesque
                          euismod."
                        </p>
                      </div>
                    </div>
                    {/* /Testimonial Content */}
                    {/* Testimonial Author */}
                    <div className="testimonial-credits">
                      {/* Picture */}
                      <div className="testimonial-picture">
                        <img
                          src="ASSETS/images/testimonials/testimonila_photo_2.png"
                          alt=""
                        />
                      </div>
                      {/* /Picture */}
                      {/* Testimonial author information */}
                      <div className="testimonial-author-info">
                        <p className="testimonial-author">Bryan Morris</p>
                        <p className="testimonial-firm">Sun Foods</p>
                      </div>
                    </div>
                    {/* /Testimonial author information */}
                  </div>
                  {/* End of Testimonial 2 */}
                  {/* Testimonial 2 */}
                  <div className="testimonial-item" style={{ width: "100%" }}>
                    {/* Testimonial Content */}
                    <div className="testimonial-content">
                      <div className="testimonial-text">
                        <p>
                          "Vivamus porta dapibus tristique. Suspendisse et arcu
                          eget nisi convallis eleifend nec ac lorem."
                        </p>
                      </div>
                    </div>
                    {/* /Testimonial Content */}
                    {/* Testimonial Author */}
                    <div className="testimonial-credits">
                      {/* Picture */}
                      <div className="testimonial-picture">
                        <img
                          src="ASSETS/images/testimonials/testimonial_photo_1.png"
                          alt=""
                        />
                      </div>
                      {/* /Picture */}
                      {/* Testimonial author information */}
                      <div className="testimonial-author-info">
                        <p className="testimonial-author">John Doe</p>
                        <p className="testimonial-firm">Apple Inc.</p>
                      </div>
                    </div>
                    {/* /Testimonial author information */}
                  </div>
                  {/* End of Testimonial 2 */}
                </div>
              </div>
            </div>
            {/* Services block */}
            <div className="block-title">
              <h3>Services</h3>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <img
                      src="ASSETS/images/service/web_design.png"
                      alt="Responsive Design"
                    />
                    <h4>Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <img src="ASSETS/images/service/copywrite.png" alt="Copywriter" />
                    <h4>Copywriter</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <img src="ASSETS/images/service/ecommerce.png" alt="E-Commerce" />
                    <h4>E-Commerce</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <img src="ASSETS/images/service/management.png" alt="Management" />
                    <h4>Management</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Services block */}
            {/* Clients block */}
            <div className="block-title">
              <h3>Clients</h3>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2 subpage-block">
                <div className="client_block">
                  <a href="#" target="_blank">
                    <img src="ASSETS/images/clients/client_1.png" alt="image" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-md-2 subpage-block">
                <div className="client_block">
                  <a href="#" target="_blank">
                    <img src="ASSETS/images/clients/client_2.png" alt="image" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-md-2 subpage-block">
                <div className="client_block">
                  <a href="#" target="_blank">
                    <img src="ASSETS/images/clients/client_3.png" alt="image" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-md-2 subpage-block">
                <div className="client_block">
                  <a href="#" target="_blank">
                    <img src="ASSETS/images/clients/client_4.png" alt="image" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-md-2 subpage-block">
                <div className="client_block">
                  <a href="#" target="_blank">
                    <img src="ASSETS/images/clients/client_5.png" alt="image" />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-md-2 subpage-block">
                <div className="client_block">
                  <a href="#" target="_blank">
                    <img src="ASSETS/images/clients/client_6.png" alt="image" />
                  </a>
                </div>
              </div>
            </div>
            {/* End of Clients block */}
            {/* Fun facts block */}
            <div className="block-title">
              <h3>Fun Facts</h3>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="fun-fact-block gray-bg">
                  <i className="pe-7s-icon pe-7s-smile" />
                  <h4>Happy Clients</h4>
                  <span className="fun-value">1,024</span>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="fun-fact-block">
                  <i className="pe-7s-icon pe-7s-alarm" />
                  <h4>Working Hours</h4>
                  <span className="fun-value">6,256</span>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="fun-fact-block gray-bg">
                  <i className="pe-7s-icon pe-7s-medal" />
                  <h4>Awards Won</h4>
                  <span className="fun-value">21</span>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="fun-fact-block">
                  <i className="pe-7s-icon pe-7s-coffee" />
                  <h4>Coffee Consumed</h4>
                  <span className="fun-value">20,000</span>
                </div>
              </div>
            </div>
            {/* End of Fun fucts block */}
          </section>
          {/* End of About Me Subpage */}
          {/* Resume Subpage */}
          <section className="pt-page pt-page-3" data-id="resume">
            <div className="section-title-block">
              <h2 className="section-title">Resume</h2>
              <h5 className="section-description">6 Years of Experience</h5>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 subpage-block">
                <div className="block-title">
                  <h3>Education</h3>
                </div>
                <div className="timeline">
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">2010</h5>
                    <h4 className="event-name">Specialization Course</h4>
                    <span className="event-description">
                      University of Studies
                    </span>
                    <p>
                      Mauris magna sapien, pharetra consectetur fringilla vitae,
                      interdum sed tortor.
                    </p>
                  </div>
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">2009</h5>
                    <h4 className="event-name">Specialization Course</h4>
                    <span className="event-description">
                      University of Studies
                    </span>
                    <p>
                      Mauris magna sapien, pharetra consectetur fringilla vitae,
                      interdum sed tortor.
                    </p>
                  </div>
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">2008</h5>
                    <h4 className="event-name">Specialization Course</h4>
                    <span className="event-description">
                      University of Studies
                    </span>
                    <p>
                      Mauris magna sapien, pharetra consectetur fringilla vitae,
                      interdum sed tortor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 subpage-block">
                <div className="block-title">
                  <h3>Experience</h3>
                </div>
                <div className="timeline">
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">Dec 2012 - Current</h5>
                    <h4 className="event-name">Frontend-developer</h4>
                    <span className="event-description">Web Agency</span>
                    <p>
                      Mauris magna sapien, pharetra consectetur fringilla vitae,
                      interdum sed tortor.
                    </p>
                  </div>
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">Dec 2011 - Nov 2012</h5>
                    <h4 className="event-name">Web Designer</h4>
                    <span className="event-description">Apple Inc.</span>
                    <p>
                      Mauris magna sapien, pharetra consectetur fringilla vitae,
                      interdum sed tortor.
                    </p>
                  </div>
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">Jan 2010 - Dec 2011</h5>
                    <h4 className="event-name">Graphic Designer</h4>
                    <span className="event-description">Web Agency</span>
                    <p>
                      Mauris magna sapien, pharetra consectetur fringilla vitae,
                      interdum sed tortor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 subpage-block">
                <div className="block-title">
                  <h3>Design Skills</h3>
                </div>
                <div className="skills-info">
                  <h4>Web Design</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-1" />
                  </div>
                  <h4>Graphic Design</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-2" />
                  </div>
                  <h4>Print Design</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-3" />
                  </div>
                </div>
                <div className="block-title">
                  <h3>Coding Skills</h3>
                </div>
                <div className="skills-info">
                  <h4>HML5</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-4" />
                  </div>
                  <h4>CSS3</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-5" />
                  </div>
                  <h4>jQuery</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-6" />
                  </div>
                  <h4>Wordpress</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-7" />
                  </div>
                  <h4>PHP</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="download-cv-block">
                  <a className="button" target="_blank" href="#">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* End Resume Subpage */}
          {/* Portfolio Subpage */}
          <section className="pt-page pt-page-4" data-id="portfolio">
            <div className="section-title-block">
              <h2 className="section-title">Portfolio</h2>
              <h5 className="section-description">My Best Works</h5>
            </div>
            {/* Portfolio Content */}
            <div className="portfolio-content">
              {/* Portfolio filter */}
              <ul id="portfolio_filters" className="portfolio-filters">
                <li className="active">
                  <a
                    className="filter btn btn-sm btn-link active"
                    data-group="all"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="media">
                    Media
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="illustration"
                  >
                    Illustration
                  </a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="video">
                    Video
                  </a>
                </li>
              </ul>
              {/* End of Portfolio filter */}
              {/* Portfolio Grid */}
              <div
                id="portfolio_grid"
                className="portfolio-grid portfolio-masonry masonry-grid-3"
              >
                {/* Portfolio Item 1 */}
                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="ASSETS/images/portfolio/1.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 1 */}
                {/* Portfolio Item 2 */}
                <figure className="item" data-groups='["all", "video"]'>
                  <a
                    href="https://player.vimeo.com/video/97102654?autoplay=1"
                    title="Praesent Dolor Ex"
                    className="lightbox mfp-iframe"
                  >
                    <img src="ASSETS/images/portfolio/2.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="fa fa-video-camera" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 2 */}
                {/* Portfolio Item 3 */}
                <figure className="item" data-groups='["all","illustration"]'>
                  <a
                    href="images/portfolio/3.jpg"
                    className="lightbox"
                    title="Duis Eu Eros Viverra"
                  >
                    <img src="ASSETS/images/portfolio/3.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="fa fa-image" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 3 */}
                {/* Portfolio Item 4 */}
                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="ASSETS/images/portfolio/4.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 4 */}
                {/* Portfolio Item 5 */}
                <figure className="item" data-groups='["all", "illustration"]'>
                  <a
                    href="images/portfolio/5.jpg"
                    className="lightbox"
                    title="Aliquam Condimentum Magna Rhoncus"
                  >
                    <img src="ASSETS/images/portfolio/5.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="fa fa-image" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 5 */}
                {/* Portfolio Item 6 */}
                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="ASSETS/images/portfolio/6.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 6 */}
                {/* Portfolio Item 7 */}
                <figure className="item" data-groups='["all", "video"]'>
                  <a
                    href="https://player.vimeo.com/video/97102654?autoplay=1"
                    title="Nulla Facilisi"
                    className="lightbox mfp-iframe"
                  >
                    <img src="ASSETS/images/portfolio/7.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="fa fa-video-camera" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 7 */}
                {/* Portfolio Item 8 */}
                <figure className="item" data-groups='["all",  "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="ASSETS/images/portfolio/8.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 8 */}
                {/* Portfolio Item 9 */}
                <figure className="item" data-groups='["all","illustration"]'>
                  <a
                    href="images/portfolio/9.jpg"
                    className="lightbox"
                    title="Mauris Neque Dolor"
                  >
                    <img src="ASSETS/images/portfolio/9.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="fa fa-image" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 9 */}
                {/* Portfolio Item 10 */}
                <figure className="item" data-groups='["all", "video"]'>
                  <a
                    href="https://player.vimeo.com/video/97102654?autoplay=1"
                    title="Donec Lectus Arcu"
                    className="lightbox mfp-iframe"
                  >
                    <img src="ASSETS/images/portfolio/10.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="fa fa-video-camera" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 10 */}
                {/* Portfolio Item 11 */}
                <figure className="item" data-groups='["all","illustration"]'>
                  <a
                    href="images/portfolio/11.jpg"
                    className="lightbox"
                    title="Duis Eu Eros Viverra"
                  >
                    <img src="ASSETS/images/portfolio/11.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="fa fa-image" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 11 */}
                {/* Portfolio Item 12 */}
                <figure className="item" data-groups='["all","media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="ASSETS/images/portfolio/12.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 12 */}
              </div>
              {/* /Portfolio Grid */}
            </div>
            {/* /Portfolio Content */}
          </section>
          {/* /Portfolio Subpage */}
          {/* Blog Subpage */}
          <section className="pt-page pt-page-5" data-id="blog">
            <div className="section-title-block">
              <h2 className="section-title">Blog</h2>
              <h5 className="section-description">My Diary</h5>
            </div>
            <div className="blog-masonry">
              {/* Blog Post 1 */}
              <div className="item">
                <div className="blog-card">
                  <div className="media-block">
                    <a href="blog-post-1.html">
                      <img
                        className="post-image img-responsive"
                        src="ASSETS/images/blog/blog_post_1.jpg"
                        alt="blog-post-1"
                      />
                      <div className="mask" />
                      <div className="post-date">
                        <span className="day">6</span>
                        <span className="month">Dec</span>
                        {/*<span class="year">2016</span>*/}
                      </div>
                    </a>
                  </div>
                  <div className="post-info">
                    <ul className="category">
                      <li>
                        <a href="#">Travel</a>
                      </li>
                    </ul>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">
                        Bootstrap is the Most Popular Framework
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Blog Post 1 */}
              {/* Blog Post 2 */}
              <div className="item">
                <div className="blog-card">
                  <div className="media-block">
                    <a href="blog-post-1.html">
                      <img
                        className="post-image img-responsive"
                        src="ASSETS/images/blog/blog_post_2.jpg"
                        alt="blog-post-2"
                      />
                      <div className="mask" />
                      <div className="post-date">
                        <span className="day">3</span>
                        <span className="month">Nov</span>
                        {/*<span class="year">2016</span>*/}
                      </div>
                    </a>
                  </div>
                  <div className="post-info">
                    <ul className="category">
                      <li>
                        <a href="#">jQuery</a>
                      </li>
                    </ul>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">
                        One Framework, Every Device
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Blog Post 2 */}
              {/* Blog Post 3 */}
              <div className="item">
                <div className="blog-card">
                  <div className="media-block">
                    <a href="blog-post-1.html">
                      <img
                        className="post-image img-responsive"
                        src="ASSETS/images/blog/blog_post_3.jpg"
                        alt="blog-post-3"
                      />
                      <div className="mask" />
                      <div className="post-date">
                        <span className="day">12</span>
                        <span className="month">Oct</span>
                        {/*<span class="year">2016</span>*/}
                      </div>
                    </a>
                  </div>
                  <div className="post-info">
                    <ul className="category">
                      <li>
                        <a href="#">Sport</a>
                      </li>
                    </ul>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">
                        Designed for Everyone, Everywhere
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Blog Post 3 */}
              {/* Blog Post 4 */}
              <div className="item">
                <div className="blog-card">
                  <div className="media-block">
                    <a href="blog-post-1.html">
                      <img
                        className="post-image img-responsive"
                        src="ASSETS/images/blog/blog_post_4.jpg"
                        alt="blog-post-4"
                      />
                      <div className="mask" />
                      <div className="post-date">
                        <span className="day">18</span>
                        <span className="month">Aug</span>
                        {/*<span class="year">2016</span>*/}
                      </div>
                    </a>
                  </div>
                  <div className="post-info">
                    <ul className="category">
                      <li>
                        <a href="#">CSS</a>
                      </li>
                    </ul>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">
                        An Introduction To PostCSS
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Blog Post 4 */}
              {/* Blog Post 5 */}
              <div className="item">
                <div className="blog-card">
                  <div className="media-block">
                    <a href="blog-post-1.html">
                      <img
                        className="post-image img-responsive"
                        src="ASSETS/images/blog/blog_post_5.jpg"
                        alt="blog-post-5"
                      />
                      <div className="mask" />
                      <div className="post-date">
                        <span className="day">2</span>
                        <span className="month">Jul</span>
                        {/*<span class="year">2016</span>*/}
                      </div>
                    </a>
                  </div>
                  <div className="post-info">
                    <ul className="category">
                      <li>
                        <a href="#">CSS3</a>
                      </li>
                    </ul>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">
                        Original and Innovative Web Layouts
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Blog Post 5 */}
              {/* Blog Post 6 */}
              <div className="item">
                <div className="blog-card">
                  <div className="media-block">
                    <a href="blog-post-1.html">
                      <img
                        className="post-image img-responsive"
                        src="ASSETS/images/blog/blog_post_6.jpg"
                        alt="blog-post-6"
                      />
                      <div className="mask" />
                      <div className="post-date">
                        <span className="day">8</span>
                        <span className="month">May</span>
                        {/*<span class="year">2016</span>*/}
                      </div>
                    </a>
                  </div>
                  <div className="post-info">
                    <ul className="category">
                      <li>
                        <a href="#">HTML5</a>
                      </li>
                    </ul>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">
                        Creative and Innovative Navigation Designs
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Blog Post 6 */}
              {/* Blog Post 7 */}
              <div className="item">
                <div className="blog-card">
                  <div className="media-block">
                    <a href="blog-post-1.html">
                      <img
                        className="post-image img-responsive"
                        src="ASSETS/images/blog/blog_post_7.jpg"
                        alt="blog-post-7"
                      />
                      <div className="mask" />
                      <div className="post-date">
                        <span className="day">7</span>
                        <span className="month">Apr</span>
                        {/*<span class="year">2016</span>*/}
                      </div>
                    </a>
                  </div>
                  <div className="post-info">
                    <ul className="category">
                      <li>
                        <a href="#">Design</a>
                      </li>
                    </ul>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">
                        Navigation for Mega-Sites
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Blog Post 7 */}
              {/* Blog Post 8 */}
              <div className="item">
                <div className="blog-card">
                  <div className="media-block">
                    <a href="blog-post-1.html">
                      <img
                        className="post-image img-responsive"
                        src="ASSETS/images/blog/blog_post_8.jpg"
                        alt="blog-post-8"
                      />
                      <div className="mask" />
                      <div className="post-date">
                        <span className="day">21</span>
                        <span className="month">Mar</span>
                        {/*<span class="year">2016</span>*/}
                      </div>
                    </a>
                  </div>
                  <div className="post-info">
                    <ul className="category">
                      <li>
                        <a href="#">CSS3</a>
                      </li>
                    </ul>
                    <a href="blog-post-1.html">
                      <h4 className="blog-item-title">
                        Front-End Challenge Accepted: CSS 3D Cube
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* End of Blog Post 8 */}
            </div>
          </section>
          {/* End Blog Subpage */}
          {/* Contact Subpage */}
          <section className="pt-page pt-page-6" data-id="contact">
            <div className="section-title-block">
              <h2 className="section-title">Contact</h2>
              <h5 className="section-description">Get in Touch</h5>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 subpage-block">
                <div className="block-title">
                  <h3>Get in Touch</h3>
                </div>
                <p>
                  Sed eleifend sed nibh nec fringilla. Donec eu cursus sem,
                  vitae tristique ante. Cras pretium rutrum egestas. Integer
                  ultrices libero sed justo vehicula, eget tincidunt tortor
                  tempus.
                </p>
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="pe-7s-icon pe-7s-map-marker" />
                  </div>
                  <div className="ci-text">
                    <h5>Los Angeles, USA</h5>
                  </div>
                </div>
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="pe-7s-icon pe-7s-mail" />
                  </div>
                  <div className="ci-text">
                    <h5>alexsmith@example.com</h5>
                  </div>
                </div>
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="pe-7s-icon pe-7s-call" />
                  </div>
                  <div className="ci-text">
                    <h5>+123 654 78900</h5>
                  </div>
                </div>
                <div className="contact-info-block">
                  <div className="ci-icon">
                    <i className="pe-7s-icon pe-7s-check" />
                  </div>
                  <div className="ci-text">
                    <h5>Freelance Available</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 subpage-block">
                <div className="block-title">
                  <h3>Contact Form</h3>
                </div>
                <form
                  id="contact-form"
                  method="post"
                  action="contact_form/contact_form.php"
                >
                  <div className="messages" />
                  <div className="controls">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required="required"
                        data-error="Name is required."
                      />
                      <div className="form-control-border" />
                      <i className="form-control-icon fa fa-user" />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required="required"
                        data-error="Valid email is required."
                      />
                      <div className="form-control-border" />
                      <i className="form-control-icon fa fa-envelope" />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Message for me"
                        rows={4}
                        required="required"
                        data-error="Please, leave me a message."
                        defaultValue={""}
                      />
                      <div className="form-control-border" />
                      <i className="form-control-icon fa fa-comment" />
                      <div className="help-block with-errors" />
                    </div>
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                      data-callback="correctCaptcha"
                    />
                    <input
                      type="submit"
                      className="button btn-send"
                      defaultValue="Send message"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* End Contact Subpage */}
        </div>
      </div>
      {/* /Page changer wrapper */}
    </div>
    {/* /Main Content */}
  </div>
</>

    </div>
  )
}

export default Anasayfa
