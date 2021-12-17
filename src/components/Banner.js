// Joa
import {Alert} from 'react-bootstrap'
import imgbanner from "../assets/Banner.jpg"

const Banner = () => (
  <Alert variant="secondary" className="mt-1">      
      <img src={imgbanner} alt="" className="card-img img-responsive fit-image"/>
  </Alert>
);

export default Banner;

