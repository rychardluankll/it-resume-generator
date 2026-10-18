import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContexts';

export default function FrontendFerramentas() {
  const { frontendFerramentas, setFrontendFerramentas, sendData } = useContext(GlobalContext);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setFrontendFerramentas((prev) => [...prev, value]);
    } else {
      setFrontendFerramentas((prev) => prev.filter((data) => data !== value));
    }
  }

  async function getData(e) {
    e.preventDefault();
    await sendData();
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

      <button type="submit">Enviar</button>
    </form>
  );
}
