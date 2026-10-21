    import {createContext, useState} from 'react';

    //Context responsável por controlar o acesso a rotas protegidas
    export const AcessContext = createContext();
    
    export default function AcessContextProvider({children}){
        const [acessAreasInteresse, setAcessAreasInteresse] = useState(false);
        const [acessInformacoesIniciais, setAcessInformacoesIniciais] = useState(false);
        const [acessBackendFundamentos, setAcessBackendFundamentos] = useState(false);
        const [acessFrontendFundamentos, setAcessFrontendFundamentos] = useState(false);
        const [acessAndroidFundamentos, setAcessAndroidFundamentos] = useState(false);
        const [acessDevopsFundamentos, setAcessDevopsFundamentos] = useState(false);
        const [acessCyberSecurityFundamentos, setAcessCyberSecurityFundamentos] = useState(false);
        const [acessDataAnalystFundamentos, setAcessDataAnalystFundamentos] = useState(false);

        const [acessBackendFerramentas, setAcessBackendFerramentas] = useState(false);
        const [acessFrontendFerramentas, setAcessFrontendFerramentas] = useState(false);
        const [acessAndroidFerramentas, setAcessAndroidFerramentas] = useState(false);
        const [acessDevopsFerramentas, setAcessDevopsFerramentas] = useState(false);
        const [acessCyberSecurityFerramentas, setAcessCyberSecurityFerramentas] = useState(false);
        const [acessDataAnalystFerramentas, setAcessDataAnalystFerramentas] = useState(false);
        const [acessExperienciasProjetos, setAcessExperienciasProjetos] = useState(false);
        const [acessFormacaoCertificacoes, setAcessFormacaoCertificacoes] = useState(false);

        return (
            <AcessContext.Provider value={{
                acessAreasInteresse, setAcessAreasInteresse,
                acessBackendFundamentos, setAcessBackendFundamentos,
                acessFrontendFundamentos, setAcessFrontendFundamentos,
                acessAndroidFundamentos, setAcessAndroidFundamentos,
                acessDevopsFundamentos, setAcessDevopsFundamentos,
                acessCyberSecurityFundamentos, setAcessCyberSecurityFundamentos,
                acessDataAnalystFundamentos, setAcessDataAnalystFundamentos,
                acessBackendFerramentas, setAcessBackendFerramentas,
                acessFrontendFerramentas, setAcessFrontendFerramentas,
                acessAndroidFerramentas, setAcessAndroidFerramentas,
                acessDevopsFerramentas, setAcessDevopsFerramentas,
                acessCyberSecurityFerramentas, setAcessCyberSecurityFerramentas,
                acessDataAnalystFerramentas, setAcessDataAnalystFerramentas,
                acessExperienciasProjetos, setAcessExperienciasProjetos,
                acessFormacaoCertificacoes, setAcessFormacaoCertificacoes,
                acessInformacoesIniciais, setAcessInformacoesIniciais
            }}>
                {children}
            </AcessContext.Provider>
        )
    }