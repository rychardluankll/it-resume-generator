import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';
import { useNavigate } from 'react-router-dom';
import {
  REGEX_NOME,
  REGEX_CIDADE,
  REGEX_ESTADO,
  REGEX_DATA_ISO,
  REGEX_TELEFONE,
  REGEX_EMAIL,
  contemInjecaoScript,
  sanitizarNome,
  sanitizarLocalidade,
  sanitizarTelefone,
  sanitizarEmail,
  sanitizarUrl,
  validarUrl,
} from '../utils/inputValidation';

export default function InformacoesIniciais() {
  const { informacoesIniciais, setInformacoesIniciais } = useContext(GlobalContext);
  const { setAcessAreasInteresse } = useContext(AcessContext);
  const navigate = useNavigate();

  async function send(e) {
    e.preventDefault();

    const nome = informacoesIniciais.nome.trim();
    const nascimento = informacoesIniciais.nascimento.trim();
    const cidade = informacoesIniciais.cidade.trim();
    const estado = informacoesIniciais.estado.trim();
    const telefone = informacoesIniciais.telefone.trim();
    const email = informacoesIniciais.email.trim();
    const whatsapp = informacoesIniciais.whatsapp.trim();
    const linkedin = informacoesIniciais.linkedin.trim();
    const github = informacoesIniciais.github.trim();

    const camposTexto = [nome, nascimento, cidade, estado, telefone, email, whatsapp, linkedin, github];
    if (camposTexto.some((campo) => contemInjecaoScript(campo))) {
      return;
    }

    if (
      !REGEX_NOME.test(nome) ||
      !REGEX_DATA_ISO.test(nascimento) ||
      !REGEX_CIDADE.test(cidade) ||
      !REGEX_ESTADO.test(estado) ||
      !REGEX_TELEFONE.test(telefone) ||
      !REGEX_EMAIL.test(email) ||
      (whatsapp && !REGEX_TELEFONE.test(whatsapp)) ||
      !validarUrl(linkedin, false) ||
      !validarUrl(github, false)
    ) {
      return;
    }

    setAcessAreasInteresse(true);
    navigate("/areasInteresse");
  }

  return (
    <form onSubmit={send}>
      <label>
        Insira seu nome completo:
        <input
          type="text"
          value={informacoesIniciais.nome}
          maxLength={100}
          minLength={10}
          required
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              nome: sanitizarNome(e.target.value, 100),
            })
          }
        />
      </label>
      <br />
      <label>
        Data de nascimento:
        <input
          type="date"
          value={informacoesIniciais.nascimento}
          required
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              nascimento: e.target.value.replace(/[^0-9-]/g, "").slice(0, 10),
            })
          }
        />
      </label>
      <br />
      <label>
        Cidade:
        <input
          type="text"
          value={informacoesIniciais.cidade}
          maxLength={100}
          minLength={3}
          required
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              cidade: sanitizarLocalidade(e.target.value, 100),
            })
          }
        />
      </label>
      <br />
      <label>
        Estado:
        <input
          type="text"
          value={informacoesIniciais.estado}
          maxLength={100}
          minLength={2}
          required
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              estado: sanitizarLocalidade(e.target.value, 100),
            })
          }
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="tel"
          value={informacoesIniciais.telefone}
          maxLength={11}
          minLength={10}
          required
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              telefone: sanitizarTelefone(e.target.value, 11),
            })
          }
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={informacoesIniciais.email}
          maxLength={100}
          minLength={10}
          required
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              email: sanitizarEmail(e.target.value, 100),
            })
          }
        />
      </label>
      <br />
      <label>
        WhatsApp:
        <input
          type="tel"
          value={informacoesIniciais.whatsapp}
          maxLength={11}
          minLength={10}
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              whatsapp: sanitizarTelefone(e.target.value, 11),
            })
          }
        />
      </label>
      <br />
      <label>
        Linkedin:
        <input
          type="url"
          value={informacoesIniciais.linkedin}
          maxLength={100}
          minLength={10}
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              linkedin: sanitizarUrl(e.target.value, 100),
            })
          }
        />
      </label>
      <br />
      <label>
        Github:
        <input
          type="url"
          value={informacoesIniciais.github}
          maxLength={100}
          minLength={10}
          onChange={(e) =>
            setInformacoesIniciais({
              ...informacoesIniciais,
              github: sanitizarUrl(e.target.value, 100),
            })
          }
        />
      </label>
      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}