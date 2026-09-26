import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import InformacoesIniciais from './components/InformacoesIniciais';
import AreasInteresse from './components/AreasInteresse';
import BackendFundamentos from './components/BackendFundamentos';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/informacoesIniciais" element={<InformacoesIniciais/>}></Route>
        <Route path="/areasInteresse" element={<AreasInteresse/>}></Route>
        <Route path="/areasInteresse" element={<BackendFundamentos/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
