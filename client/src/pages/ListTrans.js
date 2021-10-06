import React from 'react';
import '../index.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import WowLogo from '../assets/images/wow_logo.png';
import AdminImg from '../assets/images/profile-admin.png';

import TransList from '../components/TransList';
import AdminHeader from '../components/AdminHeader.js';


function ListTrans() {
    return (
        <div className="body-afterLogin ps-5 pe-5 vh-100">
            <Container fluid>
                <AdminHeader />
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <TransList />
                    </Col>
                    <Col sm={1}></Col>                         
                </Row>
            </Container>
        </div>
    )
}


export default ListTrans;