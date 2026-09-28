import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import InformacoesIniciais from './components/InformacoesIniciais';
import AreasInteresse from './components/AreasInteresse';
import BackendFundamentos from './components/BackendFundamentos';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

    return (
        <BrowserRouter>
            <Routes>

                {/* Rotas públicas */}
                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/informacoesIniciais"
                    element={<InformacoesIniciais />}
                />

                {/* Rotas protegidas */}
                <Route element={<ProtectedRoutes condition={true} />}>

                    <Route
                        path="/backendFundamentos"
                        element={<BackendFundamentos />}
                    />
                </Route>

                   <Route element={<ProtectedRoutes condition={false} />}>

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