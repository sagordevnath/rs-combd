import './Banner.css'
import image from '../../assets/banner/banner.png';

const Banner = () => {
    
    return (
      <div className="container banner mh-auto text-center">
        <div className="row h-100">
          <div className="col-lg-8 h-100 d-flex align-content-center flex-wrap gap-5">
              <h2 className='mb-10'>Uniting a divided Workforce</h2>
              <p className='py-10 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste libero aspernatur unde. Sequi animi soluta corporis vitae nemo ut.</p>
              <button type="button" className="btn btn-outline-success">Learn More</button>
          </div>
          <div className="col-lg-4 h-vh d-flex align-content-center flex-wrap">            
            <img className='h-50' src={image} alt="" />
          </div>
        </div>
      </div>
                                                                                                                                                                                    
    );
}

export default Banner;
