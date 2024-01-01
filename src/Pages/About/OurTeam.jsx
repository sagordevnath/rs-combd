import "./OurTeam.css";
import SingleTeamImage from "../../assets/images/blog/3.jpeg";

const OurTeam = () => {
  return (
    <section className="team-area">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="team-area-text text-center">
              <h6>WORLD-CLASS SERVICE</h6>
              <h2 className="mb-4">Meet Our Team</h2>
              <p className="mb-5">
                If you are looking for a Trusted Certified Public Accounting
                Firm that delivers world-class service and industry-leading
                expertise with a personal touch, give us a call, email, or stop
                by your local office today to discuss how we can help.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="single-team text-center">
              <img src={SingleTeamImage} alt="" />
              <h2 className="mt-3">John Doe</h2>
              <h6 className="mb-3">Managing Director</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-team text-center">
              <img src={SingleTeamImage} alt="" />
              <h2 className="mt-3">John Doe</h2>
              <h6 className="mb-3">Managing Director</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-team text-center">
              <img src={SingleTeamImage} alt="" />
              <h2 className="mt-3">John Doe</h2>
              <h6 className="mb-3">Managing Director</h6>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-team text-center">
              <img src={SingleTeamImage} alt="" />
              <h2 className="mt-3">John Doe</h2>
              <h6 className="mb-3">Managing Director</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
