// Joa
import { Carousel, Row, Col, Card } from "react-bootstrap";
import serv1 from "../assets/Serv1.jpg"
import serv2 from "../assets/Serv2.jpg"
import serv3 from "../assets/Serv3.jpg"
import serv4 from "../assets/Serv4.jpg"
import serv5 from "../assets/Serv5.jpg"
import serv6 from "../assets/Serv6.jpg"
/*eslint-disable-next-line*/
Array.prototype.chunk = function(size) {
  const result = [];
  while (this.length) {
    result.push(this.splice(0, size));
  }
  return result;
};

const items = [
  {
    src: serv1
  },
  {
    src: serv2
  },
  {
    src: serv3
  },
  {
    src: serv4
  },
  {
    src: serv5
  },
  {
    src: serv6
  }
];


const About = () => (
  <div>
    <h2>About</h2>
    <Carousel>
        {items.chunk(2).map((chunk, idx) => (
          <Carousel.Item key={idx} >
            <Row>
              {chunk.map((item, idx2) => (
                <Col lg="6" key={idx2}>
                  <Card>
                    <Card.Img
                      style={{ width: "550px"}}
                      src={item.src}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
  </div>
);

export default About;