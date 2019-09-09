import React from 'react';
import './main.scss';

import { ScreenSearchGiphy } from './scripts/components/ScreenSearchGiphy/ScreenSearchGiphy';

// Não foi necessario criar um componentes de rotas visto que 
//  o sistema só tem uma tela, no caso de haver mais rotas, 
//  seria necessario trocar a renderização do componente da 
//  tela pelo componente de rotas
export const App = ()=> {
  return (
    <div className="app">
      <ScreenSearchGiphy/>
    </div>
  );
}
