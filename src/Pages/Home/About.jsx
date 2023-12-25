import "./About.css";

const About = () => {
  return (
    // <div className="section-padding">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-8">
    //                 <div className="white-box">
    //                     <h4>Send a massage</h4>
    //                     <div className="contact-form">
    //                        <form method="POST" action="http://formspree.io/ssagor64@gmail.com">
    //                             <div className="row">
    //                                 <div className="col-md-6">
    //                                     <input name="firstname" type="text" placeholder="First name" required />
    //                                 </div>
    //                                 <div className="col-md-6">
    //                                     <input name="lastname" type="text" placeholder="Last name" required />
    //                                 </div>
    //                             </div>
    //                             <div className="row">
    //                                 <div className="col-md-6">
    //                                     <input name="email" type="email" placeholder="Your Email" required />
    //                                 </div>
    //                                 <div className="col-md-6">
    //                                     <input name="phone" type="tel" placeholder="Phone number" required />
    //                                 </div>
    //                             </div>

    //                             <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Write your massage" required></textarea>
    //                                 <div className="submit">
    //                             <input type="submit" placeholder="Send massage" />
    //                         </div>
    //                        </form>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-md-4">
    //                 <div className="colored-box">
    //                     <h4>Get in touch</h4>
    //                     <p className="contact-info"><i className="fas fa-home"></i>Panjia, Keshabpur, Jashore<br />Bangladesh</p>
    //                     <p className="contact-info"><i className="fas fa-mobile"></i><a href="#">+01710-786364<br />+01704840535</a></p>
    //                     <p className="contact-info"><i className="fas fa-envelope"></i><a href="mailto:info@website">ssagor64@gmail.com</a><br />
    //                         <a href="mailto:info@website.com">aitizzosagor@gmail.com.</a></p>

    //                         <div className="social-icon">
    //                             <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
    //                             <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
    //                             <a href="" target="_blank"><i className="fab fa-linkedin-in"></i></a>
    //                             <a href="" target="_blank"><i className="fab fa-youtube"></i></a>
    //                         </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="desktop-img"></div>
          </div>
          <div className="col-md-8">
            <div className="about-text">
              <h6>SERVING OUR VALUED CLIENTS FOR MORE THAN 40 YEARS</h6>
              <h3>RS Communication, Your Trusted Advisor</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi itaque adipisci quaerat, molestiae corporis quo, eos
                iure dolor laudantium doloremque incidunt aspernatur
                voluptatibus neque cum. Illo consequatur mollitia asperiores
                similique explicabo quae laborum veniam. Cupiditate officiis
                aliquam exercitationem commodi! Laudantium odit incidunt eaque
                adipisci, a quisquam quo quia ullam quos excepturi facilis
                debitis itaque dolorum assumenda optio magnam consequuntur vero
                rem explicabo saepe fugit nemo beatae quas! Excepturi, quidem
                ratione?
              </p>
              <ul>
                <li>
                  <a href="#">Upcoming Events</a>
                </li>
                <li>
                  <a href="#">Our Locations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
