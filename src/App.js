import './App.css';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

import ShowCard from './components/card';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function LoadTracks() {
const [items, setItems] = useState([]);

useEffect(() => {
  fetch('http://5.61.61.212:9900/tracks')
    .then(response => response.json())
    .then(data => setItems(data));
}, []);

return (<ShowCard array={items} />)

}




function App() {
  return (
  <div>
    <div className='headerDiv'>
      <Image src="./bgPhoto.jpg" className="bgImage"></Image>
    </div>
    <Nav>
      <Navbar className='m-auto' variant="dark">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="#home" className='navBar mx-auto'>Track Browser</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Nav>
    <Container className="headerContainer" >
      <Row className='text-center'>
        <Col>
          <div className='headerText'>All racing tracks</div>
        </Col>
      </Row>
      <LoadTracks />
      <Row>
        <Col className='text-center'>
          {/* <Button variant="primary">Click me!</Button> */}
          {/* {LoadingButton()} */}
        </Col>
        <Col>
          {/* {simple({text: "AA"})} */}
          {/* <LoadTracks /> */}
          {/* <LoadTracks2 /> */}
        </Col>
      </Row>
    </Container>


    
    

    {/* <div className='container'>
      <div className='row'>
        <ShowCard />
      </div>
    </div> */}
    
  </div>
    
  );
}

export default App;
