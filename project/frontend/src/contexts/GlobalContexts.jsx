import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
    const [dadosPreenchidos, setDadosPreenchidos] = useState({
        informacoesIniciais: false,
        areasInteresse: false,
    })
    const [informacoesIniciais, setInformacoesIniciais] = useState({
            nome: "",
            nascimento: "",
            cidade: "",
            estado: "",
            telefone: "",
            whatsapp: "",
            linkedin: "",
            github: ""
});
    const [areasInteresse, setAreasInteresse] = useState([]);
    //const [backendFundamentos, setBackendFundamentos] = useState([])

    return (
        <GlobalContext.Provider value={{ informacoesIniciais, setInformacoesIniciais, areasInteresse, setAreasInteresse,
            dadosPreenchidos, setDadosPreenchidos }}>
            {children}
        </GlobalContext.Provider>
    );
}