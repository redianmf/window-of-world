// import libraries
import React, { useState, useEffect } from 'react';
import '../index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

// import assets
import Logo from '../assets/images/wow_logo.png';
import ProfileImg from '../assets/icon/profile.png'
import UserIcon from '../assets/icon/user.png';
import SubscribeIcon from '../assets/icon/subscribe.png';
import LogoutIcon from '../assets/icon/logout.png';
import BookCover from '../assets/images/book4detail.png';
import AddList from '../assets/icon/addList.png'
import GoTo from '../assets/icon/read.png'

// import components
import LeftPanel from '../components/LeftPanel';
import ModalBeforeSubscribe from '../components/modals/ModalBeforeSubscribe';
import bookListData from '../data/BookListData';
import Logout from '../components/Logout';


function DetailBook() {
    const [modalShowUnsubscribe, setModalShowUnsubscribe] = useState(false);
    let {id} = useParams();

    let book = bookListData.find(function (element) {
        return element.id == id;
    });
    
    return (
        <div className="body-afterLogin ps-5 pe-5">
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <LeftPanel />
                    <div className="mt-5 mb-5"><Link to="/profile"><span className="font-left"><img className="me-3 align-top" src={UserIcon} alt="" />Profile</span></Link></div>
                    <div className="mb-5"><Link to="/subscribe"><span className="font-left"><img className="me-2 align-top" src={SubscribeIcon} alt="" />Subscribe</span></Link></div><hr />
                    <Logout />
                </Col>
                <Col sm={9} className="mt-5 mb-5">
                    <div className="d-flex">
                        <Col md={6}><div className="d-flex justify-content-center mt-5"><img className="detail-book-img" src={process.env.PUBLIC_URL + book.image} alt="" /></div></Col>
                        <Col md={6}>
                            <div className="mt-5">
                                <div className="detail-book-title">{book.title}</div>
                                <div className="detail-book-author">{book.author}</div>
                                <div>
                                    <p className="detail-book-details mt-5">Publication Date</p>
                                    <p className="detail-book-details-content">April 2020</p>
                                </div>
                                <div>
                                    <p className="detail-book-details mt-5">Pages</p>
                                    <p className="detail-book-details-content">436</p>
                                </div>
                                <div>
                                    <p className="detail-book-details-red mt-5">ISBN</p>
                                    <p className="detail-book-details-content">9781789807554</p>
                                </div>
                            </div>
                        </Col>
                    </div>
                    <div className="mt-5 ms-4">
                        <div className="detail-book-about mb-4">About This Book</div>
                        <div className="detail-book-paragraph mb-4">In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.</div>
                        <div className="detail-book-paragraph mb-4">Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.</div>
                        <div className="detail-book-paragraph">Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.</div>
                    </div>
                    <div className="text-end mt-5">
                        <Link to="/subscribe"><Button className="btn-addList">Add My List <img className="ms-3 align-top" src={AddList} alt="" /></Button></Link>
                        <Button onClick={() => setModalShowUnsubscribe(true)} className="ms-3 btn-readBook">Read Book <img className="ms-2 align-baseline" src={GoTo} alt="" /></Button>
                    </div>
                </Col>
            </Row>
        </Container>  
        <ModalBeforeSubscribe show={modalShowUnsubscribe} onHide={() => setModalShowUnsubscribe(false)} />
        </div>
    )
}

export default DetailBook;