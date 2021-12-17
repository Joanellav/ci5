// Joa
import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';

const Profile = () => {
    const [disabled, setDisabled] = useState(true);

    function handleSubmit(event) {
        setDisabled(!disabled);
        event.preventDefault();
    }

    return(
    <div>
        <Alert className="alert alert-secondary"><h2>My Profile</h2></Alert>
        <form> 
            <div className="form-group">  
                <label htmlFor="username"  className="form-check-label">Username:
                    <div className="input-group mb-5">
                        <input 
                            type="text" 
                            className = "form-control"
                            placeholder="Username" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1"                
                            disabled={disabled}/>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                    </div>
                </label> 
            </div>
            <div className="form-group">       
                <label htmlFor="name"  className="form-check-label">Name:
                    <div className="input-group mb-5">
                        <input
                            className = "form-control"
                            placeholder="Name"
                            aria-label="Username" 
                            aria-describedby="basic-addon1"                
                            disabled={disabled}/>
                    </div>
                </label> 
            </div>  
            <div className="form-group"> 
                <input type="submit" value="Change" className="form-input" onClick={handleSubmit} />
                <input type="submit" value="Update" className="form-input" /> 
            </div>  
        </form>
    </div>

)};

export default Profile;