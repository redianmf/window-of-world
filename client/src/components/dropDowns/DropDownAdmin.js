import React from 'react';
import '../../index.css';
import cssModules from './DropDownAdmin.module.css';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import AdminImg from '../../assets/images/profile-admin.png';
import AddBookIconGrey from '../../assets/icon/add-book-grey.png';
import LogoutIcon from '../../assets/icon/logout-red.png';

export default function DropDownAdmin() {
    return (
        <Dropdown className={cssModules['btn-light::after']}>
            <Dropdown.Toggle className={cssModules['dropdown-toggle']} variant="light" id="dropdown-basic">
                <img className="avatar-admin" src={AdminImg} alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu className={cssModules['dropdown-menu']}>
                <Link to="add-book"><Dropdown.Item href="#/action-1" className={cssModules['dropdown-admin']}><img className={cssModules['drop-down-img']} src={AddBookIconGrey} alt="" /><span className="text-decoration-none"> Add Book</span></Dropdown.Item></Link>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2" className={cssModules['dropdown-admin']}><img className={cssModules['drop-down-img']} src={LogoutIcon} alt="" /> Logout</Dropdown.Item>                            
            </Dropdown.Menu>
        </Dropdown>   
    )
}
