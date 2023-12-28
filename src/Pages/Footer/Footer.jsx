import "./Footer.css";
import { Form } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-wid">
                <h3>RS Communication Limited</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, minus a illo dolorum ullam incidunt iusto atque enim
                  autem. Cum.
                </p>
                <div className="social-link">
                  <a href="" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-wid">
                <h3>Quick-links</h3>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">services</a>
                  </li>
                  <li>
                    <a href="">Media</a>
                  </li>
                  <li>
                    <a href="">Other services</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-wid">
                <p className="contact-info">
                  <i className="fas fa-map"></i>Keshabpur, Jashore
                  <br />
                  Bangladesh
                </p>
                <p className="contact-info">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:ssagor64@gmail.com">ssagor64@gmail.com</a>
                </p>
                <p className="contact-info">
                  <i className="fas fa-phone"></i>
                  <a href="+8801710786364">+8801710786364</a>
                </p>

                <div className="footer-subscription-form">
                  <h6>Subscription our Newsletter</h6>
                  <Form>
                    <input type="email" placeholder="Your email" />
                    <input type="submit" value="SEND" />
                  </Form>

                  <p>We don't share your info with anyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              porro.
            </div>
            <div className="col-md-6">
              <ul className="text-right">
                <li>
                  <a href="">Privecy policy</a>
                </li>
                <li>
                  <a href="">Turms of condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
