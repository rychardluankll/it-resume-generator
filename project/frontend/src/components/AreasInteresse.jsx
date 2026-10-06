import {useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalContexts';

export default function AreasInteresse() {

  const {areasInteresse, setAreasInteresse} = useContext(GlobalContext);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setAreasInteresse([...areasInteresse, value]);
    } else {
      setAreasInteresse(areasInteresse.filter((area) => area !== value));
    }
  }

  function getData(e){
    e.preventDefault();

    //Aqui enviar para um context realizar a chamada para api
    alert(areasInteresse)

  }

  return (
<form onSubmit={getData}>
  <label className="opcao">
    <input
      type="checkbox"
      id="AI-01"
      value="Backend Developer"
      onChange={handleChange}
    />
    <span>Backend Developer</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="AI-02"
      value="Frontend Developer"
      onChange={handleChange}
    />
    <span>Frontend Developer</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="AI-03"
      value="Android Developer"
      onChange={handleChange}
    />
    <span>Android Developer</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="AI-04"
      value="DevOps"
      onChange={handleChange}
    />
    <span>DevOps</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="AI-05"
      value="Data Analyst"
      onChange={handleChange}
    />
    <span>Data Analyst</span>
  </label>

  <br />

  <label className="opcao">
    <input
      type="checkbox"
      id="AI-06"
      value="Cyber Security"
      onChange={handleChange}
    />
    <span>Cyber Security</span>
  </label>

  <br />

  <button type="submit">Continuar</button>
</form>
  );
}