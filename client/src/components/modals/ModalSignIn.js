import React, { useState, useContext, useEffect } from 'react';
import '../../index.css';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import {UserContext} from '../../context/userContext';

function ModalSignIn(props) {
    // Switch Modal
    const {setModalShowIn, setModalShowUp, setModalShowForget} = props;

    const switchSignup = (event) => {
        setModalShowIn(false)
        setModalShowUp(true)
    }

    const switchForgot = (event) => {
        setModalShowIn(false)
        setModalShowForget(true)
    }

    // Add global state
    const [state, dispatch] = useContext(UserContext);

    // Using state to get form value
    const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    });

    const handleOnChange = (e) => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value,      
        });
        };

    // Action on submit form
    let history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if(!loginState?.email || !loginState?.password) {
            alert("Please insert all fields")
            } else {
                const data = {
                    email: loginState?.email,
                    password: loginState?.password,
                }
        
                dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: data,
                        });
            
                console.log(data);
                history.push("/home")
            }
        
    };

    useEffect(() =>{

        console.log(state);
    },[state])


    return (
    <>    
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body className="show-grid">
      <Form>
        <Form.Group className="modal-title">
        Sign In
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Control 
                onChange={handleOnChange}
                value={loginState.email}
                name="email" 
                className="input-field" 
                type="email" 
                placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Control 
                onChange={handleOnChange}
                value={loginState.password}
                name="password"  
                className="input-field" 
                type="password" 
                placeholder="Password" />
        </Form.Group>

        
        <Button className="btn-modal" type="submit" onClick={handleOnSubmit}>Sign In</Button>
        
        
        <Form.Group className="text-center mb-1">
        Don't have an account? Click <span onClick={switchSignup} className="cursor-link"><strong>Here</strong></span>
        </Form.Group>

        <Form.Group className="text-center mb-3">
        Forgot password? Click <span onClick={switchForgot} className="cursor-link"><strong>Here</strong></span>
        </Form.Group>
    </Form>
      </Modal.Body>
    </Modal>
    </>
    )
}

export default ModalSignIn;