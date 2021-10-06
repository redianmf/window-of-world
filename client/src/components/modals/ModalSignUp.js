import React, { useState } from 'react';
import '../../index.css';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function ModalSignUp(props) {
    // Switch Modal
    const {setModalShowIn, setModalShowUp} = props;

    const switchLogin = (event) => {
        setModalShowIn(true)
        setModalShowUp(false)
      }

    // Using state to get form value
    const [signupState, setSignupState] = useState({
        email: '',
        password: '',
        fullname: '',
        });
    
    const handleOnChange = (e) => {
    setSignupState({
        ...signupState,
        [e.target.name]: e.target.value,
    });
    };
    
    // Action on submit form
    let history = useHistory();
    const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    if(!signupState.email || !signupState.password || !signupState.fullname) {
        alert("Please insert all fields")
        } else {
            history.push("/")
        }
    };

    return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body className="show-grid">
      <Form>
        <Form.Group className="modal-title">
        Sign Up
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Control 
                onChange={handleOnChange}
                value={signupState.email}
                name="email" 
                className="input-field" 
                type="email" 
                placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Control 
                onChange={handleOnChange}
                value={signupState.password}
                name="password"  
                className="input-field" 
                type="password" 
                placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="fullname">
            <Form.Control 
                onChange={handleOnChange}
                value={signupState.fullname}
                name="fullname"  
                className="input-field" 
                type="text" 
                placeholder="Full Name" />
        </Form.Group>

        <Button className="btn-modal" type="submit" onClick={handleOnSubmit}>
            Sign Up
        </Button>
        <Form.Group className="text-center mb-3">
        Already have an account? Click <span onClick={switchLogin} className="cursor-link"><strong>Here</strong></span>
        </Form.Group>
    </Form>
      </Modal.Body>
    </Modal>
    )
}

export default ModalSignUp;