import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContexts';

export default function AndroidFundamentos() {
  const { androidFundamentos, setAndroidFundamentos, sendData } = useContext(GlobalContext);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setAndroidFundamentos((prev) => [...prev, value]);
    } else {
      setAndroidFundamentos((prev) => prev.filter((data) => data !== value));
    }
  }

  async function getData(e) {
    e.preventDefault();
    await sendData();
  }

  return (
    <form onSubmit={getData}>
      <p>
        Com base nos conhecimentos fundamentais requeridos a um desenvolvedor Android,
        marque apenas os que você se considera ter conhecimento relevante ou maestria.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-01"
          value="Kotlin e fundamentos da linguagem"
          onChange={handleChange}
        />
        <span>Kotlin e fundamentos da linguagem</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-02"
          value="Java e programação orientada a objetos"
          onChange={handleChange}
        />
        <span>Java e programação orientada a objetos</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-03"
          value="Android Studio e Gradle"
          onChange={handleChange}
        />
        <span>Android Studio e Gradle</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-04"
          value="Componentes fundamentais - Activities, Fragments, Services, Broadcast Receivers e Content Providers"
          onChange={handleChange}
        />
        <span>Componentes fundamentais - Activities, Fragments, Services, Broadcast Receivers e Content Providers</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-05"
          value="Ciclo de vida de Activities e Fragments"
          onChange={handleChange}
        />
        <span>Ciclo de vida de Activities e Fragments</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-06"
          value="Intents, navegação e Deep Links"
          onChange={handleChange}
        />
        <span>Intents, navegação e Deep Links</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-07"
          value="Layouts em XML, Views, ConstraintLayout e RecyclerView"
          onChange={handleChange}
        />
        <span>Layouts em XML, Views, ConstraintLayout e RecyclerView</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-08"
          value="Jetpack Compose e UI declarativa"
          onChange={handleChange}
        />
        <span>Jetpack Compose e UI declarativa</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-09"
          value="Material Design, temas, estilos e responsividade"
          onChange={handleChange}
        />
        <span>Material Design, temas, estilos e responsividade</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-10"
          value="Gerenciamento de estado - ViewModel, LiveData e StateFlow"
          onChange={handleChange}
        />
        <span>Gerenciamento de estado - ViewModel, LiveData e StateFlow</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-11"
          value="Arquitetura de apps - MVVM, MVI, Clean Architecture e modularização"
          onChange={handleChange}
        />
        <span>Arquitetura de apps - MVVM, MVI, Clean Architecture e modularização</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-12"
          value="Programação assíncrona - Coroutines e Kotlin Flow"
          onChange={handleChange}
        />
        <span>Programação assíncrona - Coroutines e Kotlin Flow</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-13"
          value="Armazenamento local - Room, SQLite, SharedPreferences e DataStore"
          onChange={handleChange}
        />
        <span>Armazenamento local - Room, SQLite, SharedPreferences e DataStore</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-14"
          value="Consumo de APIs REST - Retrofit, OkHttp e serialização JSON"
          onChange={handleChange}
        />
        <span>Consumo de APIs REST - Retrofit, OkHttp e serialização JSON</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-15"
          value="Injeção de dependência - Hilt, Dagger e Koin"
          onChange={handleChange}
        />
        <span>Injeção de dependência - Hilt, Dagger e Koin</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-16"
          value="Tarefas em background - WorkManager e notificações push (FCM)"
          onChange={handleChange}
        />
        <span>Tarefas em background - WorkManager e notificações push (FCM)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-17"
          value="Segurança no Android - permissões, Keystore, criptografia e ProGuard/R8"
          onChange={handleChange}
        />
        <span>Segurança no Android - permissões, Keystore, criptografia e ProGuard/R8</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-18"
          value="Testes no Android - JUnit, Espresso, MockK e testes de UI"
          onChange={handleChange}
        />
        <span>Testes no Android - JUnit, Espresso, MockK e testes de UI</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-19"
          value="Performance e profiling - uso de memória, bateria e Android Profiler"
          onChange={handleChange}
        />
        <span>Performance e profiling - uso de memória, bateria e Android Profiler</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="AF-20"
          value="Publicação e distribuição - assinatura de APK/AAB, Google Play Console e CI/CD"
          onChange={handleChange}
        />
        <span>Publicação e distribuição - assinatura de APK/AAB, Google Play Console e CI/CD</span>
      </label>

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}
