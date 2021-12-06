// Joa
import {Alert} from 'react-bootstrap'
import imgbanner from "../assets/Banner.jpg"

const Banner = () => (
  <Alert variant="secondary" className="mt-1">
    <Alert.Heading>Hey, nice to see you
      
      <img src={imgbanner} alt="" class="card-img img-responsive fit-image"/>
                
    </Alert.Heading>
  </Alert>
);

export default Banner;

