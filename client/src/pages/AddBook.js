import React, {useState} from 'react';
import '../index.css';
import { Button, Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import WowLogo from '../assets/images/wow_logo.png';
import AttachFile from '../assets/icon/attach-dark.png';
import AddBookIcon from '../assets/icon/add-book.png';

import AdminHeader from '../components/AdminHeader';



function AddBook() {

    // Using state to get form value
    const [bookState, setBookState] = useState({
        title: '',
        publicationDate: '',
        pages: '',
        author: '',
        isbn: '',
        about: '',
        bookFile: '',
        });

    const handleOnChange = (e) => {
        setBookState({
        ...bookState,
        [e.target.name]: e.target.value,
    });
    };

    // Action on submit form
    const handleOnSubmit = (e) => {
    e.preventDefault();
    //print state value with console.log here
    console.log(bookState);
    };

    return (
        <div className="body-afterLogin ps-5 pe-5">
            <Container fluid>
                <AdminHeader />
                
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <div className="add-book-title mb-5">Add Book</div>
                        <div>
                            <Form onSubmit={handleOnSubmit}>            
                                <Form.Group className="mb-3" controlId="formBookTitle">
                                    <Form.Control 
                                        onChange={handleOnChange}
                                        value={bookState.title}
                                        name="title" 
                                        className="book-input-field" 
                                        type="text" 
                                        placeholder="Title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBookDate">
                                    <Form.Control 
                                        onChange={handleOnChange}
                                        value={bookState.publicationDate}
                                        name="publicationDate" 
                                        className="book-input-field" 
                                        type="text" 
                                        placeholder="Publication Date" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBookPages">
                                    <Form.Control 
                                        onChange={handleOnChange}
                                        value={bookState.pages}
                                        name="pages" 
                                        className="book-input-field" 
                                        type="text" 
                                        placeholder="Pages" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBookAuthor">
                                    <Form.Control 
                                        onChange={handleOnChange}
                                        value={bookState.author}
                                        name="author" 
                                        className="book-input-field" 
                                        type="text" 
                                        placeholder="Author" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBookISBN">
                                    <Form.Control 
                                        onChange={handleOnChange}
                                        value={bookState.isbn}
                                        name="isbn" 
                                        className="book-input-field" 
                                        type="text" 
                                        placeholder="ISBN" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBookAbout">
                                    <Form.Control 
                                        onChange={handleOnChange}
                                        value={bookState.about}
                                        name="about" 
                                        className="book-input-textarea" 
                                        as="textarea" 
                                        placeholder="About This Book" />
                                </Form.Group>

                                <Form.Group className="mb-5" controlId="fileUpload">
                                    <Form.Label className="book-input-file"><span>Attach book file</span> <img className="ms-4 align-top" src={AttachFile} alt="" /></Form.Label>
                                    <Form.Control 
                                        onChange={handleOnChange}
                                        value={bookState.bookFile}
                                        name="bookFile" 
                                        className="input-field" 
                                        type="file" 
                                        hidden="true"/>
                                </Form.Group>

                                <div className="text-end">
                                    <Button className="btn-add-book mb-5 " type="submit">
                                        Add Book <img className="ms-2 align-top" src={AddBookIcon} alt="" />
                                    </Button>  
                                </div>                      
                            </Form>
                        </div>
                    </Col>
                    <Col sm={1}></Col>                         
                </Row>
            </Container>
        </div>
    )
}


export default AddBook;