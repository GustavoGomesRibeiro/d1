import React, { useState, useEffect } from 'react';
import '../../assets/style/App.css';

// import apiService from '../../services/';
// import { Link } from 'react-router-dom';

import table from '../../assets/icons/table.svg';
import plane from '../../assets/icons/paper-plane.svg';
import playCircle from '../../assets/icons/play-circle.svg';
import pen from '../../assets/icons/pen.svg';
import bed from '../../assets/icons/bed.svg';
import check from '../../assets/icons/check.svg';

export default function Journey() {

  return (
    <>
          <div className='activity'>
            <div className='activity-label'>
              <p>Jornadas</p>
            </div>

            <div className='activity-sublabel'>
                  <div>
                    <img src={table} width={20} height={20} /><a href='#'> Todos <button>8</button></a>
                  </div>
                  <div>
                    <img src={plane} width={20} height={20} /> <a href='#'> Em Execução <button>2</button></a>
                  </div>
                  <div>
                     <img src={playCircle} width={20} height={20} /> <a href='#'> Ativa <button>1</button></a>
                  </div>
                  <div>
                    <img src={pen} width={20} height={20} /> <a href='#'> Configurando <button>3</button></a>
                  </div>
                  <div>
                    <img src={bed} width={20} height={20} /> <a href='#'> Ociosa <button>1</button></a>
                  </div>
                  <div>
                     <img src={check} width={20} height={20} /> <a href='#'> Concluida <button>1</button></a>
                  </div>
            </div>
          </div>
    </>
  );
}


