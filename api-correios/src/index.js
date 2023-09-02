import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom' instead of 'react-dom/client'
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DadosUsuario from './components/dados-usuario/Dados-usuario';
import DadosDestino from './components/dados-destino/Dados-destino';
import DadosPacote from './components/dados-pacote/Dados-pacote';
import ValorFinal from './components/valor-final/Valor-final';
import { DataProvider } from './components/provedor-dados/DataProvider';
import CodigoRastreio from './components/Codigo-rastreio/CodigoRastreio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/destino',
    element: <DadosDestino />
  },
  {
    path: '/pacotes',
    element: <DadosPacote />
  },
  {
    path: '/valorfinal',
    element: <ValorFinal />
  },{
    path:'/codigorastreio/:code',
    element: <CodigoRastreio/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProvider>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </DataProvider>
);
