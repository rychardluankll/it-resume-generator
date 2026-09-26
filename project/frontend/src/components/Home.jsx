import {useNavigate} from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>Bem vindo ao gerador de currículos para TI</h1>
            <p>1 - Adicione as infomrações 
            2 - Clique em gerar 
            3 - Receba o seu CV estruturado e pronto para se aplicar
            </p>
                <button onClick={()=> {navigate("/informacoesIniciais")}}>Prosseguir</button>
        </div>
    )
}