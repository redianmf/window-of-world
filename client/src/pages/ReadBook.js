// import libraries
import React, { useState } from 'react';
import '../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// import assets
import Logo from '../assets/images/wow_logo.png';
import BookView from '../assets/images/book-view.png';


// import components



function ReadBook() {
    return (
        <div className="body-afterLogin ps-5 pe-5 pb-5">
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <Link to="/home"><div className="d-flex justify-content-center"><img className="logo-small" src={Logo} alt="" /></div></Link>
                </Col> 
            </Row>
            <div>
                <img className="book-view" src={BookView} alt="" />
            </div>
        </Container>  
        </div>
    )
}

export default ReadBook;