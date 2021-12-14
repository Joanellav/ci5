// Joa
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import serv1 from "../assets/Serv1.jpg"
import serv2 from "../assets/Serv2.jpg"
import serv3 from "../assets/Serv3.jpg"
import serv4 from "../assets/Serv4.jpg"
import serv5 from "../assets/Serv5.jpg"
import serv6 from "../assets/Serv6.jpg"
import {Alert} from 'react-bootstrap'

const images = [
  {
    original: serv1,
    thumbnail: serv1,
  },
  {
    original: serv2,
    thumbnail: serv2,
  },
  {
    original: serv3,
    thumbnail: serv3,
  },
];
const cards = [
  {
    id:1,
    image:serv6,
    text:'Por medio de nuestra plataforma los cliente envían los datos de los productos a despachar, seleccionan los vehículos que necesitaran para el envío, el lugar de recogida y el lugar de entrega.'
    + ' El valor a pagar será igual a la distancia en kilómetros entre los puntos origen y destino multiplicado por el valor por kilómetro recorrido. '
  },
  {
    id:2,
    image:serv5,
    text:'El administrador de la plataforma podrá asignar el valor por kilometro recorrido desde su Dashboard'
    +' Existen minimo 20 puntos pre-configurados en el sistema incluyendo la distancia entre ellos'
  },
  {
    id:3,
    image:serv4,
    text:'Los perfiles con los que cuenta el sistema son administrador, usuario interno y usuario externo (cliente).'
  },
  {
    id:4,
    image:serv3,
    text:'La generación de la factura es automática teniendo en cuenta el valor configurado por kilómetro recorrido y la distancia entre los puntos origen y destino.'
  },
  {
    id:5,
    image:serv2,
    text:'Un administrador se encarga de gestionar los usuarios internos y además ejerce control total de la plataforma.'
  },
  {
    id:6,
    image:serv1,
    text:'Los datos suministrados por los usuarios deben cumplir la política de privacidad de datos vigente, es decir las contraseñas de los usuarios deben almacenarse de forma cifrada y la conexión al servidor debe realizarse de forma segura.'
  }
]

const Home = () => (
  <div className="container justify-content-center align-items-center">
  <Alert variant="secondary" className="mt-1"><h2>Transportes Transportadora De Carga Antioquia S A S</h2></Alert>
  
  <div className="row">  
   
   
  <div className="col-md-6 text-center" >
      <div className="card">
          <div className="card-body ">
            <p className=" bg-black text-light text-capitalize card-text">
              Transportamos los productos de nuestros cliente 
              de una forma rapida y segura gracias a nuestros vehiculos.
            <ImageGallery items={images} />
            </p>
          </div>
        </div>
      </div>
             
        {
          cards.map((card) =>
            <div className="col-md-3" key={card.id}>
              <div className="card">
                <div className="card-body ">
                  <img src={card.image} alt="" class="card-img img-responsive fit-image2"/>
                  <p className="card-text text-secondary">{card.text}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>

);

export default Home;