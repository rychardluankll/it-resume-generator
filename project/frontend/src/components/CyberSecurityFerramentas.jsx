import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';

const REGEX_FERRAMENTA_VALIDA = /^[a-zA-ZÀ-ÿ0-9\s.+#\-/()]{1,50}$/;

export default function CyberSecurityFerramentas() {
  const { cyberSecurityFerramentas, setCyberSecurityFerramentas } = useContext(GlobalContext);
  const { setAcessExperienciasProjetos } = useContext(AcessContext);
  const navigate = useNavigate();
  const [outroSelecionado, setOutroSelecionado] = useState(false);
  const [outraFerramenta, setOutraFerramenta] = useState("");
  const [ferramentasAdicionadas, setFerramentasAdicionadas] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setCyberSecurityFerramentas((prev) => (prev.includes(value) ? prev : [...prev, value]));
    } else {
      setCyberSecurityFerramentas((prev) => prev.filter((data) => data !== value));
    }
  }

  function handleOutraFerramentaInput(e) {
    const valorLimpo = e.target.value.replace(/[^a-zA-ZÀ-ÿ0-9\s.+#\-/()]/g, "").slice(0, 50);
    setOutraFerramenta(valorLimpo);
    if (valorLimpo.trim() !== "") {
      setOutroSelecionado(true);
    }
  }

  function handleAdicionarFerramenta() {
    const novaFerramenta = outraFerramenta.trim();

    if (!novaFerramenta || !REGEX_FERRAMENTA_VALIDA.test(novaFerramenta)) {
      return;
    }

    setFerramentasAdicionadas((prev) =>
      prev.includes(novaFerramenta) ? prev : [...prev, novaFerramenta]
    );
    setCyberSecurityFerramentas((prev) =>
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
        Com base nas ferramentas utilizadas por um profissional de Cyber Security,
        marque aquelas em que você possui conhecimento.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-01"
          value="Kali Linux / Parrot OS"
          onChange={handleChange}
        />
        <span>Kali Linux / Parrot OS</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-02"
          value="Wireshark / tcpdump"
          onChange={handleChange}
        />
        <span>Wireshark / tcpdump</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-03"
          value="Nmap / Masscan"
          onChange={handleChange}
        />
        <span>Nmap / Masscan</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-04"
          value="Burp Suite / OWASP ZAP"
          onChange={handleChange}
        />
        <span>Burp Suite / OWASP ZAP</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-05"
          value="Metasploit Framework"
          onChange={handleChange}
        />
        <span>Metasploit Framework</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-06"
          value="Nessus / OpenVAS / Qualys"
          onChange={handleChange}
        />
        <span>Nessus / OpenVAS / Qualys</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-07"
          value="SIEM - Splunk / QRadar / Elastic Security / Wazuh"
          onChange={handleChange}
        />
        <span>SIEM - Splunk / QRadar / Elastic Security / Wazuh</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-08"
          value="IDS/IPS - Snort / Suricata / Zeek"
          onChange={handleChange}
        />
        <span>IDS/IPS - Snort / Suricata / Zeek</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-09"
          value="EDR/XDR - CrowdStrike Falcon / Microsoft Defender / SentinelOne"
          onChange={handleChange}
        />
        <span>EDR/XDR - CrowdStrike Falcon / Microsoft Defender / SentinelOne</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-10"
          value="Hashcat / John the Ripper / Hydra"
          onChange={handleChange}
        />
        <span>Hashcat / John the Ripper / Hydra</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-11"
          value="SQLMap / Gobuster / ffuf / Nikto"
          onChange={handleChange}
        />
        <span>SQLMap / Gobuster / ffuf / Nikto</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-12"
          value="SAST/DAST - SonarQube / Snyk / Trivy / Checkmarx"
          onChange={handleChange}
        />
        <span>SAST/DAST - SonarQube / Snyk / Trivy / Checkmarx</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-13"
          value="Forense Digital - Autopsy / Volatility / FTK Imager"
          onChange={handleChange}
        />
        <span>Forense Digital - Autopsy / Volatility / FTK Imager</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CFE-14"
          value="Firewalls Next-Gen - pfSense / Fortinet FortiGate / Palo Alto"
          onChange={handleChange}
        />
        <span>Firewalls Next-Gen - pfSense / Fortinet FortiGate / Palo Alto</span>
      </label>

      <br />

      {ferramentasAdicionadas.map((ferramenta, index) => (
        <div key={`CFE-EXTRA-${index}`}>
          <label className="opcao">
            <input
              type="checkbox"
              value={ferramenta}
              checked={cyberSecurityFerramentas.includes(ferramenta)}
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
          id="CFE-OUTRO"
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
