import React, { useState } from 'react';
import '../index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../assets/images/wow_logo.png';
import ProfileImg from '../assets/icon/profile.png'
import UserIcon from '../assets/icon/user.png';
import SubscribeIcon from '../assets/icon/subscribe.png';
import LogoutIcon from '../assets/icon/logout.png';
import Banner from '../assets/images/banner.png'

import BookList from '../components/BookList';


function SubscribeActive() {
    return (
        <div className="body-afterLogin ps-5 pe-5">
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <div className="d-flex justify-content-center"><img className="logo-small" src={Logo} alt="" /></div>
                    <div className="d-flex justify-content-center"><img className="profile-img" src={ProfileImg} alt="" /></div>
                    <div className="d-flex justify-content-center profile-name">Egi Ganteng</div>
                    <div className="d-flex justify-content-center profile-status-subscribed">Subscribed </div><hr />
                    <div className="font-left mt-5 mb-5"><img className="me-3" src={UserIcon} alt="" />Profile</div>
                    <div className="font-left mb-5"><img className="me-2" src={SubscribeIcon} alt="" />Subscribe</div><hr />
                    <div className="font-left mt-5"><img className="me-3" src={LogoutIcon} alt="" />Logout</div>
                </Col>
                <Col sm={9}>
                    <div><img className="banner-img mt-5" src={Banner} alt="" /></div>
                    <div className="list-book-title ms-3 mb-5">List Book</div>
                    <div className="ms-3 mb-5"><BookList /></div>
                </Col>
            </Row>
        </Container>  
        </div>
    )
}

export default SubscribeActive;