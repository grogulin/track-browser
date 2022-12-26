// import { Card } from "react-bootstrap";
// import CardHeader from "react-bootstrap/esm/CardHeader";
// import Container from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';






function ShowCard(props) {
    const { array } = props;

    let arr = array


    

    const menu = arr.map((element) => {
        return(
        <Col xl={3} lg={4} md={6} className="d-flex  my-3" key={element.circuitId}>
            <a href={element.url} className="cardLink">
                <div className="card" >
                    <Image src={element.imgurl}className="cardImg"></Image>
                    <div className="cardTitle">
                        {element.name}
                    </div>
                    <div className="cardTitle cardTitle2">
                        {element.location}, {element.country}
                    </div>
                </div>
            </a>
        </Col>

            
        );
    });

    return(
        <Row className="">
            {menu}
        </Row>
        // <ul>
        //     {array.map(item => (
        //     <li key={item.circuitId}>{item.name}</li>
        //     ))}
        // </ul>
       
    )
}

export default ShowCard;