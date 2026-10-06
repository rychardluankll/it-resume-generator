import { useState } from 'react';

export default function FrontendFundamentos() {
  const [datas, setDatas] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setDatas((prev) => [...prev, value]);
    } else {
      setDatas((prev) => prev.filter((data) => data !== value));
    }
  }

  function getData(e) {
    e.preventDefault();

    alert(datas);
  }

  return (
    
    <form onSubmit={getData}>
        <p>Com base nos conhecimentos requeridos a um desenvolvedor frontend,
            marque apenas as opções que voce se considera ter conhecimento relevante ou maestria
        </p>
     <label className="opcao">
  <input
    type="checkbox"
    id="internet-http"
    value="internet-http"
    onChange={handleChange}
  />
  <span>Internet e HTTP</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="html"
    value="html"
    onChange={handleChange}
  />
  <span>HTML</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="css"
    value="css"
    onChange={handleChange}
  />
  <span>CSS</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="javascript"
    value="javascript"
    onChange={handleChange}
  />
  <span>JavaScript</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="dom-browser-apis"
    value="dom-browser-apis"
    onChange={handleChange}
  />
  <span>DOM e Browser APIs</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="git-github"
    value="git-github"
    onChange={handleChange}
  />
  <span>Git e GitHub</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="npm"
    value="npm"
    onChange={handleChange}
  />
  <span>NPM e gerenciamento de pacotes</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="react"
    value="react"
    onChange={handleChange}
  />
  <span>React</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="typescript"
    value="typescript"
    onChange={handleChange}
  />
  <span>TypeScript</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="rest-api"
    value="rest-api"
    onChange={handleChange}
  />
  <span>REST APIs</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="autenticacao"
    value="autenticacao"
    onChange={handleChange}
  />
  <span>Autenticação e autorização</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="react-router"
    value="react-router"
    onChange={handleChange}
  />
  <span>React Router</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="testes"
    value="testes"
    onChange={handleChange}
  />
  <span>Testes</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="acessibilidade"
    value="acessibilidade"
    onChange={handleChange}
  />
  <span>Acessibilidade</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="seguranca-web"
    value="seguranca-web"
    onChange={handleChange}
  />
  <span>Segurança Web</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="performance"
    value="performance"
    onChange={handleChange}
  />
  <span>Performance Web</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="deploy"
    value="deploy"
    onChange={handleChange}
  />
  <span>Deploy</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="vite"
    value="vite"
    onChange={handleChange}
  />
  <span>Vite e ferramentas de build</span>
</label>

<br />

<label className="opcao">
  <input
    type="checkbox"
    id="eslint-prettier"
    value="eslint-prettier"
    onChange={handleChange}
  />
  <span>ESLint e Prettier</span>
</label>

<br />

      <button type="submit">Enviar</button>
    </form>
  );
}

