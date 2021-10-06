import React from 'react';


import { Container, Row, Col, Table } from 'react-bootstrap';

import transData from '../data/TransData';
import DropDownAction from './dropDowns/DropDownAction';

export default function TransList() {
    return (
        <div className="mb-5">
            <Row>
            <Table striped hover>
                <thead>
                    <tr>
                        <th className="text-center">No</th>
                        <th>Users</th>
                        <th>Bukti Transfer</th>
                        <th>Remaining Active</th>
                        <th>Status User</th>
                        <th>Status Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transData.map((data, index) => (
                        <tr className="align-middle table-content">
                            <td className="text-center">{data.id}</td>
                            <td>{data.user}</td>
                            <td>{data.transferFile}</td>
                            <td>{data.activePeriod}/Hari</td>
                            <td>{data.userStatus=="Active"? <span className="text-success">{data.userStatus}</span> : <span className="text-danger">{data.userStatus}</span>}</td>
                            <td>{data.paymentStatus=="Approve"? <span className="text-success">{data.paymentStatus}</span> : data.paymentStatus=="Cancel"?<span className="text-danger">{data.paymentStatus}</span> : <span className="text-warning">{data.paymentStatus}</span> }</td>
                            <td><DropDownAction /></td>
                        </tr>
                     ))}
                </tbody>
                </Table>
            </Row>
        </div>
    )
}
