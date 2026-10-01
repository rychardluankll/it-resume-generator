import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useContext} from 'react'

import Home from './components/Home';
import InformacoesIniciais from './components/InformacoesIniciais';
import AreasInteresse from './components/AreasInteresse';
import BackendFundamentos from './components/BackendFundamentos';
import ProtectedRoutes from './components/ProtectedRoutes';
import {AcessContext} from './contexts/AcessContext';

function App() {
    //Aqui o acesso as rotas é protegido pelo consumo do contexto
    //De acordo com a interação com o sistema, o context é alterado ou não
    const {acessAreasInteresse, acessBackendFundamentos, acessInformacoesIniciais } = useContext(AcessContext);

    return (
       <BrowserRouter>
            <Routes>

                {/* Rotas públicas */}
                <Route
                    path="/home"
                    element={<Home />}
                />

                {/* Rotas protegidas */}
                <Route element={<ProtectedRoutes condition={acessInformacoesIniciais} />}>
                <Route path="/informacoesIniciais" element={<InformacoesIniciais />} />
                </Route>

                <Route element={<ProtectedRoutes condition={acessBackendFundamentos} />}>

                    <Route
                        path="/backendFundamentos"
                        element={<BackendFundamentos />}
                    />
                </Route>

                   <Route element={<ProtectedRoutes condition={acessAreasInteresse} />}>

                    <Route
                        path="/areasInteresse"
                        element={<AreasInteresse />}
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    ); 
}

export default App;