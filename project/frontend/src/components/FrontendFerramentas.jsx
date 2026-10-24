import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';
import { sanitizarFerramenta, validarFerramenta } from '../utils/inputValidation';

export default function FrontendFerramentas() {
  const { frontendFerramentas, setFrontendFerramentas } = useContext(GlobalContext);
  const { setAcessExperienciasProjetos } = useContext(AcessContext);
  const navigate = useNavigate();
  const [outroSelecionado, setOutroSelecionado] = useState(false);
  const [outraFerramenta, setOutraFerramenta] = useState("");
  const [ferramentasAdicionadas, setFerramentasAdicionadas] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setFrontendFerramentas((prev) => (prev.includes(value) ? prev : [...prev, value]));
    } else {
      setFrontendFerramentas((prev) => prev.filter((data) => data !== value));
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
    setFrontendFerramentas((prev) =>
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
        Com base nas ferramentas utilizadas por um desenvolvedor Frontend,
        marque aquelas em que você possui conhecimento.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-01"
          value="React.js"
          onChange={handleChange}
        />
        <span>React.js</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-02"
          value="Next.js"
          onChange={handleChange}
        />
        <span>Next.js</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-03"
          value="Vue.js / Nuxt.js"
          onChange={handleChange}
        />
        <span>Vue.js / Nuxt.js</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-04"
          value="Angular"
          onChange={handleChange}
        />
        <span>Angular</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-05"
          value="TypeScript"
          onChange={handleChange}
        />
        <span>TypeScript</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-06"
          value="Tailwind CSS"
          onChange={handleChange}
        />
        <span>Tailwind CSS</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-07"
          value="Sass / SCSS / Styled Components"
          onChange={handleChange}
        />
        <span>Sass / SCSS / Styled Components</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-08"
          value="Bootstrap / Material UI (MUI) / Shadcn UI"
          onChange={handleChange}
        />
        <span>Bootstrap / Material UI (MUI) / Shadcn UI</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-09"
          value="Redux Toolkit / Zustand / Context API"
          onChange={handleChange}
        />
        <span>Redux Toolkit / Zustand / Context API</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-10"
          value="Axios / TanStack Query (React Query)"
          onChange={handleChange}
        />
        <span>Axios / TanStack Query (React Query)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-11"
          value="Vite / Webpack"
          onChange={handleChange}
        />
        <span>Vite / Webpack</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-12"
          value="Jest / Vitest / React Testing Library"
          onChange={handleChange}
        />
        <span>Jest / Vitest / React Testing Library</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-13"
          value="Cypress / Playwright"
          onChange={handleChange}
        />
        <span>Cypress / Playwright</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-14"
          value="Figma (inspeção de protótipos e Design Systems)"
          onChange={handleChange}
        />
        <span>Figma (inspeção de protótipos e Design Systems)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-15"
          value="Storybook"
          onChange={handleChange}
        />
        <span>Storybook</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="FFE-16"
          value="ESLint / Prettier"
          onChange={handleChange}
        />
        <span>ESLint / Prettier</span>
      </label>

      <br />

      {ferramentasAdicionadas.map((ferramenta, index) => (
        <div key={`FFE-EXTRA-${index}`}>
          <label className="opcao">
            <input
              type="checkbox"
              value={ferramenta}
              checked={frontendFerramentas.includes(ferramenta)}
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
          id="FFE-OUTRO"
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
