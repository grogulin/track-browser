// import { Card } from "react-bootstrap";
// import CardHeader from "react-bootstrap/esm/CardHeader";
// import Container from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from 'react';

function simple(url) {
    alert(`Hello, ${url}!`)
}

async function TrackImage(url) {
    const [image, setImage] = useState([]);

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => setImage(data));
      }, []);

    return(
        <Image src={image} className="cardImg"></Image>
    )  
}

async function fetchImageUrl(url) {
    // const [imageUrl, setImageUrl] = useState(null);

    var result = url.split('/')
    result = result[result.length - 1]
    var fetchingUrl = "https://en.wikipedia.org/w/api.php?action=query&titles="+result+"&prop=pageimages&format=json&pithumbsize=500&redirects&origin=*"

    var imgUrl = ""
    fetch(fetchingUrl, {
        mode: 'cors', // Set the mode to 'no-cors' to fetch the data without CORS
        
    })
        // .then(response => console.log("Response:", response))
        // .then(response => response.json()) // Parse the response as JSON
        .then(response => response.text())
        .then(data => {
            data = data.split('source')[1]
            data = data.substring(3)
            console.log("Data", data.split("\",\"width")[0])
            return(String(data.split("\",\"width")[0]))
            // imgUrl = data.split("\",\"width")[0]
            // console.log("ImgUrl", imgUrl);
        })
        
        .catch(error => {
          // Handle any errors that occurred
          console.error(error);
        });

        // console.log("Final", imgUrl)
        // return imgUrl

    // return(
    //     <TrackImage props={{'url': imgUrl}}/>
    // )
}

function LoadTracks(url) {
    
    }



function ShowCard(props) {
    const { array } = props;

    let arr = array
    // let arr = trackData

    // console.log("Success", array.length)


    

    const menu = arr.map((element) => {
        return(
        //   <div className='col-lg-3 col-md-4 col-sm-12 mb-4'>
        <Col xl={3} lg={4} md={6} className="d-flex  my-3" key={element.circuitId}>
            {/* <Button className="getImageURL" onClick={() => fetchImageUrl(element.url)}>Get Image URL</Button> */}
            <a href={element.url} className="cardLink">
            {/* <Card className='trackCard'>
                <Card.Img variant="top" src="./circuitLayout.png" style={{ maxHeight:'100px', objectFit:'cover' }} />
                <Card.Title className='trackCardTitle'> {element.name}</Card.Title>
            </Card> */}
                <div className="card" >
                    
                    {/* <Image src="./circuitLayout.png" className="cardImg"></Image> */}
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