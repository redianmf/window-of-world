import React, { useState } from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import ModalBeforeSubscribe from '../components/modals/ModalBeforeSubscribe';
import ModalAfterSubscribe from '../components/modals/ModalAfterSubscribe';
import TestModal from '../components/modals/TestModal';

export default function ModalSubscribeView() {

    const [modalShowUnsubscribe, setModalShowUnsubscribe] = useState(false);
    const [modalShowSubscribe, setModalShowSubscribe] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <div>
            <Button className="me-3" onClick={() => setModalShowUnsubscribe(true)}>Before Subscribe</Button>
            <Button className="me-3" onClick={() => setModalShowSubscribe(true)}>After Subscribe</Button>
            <Button onClick={() => setLgShow(true)}>Test modal</Button>
            </div>

            <ModalBeforeSubscribe show={modalShowUnsubscribe} onHide={() => setModalShowUnsubscribe(false)} />
            <ModalAfterSubscribe show={modalShowSubscribe} onHide={() => setModalShowSubscribe(false)} />
            <TestModal show={lgShow} onHide={() => setLgShow(false)} />
        </div>
    )
}
