import React from 'react';
import { FaChartPie, FaRocket, FaUserFriends, FaCloud, FaExternalLinkAlt, FaGem, FaTools, FaExchangeAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/images/logotipo.png';

export default function DefaultAside() {

    return (
        <>
            <div className='container-aside'>

                <div className='logo'>
                    <img src={logo} />
                </div>

                <div className='icon-header'>
                    {/* <div className=''> */}
                    <ul className='icon'>
                        <li className="icons-fa">
                            <a href='/'> <FaChartPie size='20' color='#fff' /></a>
                        </li>
                        <li className="icons-fa">
                            <a href='/'> <FaRocket size='20' color='#fff' /></a>
                        </li>
                        <li className="icons-fa">
                            <a href='/'><FaUserFriends size='20' color='#fff' /></a>
                        </li>
                        <li className="icons-fa">
                            <a href='/'> <FaCloud size='20' color='#fff' /></a>
                        </li>
                    </ul>
                </div>

                <div className='divider'/>

                <div>
                    <ul className='icon'>
                        <li className="icons-fa">
                            <a href='/'> <FaExternalLinkAlt size='20' color='#fff' /></a>
                        </li>
                    </ul>
                </div> 

                <div className='icon-footer'>
                    <ul>       
                        <li className="icons-fa">
                            <a href='/'> <FaGem size='20' color='#fff' /></a>
                        </li>
                        <li className="icons-fa">
                            <a href='/'> <FaTools size='20' color='#fff' /></a>
                        </li>
                        <li className="icons-fa">
                            <a href='/'> <FaExchangeAlt size='20' color='#fff' /></a>
                        </li>
                        <li className="icons-fa">
                            <a href='/'> <FaSignOutAlt size='20' color='#fff' /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}