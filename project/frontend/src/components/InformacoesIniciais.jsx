import {useContext, useEffect} from 'react';
import {GlobalContext} from '../contexts/GlobalContexts';

    export default function InformacoesIniciais(){

        const {informacoesIniciais, setInformacoesIniciais} = useContext(GlobalContext);
        const {dadosPreenchidos, setDadosPreenchidos} = useContext(GlobalContext);

        function send(e){
            e.preventDefault();
            //setDadosPreenchidos({...dadosPreenchidos, "informacoesIniciais": true})
            console.log(dadosPreenchidos);

        }

        //Aqui declara ao contexto global que os dados foram preenchidos antes de prosseguir
        useEffect(() => {
            setDadosPreenchidos({...dadosPreenchidos, informacoesIniciais: true})

        }, [informacoesIniciais])

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
                <input type="tel" value={informacoesIniciais.telefone} maxLength={10} minLength={10} required onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, telefone: e.target.value})}}/>
            </label><br></br>
            <label>
                WhatsApp:
                <input type="tel" value={informacoesIniciais.whatsapp} maxLength={10} minLength={10} onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, whatsapp: e.target.value})}}/>
            </label><br></br>
            <label>
                Linkedin:
                <input type="link" value={informacoesIniciais.linkedin} maxLength={100} minLength={10} onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, linkedin: e.target.value})}}/>
            </label><br></br>
                        <label>
                Github:
                <input type="link" value={informacoesIniciais.github} maxLength={100} minLength={10} onChange={(e) => {setInformacoesIniciais({...informacoesIniciais, github: e.target.value})}}/>
            </label><br></br>
            
                <button type="submit">Enviar</button>
            </form>
        )
    }