// import libraries
import React, { useState } from 'react';
import '../index.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// import assets
import Logo from '../assets/images/wow_logo.png';
import ProfileImg from '../assets/icon/profile.png'
import UserIcon from '../assets/icon/user.png';
import SubscribeIcon from '../assets/icon/subscribe-red.png';
import LogoutIcon from '../assets/icon/logout.png';
import WowLogo from '../assets/images/wow-logo-min.png';
import Attach from '../assets/icon/attach.png';

// import components
import LeftPanel from '../components/LeftPanel';
import Logout from '../components/Logout';


function Subscribe() {
    // Using state to get form value
    const [subscribeState, setSubscribeState] = useState({
        accountNumber: '',
        imgUrl: '',
        });

    const handleOnChange = (e) => {
    setSubscribeState({
        ...subscribeState,
        [e.target.name]: e.target.value,
    });
    };

    // Action on submit form
    const handleOnSubmit = (e) => {
    e.preventDefault();
    //print state value with console.log here
    console.log(subscribeState);
    };

    return (
        <div className="body-afterLogin ps-5 pe-5 pb-1 vh-100">
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <LeftPanel />
                    <div className="mt-5 mb-5"><Link to="/profile"><span className="font-left"><img className="me-3 align-top" src={UserIcon} alt="" />Profile</span></Link></div>
                    <div className="font-left-red mb-5"><img className="me-2 align-top" src={SubscribeIcon} alt="" />Subscribe</div><hr />
                    <Logout />
                </Col>
                <Col sm={9} className="mt-5 mb-4 text-center">
                    <div className="premium-text mb-4">Premium</div>
                    <div className="text1 mb-3">Pay now and access all the latest books from <img src={WowLogo} alt="" /></div>
                    <div className="text2 mb-3"><img src={WowLogo} alt="" />: 0981312323</div>
                    <div>
                        <Form onSubmit={handleOnSubmit}>                
                            <Form.Group className="mb-3" controlId="accountNumber">
                                <Form.Control 
                                    onChange={handleOnChange}
                                    value={subscribeState.accountNumber}
                                    name="accountNumber" 
                                    className="subscribe-input" 
                                    type="number" 
                                    placeholder="Input your account number" />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="fileUpload">
                                <Form.Label className="subscribe-input-file"><span>Attach proof of transfer</span> <img className="attach-icon align-top" src={Attach} alt="" /></Form.Label>
                                <Form.Control 
                                    onChange={handleOnChange}
                                    value={subscribeState.imgUrl}
                                    name="imgUrl" 
                                    className="input-field" 
                                    type="file" 
                                    hidden="true"/>
                            </Form.Group>
                            <Button className="btn-send" type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>  
        </div>
    )
}

export default Subscribe;