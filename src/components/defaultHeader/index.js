import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import logo from '../../assets/images/acme-logo.png';
import Modal from 'react-modal';


Modal.setAppElement('#root')
const DefaultHeader = () => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <header>
                <nav className='container-header'>
                    <div className='logo-header'>
                        <button className='user tooltip-header'><span className='tooltiptext-header'></span> <p>A</p></button>
                        <img src={logo} />
                    </div>
                    <div className='container-components'>

                        <form >
                            <label>
                                <input type="text" placeholder='Buscar' className='search' />
                            </label>
                        </form>

                        <button className='new-journey' onClick={() => setModalOpen(true)} >
                            <div className='icon-plus'>
                                <FaPlus color='#fff' />
                            </div>
                            <div className='text-newjourney'>
                                <p>Nova Jornada</p>
                            </div>
                        </button>
                        <Modal className='modal' isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}
                            style={{
                                overlay: {
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(26, 23, 49, 0.75)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                content: {
                                    top: '40px',
                                    border: '1px solid #ccc',
                                    background: '#fff',
                                    overflow: 'auto',
                                    WebkitOverflowScrolling: 'touch',
                                    borderRadius: '10px',
                                    outline: 'none',
                                    padding: '20px',
                                    width: '382px',
                                    height: '215px'
                                }
                            }}>
                            <h4>Nova Jornada</h4>
                            <div className='divider-modal'/>

                            <div className='description-modal'>
                                <p className='name-journey'>Dê um nome para essa jornada</p>
                                    <input className='search' type='text'></input>
                                <p className='text-modal'>Você poderá alterar essa informação depois</p>
                            </div>
                            <div className='button-modal'>
                                <span className='continue'>Continuar</span>
                                <span className='cancel'onClick={() => setModalOpen(false)}>Cancelar</span>
                            </div>
                        </Modal>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default DefaultHeader;