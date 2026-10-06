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

    //enviar todos os dados para api;
        async function sendData(){
            const data = {
                informacoesIniciais: informacoesIniciais,
                areasInteresse: areasInteresse,
            }

            const response = await fetch("http://localhost:8989/userData", {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(data)
            })
        }
    
    return (
        <GlobalContext.Provider value={{ informacoesIniciais, setInformacoesIniciais, areasInteresse, setAreasInteresse,
             }}>
            {children}
        </GlobalContext.Provider>
    );
}