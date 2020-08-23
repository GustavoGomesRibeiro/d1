import React, { useState, useEffect } from 'react';
import '../../assets/style/App.css';

import apiService from '../../services/';
import { Link } from 'react-router-dom';


export default function Home() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  // const history = useHistory();

  useEffect((event) => {
    async function loadResults() {
      // const id = event
      const response = await apiService.get(`/journey`)

      setData(response.data)
    }
    loadResults();
  }, [])

  useEffect(() => {
    async function loadFilters() {
      const response = await apiService.get('/filter')
      setFilter(response.data)
    }
    loadFilters();
  }, [])

  function handleClick(e) {
    e.preventDefault();
    // if (filters.name === 'Em Execução') {
    //   return <Redirect to="/Execution" />
    // }
    console.log('O link foi clicado.');
  }


  return (
    <>
      <div className="grid-container">

        <div className="menu">
          <div className='activity'>
            <div className='activity-label'>
              <p>Jornadas</p>
            </div>

            <div className='activity-sublabel'>
              {filter.map((filters) => {
                return (
                  <div key={filters.id}>
                    <a href='#' onClick={handleClick}>{filters.name} <button>{filters.quantity}</button></a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="header">
          <div className='table-header'>
            <div className='text-header'>
              <p>Nome</p>
            </div>
            <div className='text-header'>
              <p>Destinatários</p>
            </div>
            <div className='text-header'>
              <p>Sucesso</p>
            </div>
            <div className='text-header'>
              <p>Status</p>
            </div>
          </div>
        </div>

        <div className="main">
          {
            data.map((items) => {
              
              {/* const valores = {
                teste:'Em execução',
                teste:'Ativa',
                teste:'Configurando',
                teste:'Ociosa',
                teste:'Concluido'
              } */}

              if(items.status === 1 ){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table'>
                   <img src='../../assets/icons/paper-plane.svg'/><p>Em Execução</p>
                  </div>
                </div>
                )
              }
              if(items.status === 2){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table'>
                  <img src='../../assets/icons/play-circle.svg'/><p>Ativa</p>
                  </div>
                </div>
                )
              }
              if(items.status === 3){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table'>
                  <img src='../../assets/icons/pen.svg'/><p>Configurando</p>
                  </div>
                </div>
                )
              }
              if(items.status === 4){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table'>
                  <img src='../../assets/icons/bed.svg'/><p>Ociosa</p>
                  </div>
                </div>
                )
              }
              if(items.status === 5){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table'>
                  <img src='../../assets/icons/check.svg'/><p>Concluido</p>
                  </div>
                </div>
                )
              }
            })
          }
        </div>

      </div>
    </>
  );
}


