import React, { useState, useEffect } from 'react';
import '../../assets/style/App.css';

import { Link } from 'react-router-dom';

import apiService from '../../services/';
import Journey from '../../components/journey';
import plane from '../../assets/icons/paper-plane.svg';
import playCircle from '../../assets/icons/play-circle.svg';
import pen from '../../assets/icons/pen.svg';
import bed from '../../assets/icons/bed.svg';
import check from '../../assets/icons/check.svg';

export default function Home() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  // const history = useHistory();

  useEffect(() => {
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

  useEffect(() => {
    const filtered = data.filter((item) => item.new);
    //  {filtered}
    console.log(filtered, 'opa sera que foi?')
  }, [data])

  function handleClick(name) {
    const newData = filter.map((item) => {
       if (item.name === name) {
        return {...item, filtro:!item.new}
      } else {
        return item
      }
    });
    console.log(name, newData);
    // setFilter(newFilter);
    setData(newData);
  }


  return (
    <>
      <div className="grid-container">

        <div className="menu">
          {/* <Journey/> */}
          <div className='activity'>
            <div className='activity-label'>
              <p>Jornadas</p>
            </div>

            <div className='activity-sublabel'>
              {filter.map((items) => {
                return (
                  <div key={items.id}>
                      <a href='#' onClick={() => handleClick(items.name)}> {items.name} <button>{items.quantity}</button></a>
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
          { data.map((items) => {

              if(items.status === 1 ){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table svg'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table svg'>
                    <img src={plane} height={20} width={20}/><p>Em Execução</p>
                  </div>
                </div>
                )
              }
              if(items.status === 2){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table svg'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table svg'>
                    <img src={playCircle} height={20} width={20}/><p>Ativa</p>
                  </div>
                </div>
                )
              }
              if(items.status === 3){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table svg'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table svg'>
                    <img src={pen} height={20} width={20}/><p>Configurando</p>
                  </div>
                </div>
                )
              }
              if(items.status === 4){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table svg'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table svg'>
                    <img src={bed} height={20} width={20}/><p>Ociosa</p>
                  </div>
                </div>
                )
              }
              if(items.status === 5){
                return (
                  <div key={items.id} className='table'>
                  <div className='text-table svg'>
                    <p>{items.name}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.recipients}</p>
                  </div>
                  <div className='text-table svg'>
                    <p>{items.success}</p>
                  </div>
                  <div className='text-table svg'>
                    <img src={check} height={20} width={20}/><p>Concluido</p>
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


