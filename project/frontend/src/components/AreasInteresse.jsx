import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';

export default function AreasInteresse() {
  const { areasInteresse, setAreasInteresse, sendData } = useContext(GlobalContext);
  const {
    setAcessBackendFundamentos,
    setAcessFrontendFundamentos,
    setAcessAndroidFundamentos,
    setAcessDevopsFundamentos,
    setAcessCyberSecurityFundamentos,
    setAcessDataAnalystFundamentos,
  } = useContext(AcessContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setAreasInteresse([value]);
    } else {
      setAreasInteresse([]);
    }
  }

  async function getData(e) {
    e.preventDefault();

    const temBackend = areasInteresse.includes("Backend Developer");
    const temFrontend = areasInteresse.includes("Frontend Developer");
    const temAndroid = areasInteresse.includes("Android Developer");
    const temDevops = areasInteresse.includes("DevOps");
    const temDataAnalyst = areasInteresse.includes("Data Analyst");
    const temCyberSecurity = areasInteresse.includes("Cyber Security");

    if (temBackend) setAcessBackendFundamentos(true);
    if (temFrontend) setAcessFrontendFundamentos(true);
    if (temAndroid) setAcessAndroidFundamentos(true);
    if (temDevops) setAcessDevopsFundamentos(true);
    if (temDataAnalyst) setAcessDataAnalystFundamentos(true);
    if (temCyberSecurity) setAcessCyberSecurityFundamentos(true);

    if (temBackend) {
      navigate("/backendFundamentos");
    } else if (temFrontend) {
      navigate("/frontendFundamentos");
    } else if (temAndroid) {
      navigate("/androidFundamentos");
    } else if (temDevops) {
      navigate("/devopsFundamentos");
    } else if (temDataAnalyst) {
      navigate("/dataAnalystFundamentos");
    } else if (temCyberSecurity) {
      navigate("/cyberSecurityFundamentos");
    } else {
      await sendData();
    }
  }

  return (
    <form onSubmit={getData}>
      <label className="opcao">
        <input
          type="checkbox"
          id="AI-01"
          value="Backend Developer"
          checked={areasInteresse.includes("Backend Developer")}
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
          checked={areasInteresse.includes("Frontend Developer")}
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
          checked={areasInteresse.includes("Android Developer")}
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
          checked={areasInteresse.includes("DevOps")}
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
          checked={areasInteresse.includes("Data Analyst")}
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
          checked={areasInteresse.includes("Cyber Security")}
          onChange={handleChange}
        />
        <span>Cyber Security</span>
      </label>

      <br />

      <button type="submit">Continuar</button>
    </form>
  );
}