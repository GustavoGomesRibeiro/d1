import React from 'react';
import { FaChartPie, FaRocket, FaUserFriends, FaCloud, FaExternalLinkAlt, FaGem, FaTools, FaExchangeAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/images/logotipo-branco.png';

import  chartPie  from '../../assets/icons/chart-pie.svg';
import  rocket  from '../../assets/icons/rocket.svg';
import  userFriends  from '../../assets/icons/user-friends.svg';
import  cloud  from '../../assets/icons/ccm-cloud.svg';
import  linkAlt  from '../../assets/icons/external-link-alt-solid.svg';
import  gem  from '../../assets/icons/gem.svg';
import  tools  from '../../assets/icons/tools.svg';
import  exchangeAlt  from '../../assets/icons/exchange-alt.svg';
import  signOut  from '../../assets/icons/sign-out-alt.svg';

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
                            <a href='#'>  <img src={chartPie}/></a>
                        </li>
                        <li className="icons-fa">
                            <a href='#'> <img src={rocket}/></a>
                        </li>
                        <li className="icons-fa">
                            <a href='#'> <img src={userFriends}/></a>
                        </li>
                        <li className="icons-fa">
                            <a href='#'>  <img src={cloud}/></a>
                        </li>
                    </ul>
                </div>

                <div className='divider'/>

                <div>
                    <ul className='icon'>
                        <li className="icons-fa">
                            <a href='#'>  <img src={linkAlt}/></a>
                        </li>
                    </ul>
                </div> 

                <div className='icon-footer'>
                    <ul>       
                        <li className="icons-fa">
                            <a href='#'>  <img src={gem}/></a>
                        </li>
                        <li className="icons-fa">
                            <a href='#'>  <img src={tools}/></a>
                        </li>
                        <li className="icons-fa">
                            <a href='#'>  <img src={exchangeAlt}/></a>
                        </li>
                        <li className="icons-fa">
                            <a href='#'>  <img src={signOut}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}