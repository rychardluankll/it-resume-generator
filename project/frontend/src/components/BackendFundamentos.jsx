import {useState} from 'react';

export default function BackendFundamentos() {

  const [datas, setDatas] = useState([])

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setDatas([...datas, value]);
    } else {
      setDatas(datas.filter((data) => data !== value));
    }
  }

  function getData(e) {
    e.preventDefault();

    
  }

  return (
<form onSubmit={getData}>
  <p>
    Com base nos conhecimentos fundamentais requeridos a um desenvolvedor backend,
    marque apenas os que você se considera ter conhecimento relevante ou maestria.
  </p>

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-01"
      value="Lógica de programação e algoritimos"
      onChange={handleChange}
    />
    <span>Lógica de programação e algoritmos</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-02"
      value="Estruturas de dados"
      onChange={handleChange}
    />
    <span>Estruturas de dados</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-03"
      value="Como a Internet funciona - IP, DNS, TCP/IP, portas e cliente/servidor"
      onChange={handleChange}
    />
    <span>Como a Internet funciona - IP, DNS, TCP/IP, portas e cliente/servidor</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-04"
      value="Sistemas operacionais - processos, threads, memória, arquivos, Windows e Linux"
      onChange={handleChange}
    />
    <span>Sistemas operacionais - processos, threads, memória, arquivos, Windows e Linux</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-05"
      value="Terminal e linha de comando - Bash, comandos Linux e variáveis de ambiente"
      onChange={handleChange}
    />
    <span>Terminal e linha de comando - Bash, comandos Linux e variáveis de ambiente</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-06"
      value="Frontend básico - HTML, CSS, JavaScript, DOM e eventos"
      onChange={handleChange}
    />
    <span>Frontend básico - HTML, CSS, JavaScript, DOM e eventos</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-07"
      value="Git e GitHub - commits, branches, merge, rebase e pull requests"
      onChange={handleChange}
    />
    <span>Git e GitHub - commits, branches, merge, rebase e pull requests</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-08"
      value="HTTP e HTTPS - métodos, headers, status codes, requests e responses"
      onChange={handleChange}
    />
    <span>HTTP e HTTPS - métodos, headers, status codes, requests e responses</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-09"
      value="APIs RESTful - rotas, parâmetros, query strings, JSON e CRUD"
      onChange={handleChange}
    />
    <span>APIs RESTful - rotas, parâmetros, query strings, JSON e CRUD</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-10"
      value="GraphQL - queries, mutations, schemas e resolvers"
      onChange={handleChange}
    />
    <span>GraphQL - queries, mutations, schemas e resolvers</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-11"
      value="Banco de dados relacional - SQL, relacionamentos, JOINs, índices e transações"
      onChange={handleChange}
    />
    <span>Banco de dados relacional - SQL, relacionamentos, JOINs, índices e transações</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-12"
      value="Banco de dados não relacional - NoSQL, documentos e chave-valor"
      onChange={handleChange}
    />
    <span>Banco de dados não relacional - NoSQL, documentos e chave-valor</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-13"
      value="Arquitetura de software - MVC, camadas, modularização e separação de responsabilidades"
      onChange={handleChange}
    />
    <span>Arquitetura de software - MVC, camadas, modularização e separação de responsabilidades</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-14"
      value="Programação assíncrona - Event Loop, Promises, async/await, concorrência e I/O"
      onChange={handleChange}
    />
    <span>Programação assíncrona - Event Loop, Promises, async/await, concorrência e I/O</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-15"
      value="Autenticação e autorização - sessões, JWT, cookies, roles e controle de acesso"
      onChange={handleChange}
    />
    <span>Autenticação e autorização - sessões, JWT, cookies, roles e controle de acesso</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-16"
      value="Segurança - criptografia, hash de senhas, SQL Injection, XSS, CORS, CSRF e rate limiting"
      onChange={handleChange}
    />
    <span>Segurança - criptografia, hash de senhas, SQL Injection, XSS, CORS, CSRF e rate limiting</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-17"
      value="Validação e tratamento de erros - validação de entrada, erros da aplicação e logs"
      onChange={handleChange}
    />
    <span>Validação e tratamento de erros - validação de entrada, erros da aplicação e logs</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-18"
      value="Testes - testes unitários, testes de integração e testes de API"
      onChange={handleChange}
    />
    <span>Testes - testes unitários, testes de integração e testes de API</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-19"
      value="Cache - conceitos de cache, invalidação e Redis"
      onChange={handleChange}
    />
    <span>Cache - conceitos de cache, invalidação e Redis</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-20"
      value="Mensageria - filas, workers e processamento assíncrono"
      onChange={handleChange}
    />
    <span>Mensageria - filas, workers e processamento assíncrono</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-21"
      value="Docker e containers - imagens, containers, volumes, redes e Docker Compose"
      onChange={handleChange}
    />
    <span>Docker e containers - imagens, containers, volumes, redes e Docker Compose</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-22"
      value="Deploy e infraestrutura - servidores Linux, DNS, HTTPS, reverse proxy e variáveis de ambiente"
      onChange={handleChange}
    />
    <span>Deploy e infraestrutura - servidores Linux, DNS, HTTPS, reverse proxy e variáveis de ambiente</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-23"
      value="Monitoramento e observabilidade - logs, métricas, health checks e rastreamento de erros"
      onChange={handleChange}
    />
    <span>Monitoramento e observabilidade - logs, métricas, health checks e rastreamento de erros</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="BF-24"
      value="Performance e escalabilidade - complexidade, índices, cache, concorrência e load balancing"
      onChange={handleChange}
    />
    <span>Performance e escalabilidade - complexidade, índices, cache, concorrência e load balancing</span>
  </label>

  <br />

  <button type="submit">Enviar</button>
</form>
  );
}