import{Routes, Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Profile from './Profile';
import Transport from './Transport';

const RoutesRoute = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/transport" element={<Transport/>}/>
  </Routes>
);

export default RoutesRoute;