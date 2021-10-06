import React, { useState } from 'react';
import '../../index.css';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cssModules from './ModalAfterSubscribe.module.css';

function TestModal(props) {
    console.log(props);
    return (
        <Modal 
            size="lg"
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Body>...</Modal.Body>
        </Modal>
    
    )
}

export default TestModal;