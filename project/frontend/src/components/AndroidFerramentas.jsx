import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';
import { sanitizarFerramenta, validarFerramenta } from '../utils/inputValidation';

export default function AndroidFerramentas() {
  const { androidFerramentas, setAndroidFerramentas } = useContext(GlobalContext);
  const { setAcessExperienciasProjetos } = useContext(AcessContext);
  const navigate = useNavigate();
  const [outroSelecionado, setOutroSelecionado] = useState(false);
  const [outraFerramenta, setOutraFerramenta] = useState("");
  const [ferramentasAdicionadas, setFerramentasAdicionadas] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setAndroidFerramentas((prev) => (prev.includes(value) ? prev : [...prev, value]));
    } else {
      setAndroidFerramentas((prev) => prev.filter((data) => data !== value));
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
    setAndroidFerramentas((prev) =>
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
        Com base nas ferramentas utilizadas por um desenvolvedor Android,
        marque aquelas em que você possui conhecimento.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-01"
          value="Android Studio"
          onChange={handleChange}
        />
        <span>Android Studio</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-02"
          value="Kotlin"
          onChange={handleChange}
        />
        <span>Kotlin</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-03"
          value="Java"
          onChange={handleChange}
        />
        <span>Java</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-04"
          value="Jetpack Compose"
          onChange={handleChange}
        />
        <span>Jetpack Compose</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-05"
          value="Android Jetpack (ViewModel, LiveData, Navigation, WorkManager)"
          onChange={handleChange}
        />
        <span>Android Jetpack (ViewModel, LiveData, Navigation, WorkManager)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-06"
          value="Room Database / SQLite / DataStore"
          onChange={handleChange}
        />
        <span>Room Database / SQLite / DataStore</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-07"
          value="Retrofit / OkHttp / Ktor"
          onChange={handleChange}
        />
        <span>Retrofit / OkHttp / Ktor</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-08"
          value="Hilt / Dagger / Koin"
          onChange={handleChange}
        />
        <span>Hilt / Dagger / Koin</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-09"
          value="Kotlin Coroutines e Flow"
          onChange={handleChange}
        />
        <span>Kotlin Coroutines e Flow</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-10"
          value="Firebase (Auth, Firestore, Crashlytics, Cloud Messaging)"
          onChange={handleChange}
        />
        <span>Firebase (Auth, Firestore, Crashlytics, Cloud Messaging)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-11"
          value="Glide / Coil / Picasso"
          onChange={handleChange}
        />
        <span>Glide / Coil / Picasso</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-12"
          value="Gradle (Kotlin DSL / Groovy)"
          onChange={handleChange}
        />
        <span>Gradle (Kotlin DSL / Groovy)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-13"
          value="JUnit / MockK / Espresso"
          onChange={handleChange}
        />
        <span>JUnit / MockK / Espresso</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-14"
          value="ADB (Android Debug Bridge) / Logcat / Android Profiler"
          onChange={handleChange}
        />
        <span>ADB (Android Debug Bridge) / Logcat / Android Profiler</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AFE-15"
          value="Google Play Console / Fastlane"
          onChange={handleChange}
        />
        <span>Google Play Console / Fastlane</span>
      </label>

      <br />

      {ferramentasAdicionadas.map((ferramenta, index) => (
        <div key={`AFE-EXTRA-${index}`}>
          <label className="opcao">
            <input
              type="checkbox"
              value={ferramenta}
              checked={androidFerramentas.includes(ferramenta)}
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
          id="AFE-OUTRO"
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
