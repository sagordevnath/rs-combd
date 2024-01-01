import "./MoreAboutTwo.css";
import TabImage from "../../assets/images/details/about-banner-1.jpg";

const MoreAboutTwo = () => {
  return (
    <section className="more-about-area-two">
      <div className="container">
        <div className="row">
          <div className="more-about-area-two-heading text-center">
            <h5 className="mb-2">
              SERVING WISCONSIN & MICHIGAN’S UPPER PENINSULA FOR MORE THAN 40
              YEARS
            </h5>
            <h2>KerberRose, Your Trusted Advisor</h2>
          </div>
        </div>
        <div className="row">
          <div className="tab-area">
            <div className="nav-tab-area mb-5">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-about-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-about"
                    type="button"
                    role="tab"
                    aria-controls="pills-about"
                    aria-selected="false"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row d-flex align-items-center">
                  <div className="col-md-5">
                    <div className="tab-area-img">
                      <img className="w-100" src={TabImage} alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="tab-area-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam officiis praesentium asperiores expedita
                        itaque obcaecati accusamus sit omnis necessitatibus
                        blanditiis ipsam, eveniet et fuga quos deleniti
                        reprehenderit debitis perspiciatis natus. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Aliquam
                        officiis praesentium asperiores expedita itaque
                        obcaecati accusamus sit omnis necessitatibus blanditiis
                        ipsam, eveniet et fuga quos deleniti reprehenderit
                        debitis perspiciatis natus.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore est pariatur repudiandae consequatur
                        nisi dolor laboriosam, quam perspiciatis doloribus
                        quaerat!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row d-flex align-items-center">
                  <div className="col-md-5">
                    <div className="tab-area-img">
                      <img className="w-100" src={TabImage} alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="tab-area-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam officiis praesentium asperiores expedita
                        itaque obcaecati accusamus sit omnis necessitatibus
                        blanditiis ipsam, eveniet et fuga quos deleniti
                        reprehenderit debitis perspiciatis natus. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Aliquam
                        officiis praesentium asperiores expedita itaque
                        obcaecati accusamus sit omnis necessitatibus blanditiis
                        ipsam, eveniet et fuga quos deleniti reprehenderit
                        debitis perspiciatis natus.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore est pariatur repudiandae consequatur
                        nisi dolor laboriosam, quam perspiciatis doloribus
                        quaerat!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row d-flex align-items-center">
                  <div className="col-md-5">
                    <div className="tab-area-img">
                      <img className="w-100" src={TabImage} alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="tab-area-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam officiis praesentium asperiores expedita
                        itaque obcaecati accusamus sit omnis necessitatibus
                        blanditiis ipsam, eveniet et fuga quos deleniti
                        reprehenderit debitis perspiciatis natus. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Aliquam
                        officiis praesentium asperiores expedita itaque
                        obcaecati accusamus sit omnis necessitatibus blanditiis
                        ipsam, eveniet et fuga quos deleniti reprehenderit
                        debitis perspiciatis natus.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore est pariatur repudiandae consequatur
                        nisi dolor laboriosam, quam perspiciatis doloribus
                        quaerat!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-about"
                role="tabpanel"
                aria-labelledby="pills-about-tab"
              >
                <div className="row d-flex align-items-center">
                  <div className="col-md-5">
                    <div className="tab-area-img">
                      <img className="w-100" src={TabImage} alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="tab-area-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam officiis praesentium asperiores expedita
                        itaque obcaecati accusamus sit omnis necessitatibus
                        blanditiis ipsam, eveniet et fuga quos deleniti
                        reprehenderit debitis perspiciatis natus. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Aliquam
                        officiis praesentium asperiores expedita itaque
                        obcaecati accusamus sit omnis necessitatibus blanditiis
                        ipsam, eveniet et fuga quos deleniti reprehenderit
                        debitis perspiciatis natus.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore est pariatur repudiandae consequatur
                        nisi dolor laboriosam, quam perspiciatis doloribus
                        quaerat!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutTwo;
