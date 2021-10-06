import React from 'react';
import '../../index.css';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cssModules from './ModalAfterSubscribe.module.css';

function ModalAfterSubscribe(props) {
    return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" className={cssModules['modal-content', 'modal-text']}>
      <Modal.Body >
        <div >
        Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you
        </div>
      </Modal.Body>
    </Modal>
    )
}

export default ModalAfterSubscribe;