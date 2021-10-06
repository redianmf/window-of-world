import React, { useState } from 'react';
import '../index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/wow_logo.png';
import ModalSignIn from '../components/modals/ModalSignIn';
import ModalSignUp from '../components/modals/ModalSignUp';
import ModalForgotPassword from '../components/modals/ModalForgotPassword';

export default function LandingPage() {
    const [modalShowIn, setModalShowIn] = useState(false);
    const [modalShowUp, setModalShowUp] = useState(false);
    const [modalShowForget, setModalShowForget] = useState(false);

    return (
        <div className="body-landing-page">
            <Container>
                <Row>
                    <Col>
                        <Row><div><img className="wow-logo" src={Logo} alt="" /></div></Row>
                        <Row><p className="landing-tagline">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p></Row>
                        <Row>
                            <Col>
                            <Button className="btn-signUp" onClick={() => setModalShowUp(true)}>Sign Up</Button>{' '}
                            <Button className="btn-signIn" onClick={() => setModalShowIn(true)}>Sign In</Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <ModalSignIn show={modalShowIn} setModalShowIn={setModalShowIn} setModalShowUp={setModalShowUp} setModalShowForget={setModalShowForget} onHide={() => setModalShowIn(false)}/>
            <ModalSignUp show={modalShowUp} setModalShowIn={setModalShowIn} setModalShowUp={setModalShowUp} onHide={() => setModalShowUp(false)}/>
            <ModalForgotPassword show={modalShowForget} setModalShowIn={setModalShowIn} setModalShowForget={setModalShowForget} onHide={() => setModalShowForget(false)}/>
        </div>
    )
}
