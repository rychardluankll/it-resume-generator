import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContexts';

export default function CyberSecurityFerramentas() {
  const { cyberSecurityFerramentas, setCyberSecurityFerramentas, sendData } = useContext(GlobalContext);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setCyberSecurityFerramentas((prev) => [...prev, value]);
    } else {
      setCyberSecurityFerramentas((prev) => prev.filter((data) => data !== value));
    }
  }

  async function getData(e) {
    e.preventDefault();
    await sendData();
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

      <button type="submit">Enviar</button>
    </form>
  );
}
