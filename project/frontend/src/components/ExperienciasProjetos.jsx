import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';

const LIMITE_CARACTERES = 500;

const ESTILO_FORM = {
  height: '96vh',
  maxHeight: '96vh',
  overflow: 'hidden',
  boxSizing: 'border-box',
  padding: '8px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const ESTILO_CABECALHO = {
  margin: 0,
  fontSize: '0.9rem',
  flexShrink: 0,
};

const ESTILO_GRID_COLUNAS = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '14px',
  flex: 1,
  minHeight: 0,
};

const ESTILO_FIELDSET = {
  margin: 0,
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  minHeight: 0,
  overflow: 'hidden',
  boxSizing: 'border-box',
};

const ESTILO_LINHA_DUPLA = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
};

const ESTILO_LABEL = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  fontSize: '0.8rem',
};

const ESTILO_INPUT = {
  padding: '4px 6px',
  fontSize: '0.8rem',
  boxSizing: 'border-box',
  width: '100%',
};

const ESTILO_TEXTAREA = {
  padding: '4px 6px',
  fontSize: '0.8rem',
  boxSizing: 'border-box',
  width: '100%',
  resize: 'none',
};

const ESTILO_BARRA_ACAO = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.75rem',
  flexShrink: 0,
};

const ESTILO_LISTA_ANEXOS = {
  listStylePosition: 'inside',
  paddingLeft: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  flex: 1,
  minHeight: '55px',
  overflowY: 'auto',
  borderTop: '1px solid #e0e0e0',
  paddingTop: '6px',
};

const ESTILO_ITEM_ANEXO = {
  maxHeight: '58px',
  overflowY: 'auto',
  padding: '4px 8px',
  fontSize: '0.78rem',
  lineHeight: '1.25',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  borderRadius: '4px',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  flexShrink: 0,
};

const ESTILO_RODAPE = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexShrink: 0,
};

const EXPERIENCIA_INICIAL = {
  tipo: "",
  empresa: "",
  data: "",
  descricao: "",
};

const PROJETO_INICIAL = {
  nome: "",
  problema: "",
  tecnologias: "",
  funcionalidades: "",
  linkGithub: "",
  linkAplicacao: "",
};

