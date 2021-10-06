import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import cssModules from './DropDownAction.module.css';

import DropDownIcon from '../../assets/icon/dropdown.png';

export default function DropDownAction() {
    return (
        <Dropdown className={cssModules['btn-light::after']}>
            <Dropdown.Toggle className={cssModules['dropdown-toggle']} variant="light" id="dropdown-basic">
                {/* <img className="avatar-admin" src={AdminImg} alt="" /> */}
            </Dropdown.Toggle>

            <Dropdown.Menu className={cssModules['dropdown-menu']}>
                <Dropdown.Item href="#/action-1" className={cssModules['dropdown-menu-green']}>Approve</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2" className={cssModules['dropdown-menu-red']}>Cancel</Dropdown.Item>                            
            </Dropdown.Menu>
        </Dropdown>   
    )
}
