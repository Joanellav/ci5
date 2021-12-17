// Joa
import serv3 from "../assets/Serv3.jpg"
import serv5 from "../assets/Serv5.jpg"
import serv2 from "../assets/Serv2.jpg"
import {Alert} from 'react-bootstrap'


const cards = [
  {
    id:1,
    title:'Entrega Rapida',
    image:serv2,
    text:'«Una marca es para una empresa lo que la reputación es para una persona. Ganas reputación al tratar de hacer bien las cosas difíciles». Jeff Bezos'
  },
  {
    id:2,
    title:'Entrega Segura',
    image:serv3,
    text:'«Hagas lo que hagas, hazlo bien. Hazlo tan bien que cuando la gente te vea hacerlo quiera volver y verte hacerlo de nuevo, y querrán traer a otros y mostrarles lo bien que lo haces». Walt Disney'
  },
  {
    id:3,
    title:'Soporte al Cliente',
    image:serv5,
    text:'«Aprendí que la gente olvidará lo que dijiste, olvidará lo que hiciste... pero nunca olvidará lo que le hiciste sentir». Maya Angelou'
  }
]

const Service = () => (

<div className="container d-flex justify-content-center align-items-center">
   
    <div className="row">  
    
<Alert variant="secondary" className="mt-1"><h2>We offer you...</h2></Alert>
           
      {
        cards.map((card) =>
          <div className="col-md-4" key={card.id}>
            <div className="card">
              <div className="card-body ">
                <h2 className="title mb-4 ">{card.title}</h2>
                <img src={card.image} alt="" className="card-img img-responsive fit-image"/>
                <div className="card-text text-secondary">{card.text}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  </div>
);

export default Service;