import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import myBook from '../data/MyBook';

export default function MyBookList() {
    return (
        <Row>
            {myBook.map((data, index) => (
            <Col md={3} key={index}>
                <div><Link to="/my-book-details"><img className="book-cover" src={process.env.PUBLIC_URL + data.image} alt="" /></Link></div>
                <div className="book-title mt-3 mb-3">{data.title}</div>
                <div className="book-author">{data.author}</div>
            </Col>
        ))}
      </Row>
    )
}
