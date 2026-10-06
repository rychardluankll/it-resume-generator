    import {createContext, useState} from 'react';

    //Context responsável por controlar o acesso a rotas protegidas
    export const AcessContext = createContext();
    
    export default function AcessContextProvider({children}){
        const [acessAreasInteresse, setAcessAreasInteresse] = useState(false);
        const [acessInformacoesIniciais, setAcessInformacoesIniciais] = useState(false);
        const [acessBackendFundamentos, setAcessBackendFundamentos] = useState(false);
        const [acessFrontendFundamentos, setAcessFrontendFundamentos] = useState(false);

        return (
            <AcessContext.Provider value={{acessAreasInteresse, setAcessAreasInteresse,
             acessBackendFundamentos, setAcessBackendFundamentos, acessFrontendFundamentos, setAcessFrontendFundamentos,
              acessInformacoesIniciais, setAcessInformacoesIniciais }}>
                {children}
            </AcessContext.Provider>
        )
    }