import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useContext} from 'react'

import Home from './components/Home';
import InformacoesIniciais from './components/InformacoesIniciais';
import AreasInteresse from './components/AreasInteresse';
import BackendFundamentos from './components/BackendFundamentos';
import FrontendFundamentos from './components/FrontendFundamentos';
import AndroidFundamentos from './components/AndroidFundamentos';
import DevopsFundamentos from './components/DevopsFundamentos';
import CyberSecurityFundamentos from './components/CyberSecurityFundamentos';
import DataAnalystFundamentos from './components/DataAnalystFundamentos';
import ProtectedRoutes from './components/ProtectedRoutes';
import {AcessContext} from './contexts/AcessContext';

function App() {
    //Aqui o acesso as rotas é protegido pelo consumo do contexto
    //De acordo com a interação com o sistema, o context é alterado ou não
    const {
        acessAreasInteresse,
        acessBackendFundamentos,
        acessFrontendFundamentos,
        acessAndroidFundamentos,
        acessDevopsFundamentos,
        acessCyberSecurityFundamentos,
        acessDataAnalystFundamentos,
        acessInformacoesIniciais
    } = useContext(AcessContext);

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
                <Route element={<ProtectedRoutes condition={acessFrontendFundamentos} />}>
            
                <Route
                    path="/frontendFundamentos"
                    element={<FrontendFundamentos/>}
                />

                </Route>

                <Route element={<ProtectedRoutes condition={acessAndroidFundamentos} />}>
                    <Route
                        path="/androidFundamentos"
                        element={<AndroidFundamentos />}
                    />
                </Route>

                <Route element={<ProtectedRoutes condition={acessDevopsFundamentos} />}>
                    <Route
                        path="/devopsFundamentos"
                        element={<DevopsFundamentos />}
                    />
                </Route>

                <Route element={<ProtectedRoutes condition={acessCyberSecurityFundamentos} />}>
                    <Route
                        path="/cyberSecurityFundamentos"
                        element={<CyberSecurityFundamentos />}
                    />
                </Route>

                <Route element={<ProtectedRoutes condition={acessDataAnalystFundamentos} />}>
                    <Route
                        path="/dataAnalystFundamentos"
                        element={<DataAnalystFundamentos />}
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    ); 
}

export default App;