import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';
import {
  sanitizarTextoCurto,
  sanitizarTextoLongo,
  sanitizarUrl,
  validarTextoCurto,
  validarTextoLongo,
  validarUrl,
} from '../utils/inputValidation';

const LIMITE_CARACTERES = 500;

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
    const valorLimpo =
      name === "descricao"
        ? sanitizarTextoLongo(value, LIMITE_CARACTERES)
        : sanitizarTextoCurto(value, 100);

    setExperienciaAtual((prev) => ({
      ...prev,
      [name]: valorLimpo,
    }));
  }

  function handleAnexarExperiencia() {
    const tipo = experienciaAtual.tipo.trim();
    const empresa = experienciaAtual.empresa.trim();
    const data = experienciaAtual.data.trim();
    const descricao = experienciaAtual.descricao.trim();

    if (
      !validarTextoCurto(tipo, 1, 100) ||
      (empresa && !validarTextoCurto(empresa, 1, 100)) ||
      !validarTextoCurto(data, 1, 100) ||
      !validarTextoLongo(descricao, 1, LIMITE_CARACTERES)
    ) {
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
    let valorLimpo = value;

    if (name === "nome") {
      valorLimpo = sanitizarTextoCurto(value, 100);
    } else if (name === "tecnologias") {
      valorLimpo = sanitizarTextoCurto(value, 200);
    } else if (name === "problema" || name === "funcionalidades") {
      valorLimpo = sanitizarTextoLongo(value, LIMITE_CARACTERES);
    } else if (name === "linkGithub" || name === "linkAplicacao") {
      valorLimpo = sanitizarUrl(value, 200);
    }

    setProjetoAtual((prev) => ({
      ...prev,
      [name]: valorLimpo,
    }));
  }

  function handleAnexarProjeto() {
    const nome = projetoAtual.nome.trim();
    const problema = projetoAtual.problema.trim();
    const tecnologias = projetoAtual.tecnologias.trim();
    const funcionalidades = projetoAtual.funcionalidades.trim();
    const linkGithub = projetoAtual.linkGithub.trim();
    const linkAplicacao = projetoAtual.linkAplicacao.trim();

    if (
      !validarTextoCurto(nome, 1, 100) ||
      !validarTextoLongo(problema, 1, LIMITE_CARACTERES) ||
      !validarTextoCurto(tecnologias, 1, 200) ||
      !validarTextoLongo(funcionalidades, 1, LIMITE_CARACTERES) ||
      !validarUrl(linkGithub, true) ||
      !validarUrl(linkAplicacao, false)
    ) {
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
    <form onSubmit={getData}>
      <p>
        Descreva suas experiências pessoais (profissionais, acadêmicas ou voluntárias)
        e os projetos que você já desenvolveu.
      </p>

      <div className="cs-grid-2col">
        {/* Coluna Esquerda: Experiências Pessoais */}
        <fieldset>
          <legend><strong>Experiências Pessoais</strong></legend>

          <div className="cs-row-double">
            <label>
              <span>Tipo (PJ, CLT, Estágio, SaaS...):</span>
              <input
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

            <label>
              <span>Empresa (se houver):</span>
              <input
                type="text"
                name="empresa"
                maxLength={100}
                placeholder="Opcional"
                value={experienciaAtual.empresa}
                onChange={handleExperienciaInput}
              />
            </label>
          </div>

          <label>
            <span>Data / Período:</span>
            <input
              type="text"
              name="data"
              maxLength={100}
              placeholder="Ex: Jan/2025 - Atual ou 2024 - 2025"
              value={experienciaAtual.data}
              onChange={handleExperienciaInput}
            />
          </label>

          <label>
            <span>Descrição breve do trabalho (máx. {LIMITE_CARACTERES} caracteres):</span>
            <textarea
              name="descricao"
              rows={3}
              maxLength={LIMITE_CARACTERES}
              placeholder="Descreva suas responsabilidades, atividades realizadas e resultados..."
              value={experienciaAtual.descricao}
              onChange={handleExperienciaInput}
            />
          </label>

          <div className="cs-action-bar">
            <span>({experienciaAtual.descricao.length}/{LIMITE_CARACTERES})</span>
            <button type="button" onClick={handleAnexarExperiencia}>
              Anexar Experiência
            </button>
          </div>

          {experienciasPessoais.length > 0 && (
            <ul className="cs-attachment-list">
              {experienciasPessoais.map((exp, index) => (
                <li key={`EXP-${index}`} className="cs-attachment-item">
                  <div>
                    <strong>Experiência #{index + 1}:</strong>{"\n"}{exp}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </fieldset>

        {/* Coluna Direita: Projetos Pessoais */}
        <fieldset>
          <legend><strong>Projetos Pessoais</strong></legend>

          <div className="cs-row-double">
            <label>
              <span>Nome do projeto:</span>
              <input
                type="text"
                name="nome"
                maxLength={100}
                placeholder="Ex: Sistema de Gestão"
                value={projetoAtual.nome}
                onChange={handleProjetoInput}
              />
            </label>

            <label>
              <span>Tecnologias utilizadas:</span>
              <input
                type="text"
                name="tecnologias"
                maxLength={200}
                placeholder="Ex: React, Node.js, Docker..."
                value={projetoAtual.tecnologias}
                onChange={handleProjetoInput}
              />
            </label>
          </div>

          <div className="cs-row-double">
            <label>
              <span>Problema que resolve:</span>
              <textarea
                name="problema"
                rows={2}
                maxLength={LIMITE_CARACTERES}
                placeholder="Dor ou necessidade que soluciona..."
                value={projetoAtual.problema}
                onChange={handleProjetoInput}
              />
            </label>

            <label>
              <span>Funcionalidades e descrição técnica:</span>
              <textarea
                name="funcionalidades"
                rows={2}
                maxLength={LIMITE_CARACTERES}
                placeholder="Arquitetura, recursos e detalhes..."
                value={projetoAtual.funcionalidades}
                onChange={handleProjetoInput}
              />
            </label>
          </div>

          <div className="cs-row-double">
            <label>
              <span>Link do GitHub:</span>
              <input
                type="url"
                name="linkGithub"
                maxLength={200}
                placeholder="https://github.com/..."
                value={projetoAtual.linkGithub}
                onChange={handleProjetoInput}
              />
            </label>

            <label>
              <span>Link da aplicação (se existir):</span>
              <input
                type="url"
                name="linkAplicacao"
                maxLength={200}
                placeholder="https://... (opcional)"
                value={projetoAtual.linkAplicacao}
                onChange={handleProjetoInput}
              />
            </label>
          </div>

          <div className="cs-action-bar">
            <span>Preencha os campos obrigatórios para anexar</span>
            <button type="button" onClick={handleAnexarProjeto}>
              Anexar Projeto
            </button>
          </div>

          {projetos.length > 0 && (
            <ul className="cs-attachment-list">
              {projetos.map((proj, index) => (
                <li key={`PROJ-${index}`} className="cs-attachment-item">
                  <div>
                    <strong>Projeto #{index + 1}:</strong>{"\n"}{proj}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </fieldset>
      </div>

      <div className="cs-form-footer">
        <button type="submit">Prosseguir</button>
      </div>
    </form>
  );
}
