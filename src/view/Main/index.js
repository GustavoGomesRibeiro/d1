import React, { useState, useEffect } from 'react';
import '../../assets/style/App.css';

import apiService from '../../services/';


export default function Home() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    async function loadResults() {
      const response = await apiService.get('/journey')

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
                    <a href='#'>{filters.name} <button>{filters.quantity}</button></a>
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
                    <p>Enviando</p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  );
}


