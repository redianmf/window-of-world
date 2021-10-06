import React from 'react';
import '../index.css';
import { Button, Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import WowLogo from '../assets/images/wow_logo.png';
import AdminImg from '../assets/images/profile-admin.png';
import AddBookIconGrey from '../assets/icon/add-book-grey.png';
import LogoutIcon from '../assets/icon/logout-red.png';

import DropDownAdmin from './dropDowns/DropDownAdmin';

export default function AdminHeader() {
    return (
        <Row className="mb-5">
            <Col sm={1}>
                <Link to="/list-trans"><div><img className="logo-small" src={WowLogo} alt="" /></div></Link>
            </Col>
            <Col sm={10}></Col>
            <Col sm={1}>
                <div className="pt-4 pb-4">
                    <DropDownAdmin />
                </div>
            </Col>
        </Row>
    )
}
