import React, { useState, useEffect } from 'react';
import '../../assets/style/App.css';
import apiService from '../../services/';


import table from '../../assets/icons/table.svg';
import plane from '../../assets/icons/paper-plane.svg';
import playCircle from '../../assets/icons/play-circle.svg';
import pen from '../../assets/icons/pen.svg';
import bed from '../../assets/icons/bed.svg';
import check from '../../assets/icons/check.svg';

export default function Home() {

  const [initialData, setInitialData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    async function loadResults() {
      const response = await apiService.get(`/journey`);
      setInitialData(response.data);
      setFiltered(response.data);
    }
    loadResults();

    async function loadFilters() {
      const response = await apiService.get('/filter');
      setFilter(response.data);
    }
    loadFilters();
  }, []);

function filtro(filterId) {
    if(filterId == 0) {
     return setFiltered(initialData);
    }
    const id = filterId; 
    apiService
        .get(`/journey/${id}`)
        .then(response => {
            const filtered = response.data;
            console.log("filtros", filtered);
            setFiltered(filtered);
        });
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
              {filter.map((items) => {
                return (
                  <div key={items.id}>
                     <a onClick={() => filtro(items.id)}>
                      {items.id === 0 ? [<img src={table} height={20} width={20}/>,'Todos'] : ''} 
                      {items.id === 1 ? [<img src={plane} height={20} width={20}/>,'Em execução'] : ''} 
                      {items.id === 2 ? [<img src={playCircle} height={20} width={20}/>,'Ativo'] : ''} 
                      {items.id === 3 ? [<img src={pen} height={20} width={20}/>,'Configurando'] : ''} 
                      {items.id === 4 ? [<img src={bed} height={20} width={20}/>,'Ociosa'] : ''} 
                      {items.id === 5 ? [<img src={check} height={20} width={20}/>,'Concluido'] : ''} 
                        <button> {items.quantity}</button>
                      </a>
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
              {filtered.map((items) => {
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
                      <p>
                        {items.status === 1 ? [<img src={plane} height={20} width={20}/>,'Em execução'] : ''} 
                        {items.status === 2 ? [<img src={playCircle} height={20} width={20}/>, 'Ativo'] : ''}
                        {items.status === 3 ? [<img src={pen} height={20} width={20}/>, 'Configurando'] : ''}
                        {items.status === 4 ? [<img src={bed} height={20} width={20}/>, 'Ociosa'] : ''}
                        {items.status === 5 ? [<img src={check} height={20} width={20}/>, 'Concluido'] : ''}
                      </p>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
    </>
  );
}


