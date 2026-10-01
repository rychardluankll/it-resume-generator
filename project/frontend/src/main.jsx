import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalContextProvider from './contexts/GlobalContexts.jsx';
import AcessContextProvider from './contexts/AcessContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GlobalContextProvider>
      <AcessContextProvider>
        <App />
      </AcessContextProvider>
      </GlobalContextProvider>
  </StrictMode>
)
