import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {AcessContext} from '../contexts/AcessContext';

export default function Home(){

    const {acessAreasInteresse} = useContext(AcessContext)
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contexto {typeof acessAreasInteresse}</h1>
            <h1>Bem vindo ao gerador de currículos para TI</h1>
            <p>1 - Adicione as infomrações 
            2 - Clique em gerar 
            3 - Receba o seu CV estruturado e pronto para se aplicar
            </p>
                <button onClick={()=> {navigate("/informacoesIniciais")}}>Prosseguir</button>
        </div>
    )
}