import {useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalContexts';
import {AcessContext} from '../contexts/AcessContext';
import {useNavigate} from 'react-router-dom';

    export default function InformacoesIniciais(){

        const {informacoesIniciais, setInformacoesIniciais} = useContext(GlobalContext);
        const {setAcessAreasInteresse} = useContext(AcessContext);
        const navigate = useNavigate();
        async function send(e){
            e.preventDefault();
            setAcessAreasInteresse(true);
            navigate("/areasInteresse");     
        }

        return (
            <form onSubmit={send}>
            <label>
                Insira seu nome completo:
                <input type="text" value={informacoesIniciais.nome} maxLength={100} minLength={10} required onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, nome: e.target.value})}}/>
            </label><br></br>
            <label>
                Data de nascimento:
                <input type="date" value={informacoesIniciais.nascimento} required onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, nascimento: e.target.value})}}/>
            </label><br></br>
            <label>
                Cidade:
                <input type="text" value={informacoesIniciais.cidade} maxLength={100} minLength={3} required onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, cidade: e.target.value})}}/>
            </label><br></br>
            <label>
                Estado:
                <input type="text" value={informacoesIniciais.estado} maxLength={100} minLength={2} required onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, estado: e.target.value})}}/>
            </label><br></br>
            <label>
                Telefone:
                <input type="tel" value={informacoesIniciais.telefone} maxLength={11} minLength={10} required onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, telefone: e.target.value})}}/>
            </label><br></br>
                        <label>
                Email:
                <input type="tel" value={informacoesIniciais.email} minLength={10} required onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, email: e.target.value})}}/>
            </label><br></br>
            <label>
                WhatsApp:
                <input type="tel" value={informacoesIniciais.whatsapp} maxLength={11} minLength={10} onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, whatsapp: e.target.value})}}/>
            </label><br></br>
            <label>
                Linkedin:
                <input type="url" value={informacoesIniciais.linkedin} maxLength={100} minLength={10} onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, linkedin: e.target.value})}}/>
            </label><br></br>
            <label>
                Github:
                <input type="url" value={informacoesIniciais.github} maxLength={100} minLength={10} onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, github: e.target.value})}}/>
            </label><br></br>
            
                <button type="submit">Enviar</button>
            </form>
        )
    }