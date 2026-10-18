import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
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
    const [backendFundamentos, setBackendFundamentos] = useState([]);
    const [frontendFundamentos, setFrontendFundamentos] = useState([]);
    const [androidFundamentos, setAndroidFundamentos] = useState([]);
    const [devopsFundamentos, setDevopsFundamentos] = useState([]);
    const [cyberSecurityFundamentos, setCyberSecurityFundamentos] = useState([]);
    const [dataAnalystFundamentos, setDataAnalystFundamentos] = useState([]);

    //enviar todos os dados para api;
    const [response, setResponse] = useState();
    async function sendData() {
        const reqdata = {
            informacoesIniciais: informacoesIniciais,
            areasInteresse: areasInteresse,
            backendFundamentos: backendFundamentos,
            frontendFundamentos: frontendFundamentos,
            androidFundamentos: androidFundamentos,
            devopsFundamentos: devopsFundamentos,
            cyberSecurityFundamentos: cyberSecurityFundamentos,
            dataAnalystFundamentos: dataAnalystFundamentos,
        };

        const res = await fetch("http://localhost:8989/userData", {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(reqdata)
        });

        const data = await res.json();
        setResponse(data);
    }

    return (
        <GlobalContext.Provider value={{
            informacoesIniciais, setInformacoesIniciais,
            areasInteresse, setAreasInteresse,
            backendFundamentos, setBackendFundamentos,
            frontendFundamentos, setFrontendFundamentos,
            androidFundamentos, setAndroidFundamentos,
            devopsFundamentos, setDevopsFundamentos,
            cyberSecurityFundamentos, setCyberSecurityFundamentos,
            dataAnalystFundamentos, setDataAnalystFundamentos,
            sendData, response
        }}>
            {children}
        </GlobalContext.Provider>
    );
}