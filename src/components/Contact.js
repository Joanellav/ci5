// Joa

import {Alert} from 'react-bootstrap'

const Contact = () => (
  <div>
    <Alert variant="secondary" className="mt-1"><h2>Leave us your message</h2></Alert>
    <form className="mb-5">
          <div className="form-group">
            <label htmlFor="nya" className="negrita">Full Name</label>
            <input type="text" className="form-control" id="nya" required />            
          </div>
 
          <div className="form-group">
            <label htmlFor="email" className="negrita">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
 
          <div className="form-group">
            <label htmlFor="asunto" className="negrita">Asunto</label>
            <input type="text" className="form-control" id="asunto" required />
          </div>
 
          <div className="form-group">
            <label htmlFor="mensaje" className="negrita">Message</label>
            <textarea className="form-control" id="mensaje" required></textarea>
          </div>
 
          <button type="submit" className="btn btn-primary">Send</button>
 
        </form>
  </div>
);

export default Contact;