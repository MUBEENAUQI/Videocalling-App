import React from "react";
import "./App.css";
import "./index.css";
import { AiOutlineClose } from "react-icons/ai";
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Container, Row, Col } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function Header() {
    return (

        //<Stack direction="horizontal" className="headers" >

        //    <Col style={{ color: "black", fontSize: 25, textAlign: "center" }}> Video Calling </Col>
        //    <Button variant="dark" onClick={event => window.location.href = 'https://react-bootstrap.netlify.app/components/alerts/'}><AiOutlineClose style={{ color: "whitesmoke", fontSize: 25, fontWeight: "bold" }} /></Button>
        //</Stack>

        <div className="onehead">
            <Button variant="dark" className="closebutton" onClick={event => window.location.href = 'https://react-bootstrap.netlify.app/components/alerts/'}><AiOutlineClose style={{ color: "whitesmoke", fontSize: 25, fontWeight: "bold" }} /></Button>
            <div className="headtext">Video Calling</div>
            
        </div>
            
           
       
        
    );
}

export default Header;
/*md={{ span: 4, offset: 4 }}*/