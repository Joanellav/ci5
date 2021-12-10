import{Link} from "react-router-dom";

const NavNav = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
<a className="navbar-brand" href="/">Ciclo 5</a>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
          <Link to="/" className="nav-link">Home<span class="sr-only"></span> </Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
          <Link to="/service" className="nav-link">Service</Link>
          </li>
        </ul>			    
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="#victorModal" role="button" className="nav-link" data-toggle="modal">Sign in</a>
                <div id="victorModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">¿Estás seguro?</h4>
                        </div>
                        <div className="modal-body">
                            <p>¿Seguro que quieres borrar este elemento?</p>
                            <p className="text-warning"><small>Si lo borras, nunca podrás recuperarlo.</small></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Sign up</Link>
              </li>
              <li>
              </li>
            </ul>
    </div>
</nav>

);

export default NavNav;