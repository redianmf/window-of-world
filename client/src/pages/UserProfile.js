// import libraries
import React, { useState } from 'react';
import '../index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// import assets
import Logo from '../assets/images/wow_logo.png';
import ProfileImg from '../assets/icon/profile.png'
import UserIcon from '../assets/icon/user-red.png';
import SubscribeIcon from '../assets/icon/subscribe.png';
import LogoutIcon from '../assets/icon/logout.png';
import EmailIcon from '../assets/icon/email.png';
import GenderIcon from '../assets/icon/gender.png';
import TelephoneIcon from '../assets/icon/phone.png';
import AddressIcon from '../assets/icon/address.png';
import ProfileImgBig from '../assets/images/profile-big.png'

// import components
import MyBookList from '../components/MyBookList';
import LeftPanel from '../components/LeftPanel';
import Logout from '../components/Logout';


function UserProfile() {
    return (
        <div className="body-afterLogin ps-5 pe-5">
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <LeftPanel />
                    <div className="font-left-red mt-5 mb-5"><img className="me-3 align-top" src={UserIcon} alt="" />Profile</div>
                    <div className="mb-5"><Link to="/subscribe"><span className="font-left"><img className="me-2 align-top" src={SubscribeIcon} alt="" />Subscribe</span></Link></div><hr />
                    <Logout />
                </Col>
                <Col sm={9} className="mt-5 mb-5">
                    <div className="profile-title">Profile</div>
                    <div className="d-flex profile-background mb-5">
                        <Col sm={8}>
                            <div className="d-flex mb-4">
                                <Col sm={1}><img className="pt-2" src={EmailIcon} alt="" /></Col>
                                <Col sm={8}>
                                    <div className="profile-value mb-2">egigans@gmail.com</div>
                                    <div className="profile-property">Email</div>
                                </Col>
                            </div>
                            <div className="d-flex mb-4">
                                <Col sm={1}><img className="pt-2" src={GenderIcon} alt="" /></Col>
                                <Col sm={8}>
                                    <div className="profile-value mb-2">Male</div>
                                    <div className="profile-property">Gender</div>
                                </Col>
                            </div>
                            <div className="d-flex mb-4">
                                <Col sm={1}><img className="pt-2" src={TelephoneIcon} alt="" /></Col>
                                <Col sm={8}>
                                    <div className="profile-value mb-2">0812-8623-8911</div>
                                    <div className="profile-property">Mobile Phone</div>
                                </Col>
                            </div>
                            <div className="d-flex">
                                <Col sm={1}><img className="pt-2" src={AddressIcon} alt="" /></Col>
                                <Col sm={8}>
                                    <div className="profile-value mb-2">Perumahan Permata Bintaro Residence C-3</div>
                                    <div className="profile-property">Address</div>
                                </Col>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div><img className="profile-img-big mb-3" src={ProfileImgBig} alt="" /></div>
                            <div><Button className="btn-edit-profile">Edit Profile</Button></div>
                        </Col>
                    </div>
                    <div className="profile-title mb-5">My List Book</div>
                    <div><MyBookList/></div>
                </Col>
            </Row>
        </Container>  
        </div>
    )
}

export default UserProfile;