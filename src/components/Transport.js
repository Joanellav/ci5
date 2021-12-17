// Joa
import Select from 'react-select';
import {Alert} from 'react-bootstrap';

const options = [
    { value: '1', label: 'Cali-Otro' },
    { value: '2', label: 'Cali-Otro' },
    { value: '3', label: 'Cali-Otro' }
  ]

const Transport = () => {

    return(
    <div>
        <Alert className="alert alert-secondary"><h2>Request Transport</h2></Alert>

        <form> 

            <div className="form-group">       
                <label htmlFor="name"  className="form-check-label">Name:
                    <input
                        className = "form-control"
                        placeholder="Name"/>
                </label> 
            </div>  

            <div className="form-group">       
                <label htmlFor="description"  className="form-check-label">Description:
                    <input
                        className = "form-control"
                        placeholder="Description"/>
                </label> 
            </div>  

            <div className="form-group">       
                <label htmlFor="numVeh"  className="form-check-label">Number of Vehicles:
                    <input
                        className = "form-control"
                        placeholder="Cant"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            }
                        }}
                    />
                </label> 
            </div>  

            <div className="form-group">       
                <label htmlFor="origin"  className="form-check-label">Origen/Destino:
                    <Select options={options} />
                </label> 
            </div>  


            <div className="form-group"> 
                <input type="submit" value="Request" className="form-input" /> 
            </div> 

        </form>
    </div>

)};

export default Transport;