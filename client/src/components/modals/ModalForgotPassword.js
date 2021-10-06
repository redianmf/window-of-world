import React, { useState } from 'react';
import '../../index.css';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import ModalSignUp from './ModalSignUp';

function ModalForgotPassword(props) {
    // Switch Modal
    const {setModalShowIn, setModalShowForget} = props;

    const switchLogin = (event) => {
        setModalShowForget(false)
        setModalShowIn(true)
    }

    // Using state to get form value
    const [forgotState, setForgotState] = useState({
    email: '',
    });

    const handleOnChange = (e) => {
    setForgotState({
        ...forgotState,
        [e.target.name]: e.target.value,
    });
    };

    // Action on submit form
    const handleOnSubmit = (e) => {
    e.preventDefault();
    //print state value with console.log here
    console.log(forgotState);
    };


    return (
    <>    
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body className="show-grid">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="modal-title">
        Reset Password
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Control 
                onChange={handleOnChange}
                value={forgotState.email}
                name="email" 
                className="input-field" 
                type="email" 
                placeholder="Email" />
        </Form.Group>

        {/* <Link to="/home"> */}
            <Button className="btn-modal" type="submit">Send Reset Link</Button>
        {/* </Link> */}
        
        <Form.Group className="text-center mb-3">
        Already remember your password? Click <span onClick={switchLogin} className="cursor-link"><strong>Here</strong></span>
        </Form.Group>
    </Form>
      </Modal.Body>
    </Modal>
    </>
    )
}

export default ModalForgotPassword;