// Joa
import {Alert} from 'react-bootstrap'

const Register = () => (
  <div>
    <form className="mb-5">
      <Alert variant="secondary" className="mt-1">
                <h2>Sign up</h2>
      </Alert>
                <div className="form-group">
                  <label className="negrita">Nombres y Apellidos</label>
                  <input type="text" className="form-control" id="nya" placeholder="Enter Your Name and LastName" required />            
                </div>
                <div className="form-group">
                  <label className="negrita">Id</label>
                  <input type="number" className="form-control" id="rid" placeholder="Enter id" required />            
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"  required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="pass" placeholder="Enter password"  required/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            
            </form>
            
  </div>
);

export default Register;