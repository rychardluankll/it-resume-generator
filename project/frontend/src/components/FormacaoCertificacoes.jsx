import { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContexts';

const ESTILO_LISTA_ITENS = {
  listStylePosition: 'inside',
  paddingLeft: 0,
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const ESTILO_ITEM_CARD = {
  maxWidth: '500px',
  padding: '8px 12px',
  fontSize: '0.85rem',
  lineHeight: '1.4',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  wordBreak: 'break-word',
};

export default function FormacaoCertificacoes() {
  const {
    formacoes,
    setFormacoes,
    certificacoes,
    setCertificacoes,
    sendData,
  } = useContext(GlobalContext);

  const [formacaoAtual, setFormacaoAtual] = useState({
    curso: '',
    instituicao: '',
    nivel: 'Graduação',
    status: 'Concluído',
    anoConclusao: '',
  });

  const [certificacaoAtual, setCertificacaoAtual] = useState({
    nome: '',
    emissor: '',
    ano: '',
    credencial: '',
  });

  function handleFormacaoChange(e) {
    const { name, value } = e.target;
    setFormacaoAtual((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAdicionarFormacao() {
    const curso = formacaoAtual.curso.trim();
    const instituicao = formacaoAtual.instituicao.trim();
    const anoConclusao = formacaoAtual.anoConclusao.trim();

    if (!curso || !instituicao || !anoConclusao) {
      return;
    }

    const novaFormacao = {
      curso,
      instituicao,
      nivel: formacaoAtual.nivel,
      status: formacaoAtual.status,
      anoConclusao,
    };

    setFormacoes((prev) => [...prev, novaFormacao]);
    setFormacaoAtual({
      curso: '',
      instituicao: '',
      nivel: 'Graduação',
      status: 'Concluído',
      anoConclusao: '',
    });
  }

  function handleRemoverFormacao(indexRemover) {
    setFormacoes((prev) => prev.filter((_, index) => index !== indexRemover));
  }

  function handleCertificacaoChange(e) {
    const { name, value } = e.target;
    setCertificacaoAtual((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAdicionarCertificacao() {
    const nome = certificacaoAtual.nome.trim();
    const emissor = certificacaoAtual.emissor.trim();
    const ano = certificacaoAtual.ano.trim();
    const credencial = certificacaoAtual.credencial.trim();

    if (!nome || !emissor || !ano) {
      return;
    }

    const novaCertificacao = {
      nome,
      emissor,
      ano,
      credencial,
    };

    setCertificacoes((prev) => [...prev, novaCertificacao]);
    setCertificacaoAtual({
      nome: '',
      emissor: '',
      ano: '',
      credencial: '',
    });
  }

  function handleRemoverCertificacao(indexRemover) {
    setCertificacoes((prev) => prev.filter((_, index) => index !== indexRemover));
  }

  async function getData(e) {
    e.preventDefault();
    await sendData();
  }

  return (
    <form onSubmit={getData}>
      <p>
        Adicione sua formação acadêmica/profissional e as certificações que você possui na área de tecnologia.
      </p>

      <fieldset>
        <legend><strong>Formação Acadêmica / Profissional</strong></legend>

        <label>
          Curso / Formação:
          <input
            type="text"
            name="curso"
            maxLength={100}
            placeholder="Ex: Ciência da Computação, Análise e Desenvolvimento de Sistemas..."
            value={formacaoAtual.curso}
            onChange={handleFormacaoChange}
          />
        </label>
        <br />

        <label>
          Instituição de Ensino:
          <input
            type="text"
            name="instituicao"
            maxLength={100}
            placeholder="Ex: USP, FIAP, SENAI..."
            value={formacaoAtual.instituicao}
            onChange={handleFormacaoChange}
          />
        </label>
        <br />

        <label>
          Nível:
          <select
            name="nivel"
            value={formacaoAtual.nivel}
            onChange={handleFormacaoChange}
          >
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Graduação">Graduação (Bacharelado / Licenciatura)</option>
            <option value="Pós-graduação / MBA">Pós-graduação / MBA</option>
            <option value="Mestrado / Doutorado">Mestrado / Doutorado</option>
            <option value="Curso Profissionalizante">Curso Profissionalizante / Bootcamp</option>
          </select>
        </label>
        <br />

        <label>
          Status:
          <select
            name="status"
            value={formacaoAtual.status}
            onChange={handleFormacaoChange}
          >
            <option value="Concluído">Concluído</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Incompleto / Trancado">Incompleto / Trancado</option>
          </select>
        </label>
        <br />

        <label>
          Ano de Conclusão (ou previsão):
          <input
            type="number"
            name="anoConclusao"
            min="1950"
            max="2040"
            placeholder="Ex: 2026"
            value={formacaoAtual.anoConclusao}
            onChange={handleFormacaoChange}
          />
        </label>
        <br />

        <button type="button" onClick={handleAdicionarFormacao}>
          Adicionar Formação
        </button>

        {formacoes.length > 0 && (
          <ul style={ESTILO_LISTA_ITENS}>
            {formacoes.map((item, index) => (
              <li key={`FORM-${index}`} style={ESTILO_ITEM_CARD}>
                <span>
                  <strong>{item.curso}</strong> ({item.nivel}) — {item.instituicao}
                  <br />
                  Status: {item.status} | Ano: {item.anoConclusao}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoverFormacao(index)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </fieldset>

      <br />

      <fieldset>
        <legend><strong>Certificações</strong></legend>

        <label>
          Nome da Certificação:
          <input
            type="text"
            name="nome"
            maxLength={100}
            placeholder="Ex: AWS Certified Solutions Architect, CompTIA Security+..."
            value={certificacaoAtual.nome}
            onChange={handleCertificacaoChange}
          />
        </label>
        <br />

        <label>
          Instituição Emissora:
          <input
            type="text"
            name="emissor"
            maxLength={100}
            placeholder="Ex: Amazon Web Services, Microsoft, Google, Cisco..."
            value={certificacaoAtual.emissor}
            onChange={handleCertificacaoChange}
          />
        </label>
        <br />

        <label>
          Ano de Emissão:
          <input
            type="number"
            name="ano"
            min="1980"
            max="2040"
            placeholder="Ex: 2025"
            value={certificacaoAtual.ano}
            onChange={handleCertificacaoChange}
          />
        </label>
        <br />

        <label>
          Código ou URL da Credencial (opcional):
          <input
            type="text"
            name="credencial"
            maxLength={150}
            placeholder="Ex: Link de verificação ou ID da credencial"
            value={certificacaoAtual.credencial}
            onChange={handleCertificacaoChange}
          />
        </label>
        <br />

        <button type="button" onClick={handleAdicionarCertificacao}>
          Adicionar Certificação
        </button>

        {certificacoes.length > 0 && (
          <ul style={ESTILO_LISTA_ITENS}>
            {certificacoes.map((cert, index) => (
              <li key={`CERT-${index}`} style={ESTILO_ITEM_CARD}>
                <span>
                  <strong>{cert.nome}</strong> — {cert.emissor} ({cert.ano})
                  {cert.credencial && (
                    <>
                      <br />
                      Credencial: {cert.credencial}
                    </>
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoverCertificacao(index)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </fieldset>

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}
