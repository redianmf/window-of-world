import React from 'react';
import '../../index.css';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cssModules from './ModalBeforeSubscribe.module.css';

function ModalBeforeSubscribe(props) {
    return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" className={cssModules['modal-content', 'modal-text']}>
      <Modal.Body >
        <div >
        please make a payment to read the latest books
        </div>
      </Modal.Body>
    </Modal>
    )
}

export default ModalBeforeSubscribe;