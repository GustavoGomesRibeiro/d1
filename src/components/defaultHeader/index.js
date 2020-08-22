import React, {useState} from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

import logo from '../../assets/images/acme-logo.png';
// import { useHistory } from 'react-router-dom';
// import logo from '../Style/img/logo.png';

// import '../Style/css/header.css';


const DefaultHeader = () => {

    // const userProfile = localStorage.getItem('username');
    // const [icon, setIcon] = 'FaSearch';

    return (
        <>
            <header>
                <nav className='container-header'>
                    <div className='logo-header'>
                        <button className='user'> <p>A</p></button>
                        <img src={logo} />
                    </div>
                    <div className='container-components'>

                        {/* <input type='text' placeholder='Buscar' className='search'> <FaSearch color='#117EFF'/></input> */}
                        <form >
                            <label>
                                <input type="text" placeholder='Buscar' className='search'/>
                            </label>
                        </form>
                        
                        <button className='new-journey'>
                            <div className='icon-plus'>
                                <FaPlus color='#fff' />
                            </div>
                            <div className='text-newjourney'>
                                <p>Nova Jornada</p>
                            </div>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default DefaultHeader;