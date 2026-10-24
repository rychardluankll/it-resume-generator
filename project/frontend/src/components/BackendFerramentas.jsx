import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';
import { sanitizarFerramenta, validarFerramenta } from '../utils/inputValidation';

export default function BackendFerramentas() {
  const { backendFerramentas, setBackendFerramentas } = useContext(GlobalContext);
  const { setAcessExperienciasProjetos } = useContext(AcessContext);
  const navigate = useNavigate();
  const [outroSelecionado, setOutroSelecionado] = useState(false);
  const [outraFerramenta, setOutraFerramenta] = useState("");
  const [ferramentasAdicionadas, setFerramentasAdicionadas] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setBackendFerramentas((prev) => (prev.includes(value) ? prev : [...prev, value]));
    } else {
      setBackendFerramentas((prev) => prev.filter((data) => data !== value));
    }
  }

  function handleOutraFerramentaInput(e) {
    const valorLimpo = sanitizarFerramenta(e.target.value, 50);
    setOutraFerramenta(valorLimpo);
    if (valorLimpo.trim() !== "") {
      setOutroSelecionado(true);
    }
  }

  function handleAdicionarFerramenta() {
    const novaFerramenta = outraFerramenta.trim();

    if (!validarFerramenta(novaFerramenta)) {
      return;
    }

    setFerramentasAdicionadas((prev) =>
      prev.includes(novaFerramenta) ? prev : [...prev, novaFerramenta]
    );
    setBackendFerramentas((prev) =>
      prev.includes(novaFerramenta) ? prev : [...prev, novaFerramenta]
    );
    setOutraFerramenta("");
  }

  function getData(e) {
    e.preventDefault();
    setAcessExperienciasProjetos(true);
    navigate("/experienciasProjetos");
  }

  return (
    <form onSubmit={getData}>
      <p>
        Com base nas ferramentas utilizadas por um desenvolvedor Backend,
        marque aquelas em que você possui conhecimento.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-01"
          value="Node.js (Express, NestJS ou Fastify)"
          onChange={handleChange}
        />
        <span>Node.js (Express, NestJS ou Fastify)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-02"
          value="Java (Spring Boot, Quarkus ou Hibernate)"
          onChange={handleChange}
        />
        <span>Java (Spring Boot, Quarkus ou Hibernate)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-03"
          value="Python (Django, FastAPI ou Flask)"
          onChange={handleChange}
        />
        <span>Python (Django, FastAPI ou Flask)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-04"
          value="C# e .NET (ASP.NET Core, Entity Framework)"
          onChange={handleChange}
        />
        <span>C# e .NET (ASP.NET Core, Entity Framework)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-05"
          value="PHP (Laravel ou Symfony)"
          onChange={handleChange}
        />
        <span>PHP (Laravel ou Symfony)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-06"
          value="Go (Gin, Echo ou Fiber)"
          onChange={handleChange}
        />
        <span>Go (Gin, Echo ou Fiber)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-07"
          value="PostgreSQL"
          onChange={handleChange}
        />
        <span>PostgreSQL</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-08"
          value="MySQL / MariaDB"
          onChange={handleChange}
        />
        <span>MySQL / MariaDB</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-09"
          value="MongoDB"
          onChange={handleChange}
        />
        <span>MongoDB</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-10"
          value="Redis"
          onChange={handleChange}
        />
        <span>Redis</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-11"
          value="ORMs - Prisma, TypeORM, Sequelize ou SQLAlchemy"
          onChange={handleChange}
        />
        <span>ORMs - Prisma, TypeORM, Sequelize ou SQLAlchemy</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-12"
          value="RabbitMQ / Apache Kafka"
          onChange={handleChange}
        />
        <span>RabbitMQ / Apache Kafka</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-13"
          value="Docker e Docker Compose"
          onChange={handleChange}
        />
        <span>Docker e Docker Compose</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-14"
          value="Postman / Insomnia / Swagger (OpenAPI)"
          onChange={handleChange}
        />
        <span>Postman / Insomnia / Swagger (OpenAPI)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-15"
          value="Jest / JUnit / PyTest"
          onChange={handleChange}
        />
        <span>Jest / JUnit / PyTest</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-16"
          value="Git, GitHub / GitLab"
          onChange={handleChange}
        />
        <span>Git, GitHub / GitLab</span>
      </label>

      <br />

      {ferramentasAdicionadas.map((ferramenta, index) => (
        <div key={`BFE-EXTRA-${index}`}>
          <label className="opcao">
            <input
              type="checkbox"
              value={ferramenta}
              checked={backendFerramentas.includes(ferramenta)}
              onChange={handleChange}
            />
            <span>{ferramenta}</span>
          </label>
          <br />
        </div>
      ))}

      <label className="opcao">
        <input
          type="checkbox"
          id="BFE-OUTRO"
          checked={outroSelecionado}
          onChange={(e) => setOutroSelecionado(e.target.checked)}
        />
        <span>Outro: </span>
        <input
          type="text"
          maxLength={50}
          placeholder="Digite outra ferramenta..."
          value={outraFerramenta}
          onChange={handleOutraFerramentaInput}
        />
        <button type="button" onClick={handleAdicionarFerramenta}>
          Adicionar
        </button>
      </label>

      <br />

      <button type="submit">Prosseguir</button>
    </form>
  );
}