export default function ExperienciasProjetos() {
  const {
    experienciasPessoais,
    setExperienciasPessoais,
    projetos,
    setProjetos,
  } = useContext(GlobalContext);
  const { setAcessFormacaoCertificacoes } = useContext(AcessContext);
  const navigate = useNavigate();

  const [experienciaAtual, setExperienciaAtual] = useState(EXPERIENCIA_INICIAL);
  const [projetoAtual, setProjetoAtual] = useState(PROJETO_INICIAL);

  function handleExperienciaInput(e) {
    const { name, value } = e.target;
    setExperienciaAtual((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAnexarExperiencia() {
    const tipo = experienciaAtual.tipo.trim();
    const empresa = experienciaAtual.empresa.trim();
    const data = experienciaAtual.data.trim();
    const descricao = experienciaAtual.descricao.trim();

    if (!tipo || !data || !descricao) {
      return;
    }

    const partesTexto = [
      `Tipo de experiência: ${tipo}`,
    ];

    if (empresa) {
      partesTexto.push(`Empresa: ${empresa}`);
    }

    partesTexto.push(
      `Data/Período: ${data}`,
      `Descrição do trabalho: ${descricao}`
    );

    const novaExperienciaTexto = partesTexto.join("\n");

    setExperienciasPessoais((prev) => [...prev, novaExperienciaTexto]);
    setExperienciaAtual(EXPERIENCIA_INICIAL);
  }

  function handleProjetoInput(e) {
    const { name, value } = e.target;
    setProjetoAtual((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAnexarProjeto() {
    const nome = projetoAtual.nome.trim();
    const problema = projetoAtual.problema.trim();
    const tecnologias = projetoAtual.tecnologias.trim();
    const funcionalidades = projetoAtual.funcionalidades.trim();
    const linkGithub = projetoAtual.linkGithub.trim();
    const linkAplicacao = projetoAtual.linkAplicacao.trim();

    if (!nome || !problema || !tecnologias || !funcionalidades || !linkGithub) {
      return;
    }

    const partesTexto = [
      `Nome do projeto: ${nome}`,
      `Descrição do problema que resolve: ${problema}`,
      `Tecnologias utilizadas: ${tecnologias}`,
      `Principais funcionalidades e descrição técnica: ${funcionalidades}`,
      `Link do GitHub: ${linkGithub}`,
    ];

    if (linkAplicacao) {
      partesTexto.push(`Link da aplicação: ${linkAplicacao}`);
    }

    const novoProjetoTexto = partesTexto.join("\n");

    setProjetos((prev) => [...prev, novoProjetoTexto]);
    setProjetoAtual(PROJETO_INICIAL);
  }

  function getData(e) {
    e.preventDefault();
    setAcessFormacaoCertificacoes(true);
    navigate("/formacaoCertificacoes");
  }

  return (
    <form onSubmit={getData} style={ESTILO_FORM}>
      <p style={ESTILO_CABECALHO}>
        Descreva suas experiências pessoais (profissionais, acadêmicas ou voluntárias)
        e os projetos que você já desenvolveu.
      </p>

      <div style={ESTILO_GRID_COLUNAS}>
        {/* Coluna Esquerda: Experiências Pessoais */}
        <fieldset style={ESTILO_FIELDSET}>
          <legend><strong>Experiências Pessoais</strong></legend>

          <div style={ESTILO_LINHA_DUPLA}>
            <label style={ESTILO_LABEL}>
              <span>Tipo (PJ, CLT, Estágio, SaaS...):</span>
              <input
                style={ESTILO_INPUT}
                type="text"
                name="tipo"
                list="tipos-experiencia"
                maxLength={100}
                placeholder="Ex: CLT, PJ, Estágio, SaaS..."
                value={experienciaAtual.tipo}
                onChange={handleExperienciaInput}
              />
              <datalist id="tipos-experiencia">
                <option value="CLT" />
                <option value="PJ" />
                <option value="Estágio" />
                <option value="Contribuição Open Source" />
                <option value="SaaS" />
                <option value="Freelance" />
                <option value="Voluntariado" />
                <option value="Pesquisa / Iniciação Científica" />
              </datalist>
            </label>

            <label style={ESTILO_LABEL}>
              <span>Empresa (se houver):</span>
              <input
                style={ESTILO_INPUT}
                type="text"
                name="empresa"
                maxLength={100}
                placeholder="Opcional"
                value={experienciaAtual.empresa}
                onChange={handleExperienciaInput}
              />
            </label>
          </div>

          <label style={ESTILO_LABEL}>
            <span>Data / Período:</span>
            <input
              style={ESTILO_INPUT}
              type="text"
              name="data"
              maxLength={100}
              placeholder="Ex: Jan/2025 - Atual ou 2024 - 2025"
              value={experienciaAtual.data}
              onChange={handleExperienciaInput}
            />
          </label>

          <label style={ESTILO_LABEL}>
            <span>Descrição breve do trabalho (máx. {LIMITE_CARACTERES} caracteres):</span>
            <textarea
              style={ESTILO_TEXTAREA}
              name="descricao"
              rows={3}
              maxLength={LIMITE_CARACTERES}
              placeholder="Descreva suas responsabilidades, atividades realizadas e resultados..."
              value={experienciaAtual.descricao}
              onChange={handleExperienciaInput}
            />
          </label>

          <div style={ESTILO_BARRA_ACAO}>
            <span>({experienciaAtual.descricao.length}/{LIMITE_CARACTERES})</span>
            <button type="button" onClick={handleAnexarExperiencia}>
              Anexar Experiência
            </button>
          </div>

          <ul style={ESTILO_LISTA_ANEXOS}>
            {experienciasPessoais.map((exp, index) => (
              <li key={`EXP-${index}`} style={ESTILO_ITEM_ANEXO}>
                <strong>Experiência #{index + 1}:</strong>{"\n"}{exp}
              </li>
            ))}
          </ul>
        </fieldset>

        {/* Coluna Direita: Projetos Pessoais */}
        <fieldset style={ESTILO_FIELDSET}>
          <legend><strong>Projetos Pessoais</strong></legend>

          <div style={ESTILO_LINHA_DUPLA}>
            <label style={ESTILO_LABEL}>
              <span>Nome do projeto:</span>
              <input
                style={ESTILO_INPUT}
                type="text"
                name="nome"
                maxLength={100}
                placeholder="Ex: Sistema de Gestão"
                value={projetoAtual.nome}
                onChange={handleProjetoInput}
              />
            </label>

            <label style={ESTILO_LABEL}>
              <span>Tecnologias utilizadas:</span>
              <input
                style={ESTILO_INPUT}
                type="text"
                name="tecnologias"
                maxLength={200}
                placeholder="Ex: React, Node.js, Docker..."
                value={projetoAtual.tecnologias}
                onChange={handleProjetoInput}
              />
            </label>
          </div>

          <div style={ESTILO_LINHA_DUPLA}>
            <label style={ESTILO_LABEL}>
              <span>Problema que resolve:</span>
              <textarea
                style={ESTILO_TEXTAREA}
                name="problema"
                rows={2}
                maxLength={LIMITE_CARACTERES}
                placeholder="Dor ou necessidade que soluciona..."
                value={projetoAtual.problema}
                onChange={handleProjetoInput}
              />
            </label>

            <label style={ESTILO_LABEL}>
              <span>Funcionalidades e descrição técnica:</span>
              <textarea
                style={ESTILO_TEXTAREA}
                name="funcionalidades"
                rows={2}
                maxLength={LIMITE_CARACTERES}
                placeholder="Arquitetura, recursos e detalhes..."
                value={projetoAtual.funcionalidades}
                onChange={handleProjetoInput}
              />
            </label>
          </div>

          <div style={ESTILO_LINHA_DUPLA}>
            <label style={ESTILO_LABEL}>
              <span>Link do GitHub:</span>
              <input
                style={ESTILO_INPUT}
                type="url"
                name="linkGithub"
                maxLength={200}
                placeholder="https://github.com/..."
                value={projetoAtual.linkGithub}
                onChange={handleProjetoInput}
              />
            </label>

            <label style={ESTILO_LABEL}>
              <span>Link da aplicação (se existir):</span>
              <input
                style={ESTILO_INPUT}
                type="url"
                name="linkAplicacao"
                maxLength={200}
                placeholder="https://... (opcional)"
                value={projetoAtual.linkAplicacao}
                onChange={handleProjetoInput}
              />
            </label>
          </div>

          <div style={ESTILO_BARRA_ACAO}>
            <span>Preencha os campos obrigatórios para anexar</span>
            <button type="button" onClick={handleAnexarProjeto}>
              Anexar Projeto
            </button>
          </div>

          <ul style={ESTILO_LISTA_ANEXOS}>
            {projetos.map((proj, index) => (
              <li key={`PROJ-${index}`} style={ESTILO_ITEM_ANEXO}>
                <strong>Projeto #{index + 1}:</strong>{"\n"}{proj}
              </li>
            ))}
          </ul>
        </fieldset>
      </div>

      <div style={ESTILO_RODAPE}>
        <button type="submit">Prosseguir</button>
      </div>
    </form>
  );
}
