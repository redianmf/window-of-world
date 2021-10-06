import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Logo from '../assets/images/wow_logo.png';
import ProfileImg from '../assets/icon/profile.png';
import { UserContext } from '../context/userContext';


export default function LeftPanel() {
    const [state, dispatch] = useContext(UserContext);
    return (
        <>
            <Link to="/home"><div className="d-flex justify-content-center"><img className="logo-small" src={Logo} alt="" /></div></Link>
            <div className="d-flex justify-content-center"><img className="profile-img" src={ProfileImg} alt="" /></div>
            <div className="d-flex justify-content-center profile-name">{state.user.email}</div>
            <div className="d-flex justify-content-center profile-status">Not Subscribed Yet </div><hr />
            
        </>
    )
}
