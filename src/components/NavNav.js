import{Link} from "react-router-dom";

const NavNav = () => (
    <nav>
        <Link to="/" className="btn btn-dark">Home </Link>
        <Link to="/about" className="btn btn-dark">About</Link>
        <Link to="/contact" className="btn btn-dark">Contact</Link>
        <Link to="/service" className="btn btn-dark">Service</Link>
        <Link to="/register" className="btn btn-dark">Register</Link>
    </nav>
);

export default NavNav;