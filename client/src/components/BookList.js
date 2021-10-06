import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

import { Container, Row, Col } from 'react-bootstrap';

import bookListData from '../data/BookListData';

export default function BookList() {
    return (
        <>
        <Row>
            {bookListData.map((data, index) => (
            <Col md={3} key={index}>
                <div><Link to={`/book-details/${data.id}`}><img className="book-cover cursor-link" src={process.env.PUBLIC_URL + data.image} alt="" /></Link></div>
                <div className="book-title mt-3 mb-3">{data.title}</div>
                <div className="book-author mb-5">{data.author}</div>
            </Col>
        ))}
      </Row>
      </>
    )
}
