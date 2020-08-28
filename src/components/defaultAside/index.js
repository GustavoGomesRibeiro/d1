import React from 'react';
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

                <div className='icon-header '>
                    <ul className='icon'>
                        <li className="icons-fa tooltip ">
                            <a href='#'> <img src={chartPie}/><span className='tooltiptext'>Análises</span></a>
                        </li>
                        <li className="icons-fa tooltip">
                            <a href='#'> <img src={rocket}/><span className='tooltiptext'>Jornadas</span></a>
                        </li>
                        <li className="icons-fa tooltip">
                            <a href='#'> <img src={userFriends}/><span className='tooltiptext'>Clientes</span></a>
                        </li>
                        <li className="icons-fa tooltip">
                            <a href='#'>  <img src={cloud}/><span className='tooltiptext'>CGM Cloud</span></a>
                        </li>
                    </ul>
                </div>

                <div className='divider'/>

                <div>
                    <ul className='icon'>
                        <li className="icons-fa tooltip">
                            <a href='#'>  <img src={linkAlt}/><span className='tooltiptext'>Versão 01</span></a>
                        </li>
                    </ul>
                </div> 

                <div className='icon-footer'>
                    <ul>       
                        <li className="icons-fa tooltip">
                            <a href='#'>  <img src={gem}/><span className='tooltiptext'>Administração</span></a>
                        </li>
                        <li className="icons-fa tooltip">
                            <a href='#'>  <img src={tools}/><span className='tooltiptext'>Help Desk</span></a>
                        </li>
                        <li className="icons-fa tooltip">
                            <a href='#'>  <img src={exchangeAlt}/><span className='tooltiptext'>Trocar Conta</span></a>
                        </li>
                        <li className="icons-fa tooltip">
                            <a href='#'>  <img src={signOut}/><span className='tooltiptext'>Sair</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}