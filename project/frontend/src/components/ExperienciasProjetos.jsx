import { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContexts';

const LIMITE_CARACTERES = 500;

const ESTILO_LISTA_ANEXOS = {
  listStylePosition: 'inside',
  paddingLeft: 0,
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const ESTILO_ITEM_ANEXO = {
  maxWidth: '450px',
  maxHeight: '65px',
  overflowY: 'auto',
  padding: '6px 10px',
  fontSize: '0.85rem',
  lineHeight: '1.35',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  borderRadius: '4px',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
};

export default function ExperienciasProjetos() {
  const {
    experienciasPessoais,
    setExperienciasPessoais,
    projetos,
    setProjetos,
    sendData,
  } = useContext(GlobalContext);

  const [experienciaAtual, setExperienciaAtual] = useState("");
  const [projetoAtual, setProjetoAtual] = useState("");

  function handleExperienciaInput(e) {
    const texto = e.target.value.slice(0, LIMITE_CARACTERES);
    setExperienciaAtual(texto);
  }

  function handleAnexarExperiencia() {
    const novaExperiencia = experienciaAtual.trim();
    if (!novaExperiencia) {
      return;
    }

    setExperienciasPessoais((prev) => [...prev, novaExperiencia]);
    setExperienciaAtual("");
  }

  function handleProjetoInput(e) {
    const texto = e.target.value.slice(0, LIMITE_CARACTERES);
    setProjetoAtual(texto);
  }

  function handleAnexarProjeto() {
    const novoProjeto = projetoAtual.trim();
    if (!novoProjeto) {
      return;
    }

    setProjetos((prev) => [...prev, novoProjeto]);
    setProjetoAtual("");
  }

  async function getData(e) {
    e.preventDefault();
    await sendData();
  }

  return (
    <form onSubmit={getData}>
      <p>
        Descreva suas experiências pessoais (profissionais, acadêmicas ou voluntárias)
        e os projetos que você já desenvolveu.
      </p>

      <div>
        <label>
          Experiências Pessoais (máx. {LIMITE_CARACTERES} caracteres):
          <br />
          <textarea
            rows={4}
            cols={60}
            maxLength={LIMITE_CARACTERES}
            placeholder="Descreva uma experiência pessoal, estágio, trabalho ou vivência na área..."
            value={experienciaAtual}
            onChange={handleExperienciaInput}
          />
        </label>
        <span> ({experienciaAtual.length}/{LIMITE_CARACTERES}) </span>
        <button type="button" onClick={handleAnexarExperiencia}>
          Anexar
        </button>

        {experienciasPessoais.length > 0 && (
          <ul style={ESTILO_LISTA_ANEXOS}>
            {experienciasPessoais.map((exp, index) => (
              <li key={`EXP-${index}`} style={ESTILO_ITEM_ANEXO}>
                <strong>Experiência #{index + 1}:</strong> {exp}
              </li>
            ))}
          </ul>
        )}
      </div>

      <br />

      <div>
        <label>
          Projetos (máx. {LIMITE_CARACTERES} caracteres):
          <br />
          <textarea
            rows={4}
            cols={60}
            maxLength={LIMITE_CARACTERES}
            placeholder="Descreva um projeto pessoal, acadêmico ou open source, tecnologias utilizadas e resultados..."
            value={projetoAtual}
            onChange={handleProjetoInput}
          />
        </label>
        <span> ({projetoAtual.length}/{LIMITE_CARACTERES}) </span>
        <button type="button" onClick={handleAnexarProjeto}>
          Anexar
        </button>

        {projetos.length > 0 && (
          <ul style={ESTILO_LISTA_ANEXOS}>
            {projetos.map((proj, index) => (
              <li key={`PROJ-${index}`} style={ESTILO_ITEM_ANEXO}>
                <strong>Projeto #{index + 1}:</strong> {proj}
              </li>
            ))}
          </ul>
        )}
      </div>

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}
