import React, { useContext } from 'react';

import LogoutIcon from '../assets/icon/logout.png';

import { UserContext } from '../context/userContext';

export default function Logout() {
    const [_, dispatch] = useContext(UserContext);

    const handleLogout = () => {
        dispatch({
          type: 'LOGOUT',
        });
      };

    return (
        // <div className="mt-5"><span className="font-left"><img className="me-3 align-top" src={LogoutIcon} alt="" />Logout</span></div>
        <div className="mt-5"><span onClick={handleLogout} className="font-left cursor-link"><img className="me-3 align-top" src={LogoutIcon} alt="" />Logout</span></div>
    )
}
