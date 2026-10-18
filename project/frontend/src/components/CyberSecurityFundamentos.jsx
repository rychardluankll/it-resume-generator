import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';

export default function CyberSecurityFundamentos() {
  const { cyberSecurityFundamentos, setCyberSecurityFundamentos } = useContext(GlobalContext);
  const { setAcessCyberSecurityFerramentas } = useContext(AcessContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setCyberSecurityFundamentos((prev) => [...prev, value]);
    } else {
      setCyberSecurityFundamentos((prev) => prev.filter((data) => data !== value));
    }
  }

  function getData(e) {
    e.preventDefault();
    setAcessCyberSecurityFerramentas(true);
    navigate("/cyberSecurityFerramentas");
  }

  return (
    <form onSubmit={getData}>
      <p>
        Com base nos conhecimentos fundamentais requeridos a um profissional de Cyber Security,
        marque apenas os que você se considera ter conhecimento relevante ou maestria.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-01"
          value="Fundamentos de Segurança da Informação - Tríade CIA (Confidencialidade, Integridade e Disponibilidade), gestão de riscos e ameaças"
          onChange={handleChange}
        />
        <span>Fundamentos de Segurança da Informação - Tríade CIA (Confidencialidade, Integridade e Disponibilidade), gestão de riscos e ameaças</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-02"
          value="Redes de computadores - Modelo OSI, TCP/IP, DNS, DHCP, roteamento, switching e análise de tráfego (Wireshark)"
          onChange={handleChange}
        />
        <span>Redes de computadores - Modelo OSI, TCP/IP, DNS, DHCP, roteamento, switching e análise de tráfego (Wireshark)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-03"
          value="Segurança de redes - Firewalls, IDS/IPS, VPNs, segmentação de rede, proxies e Zero Trust"
          onChange={handleChange}
        />
        <span>Segurança de redes - Firewalls, IDS/IPS, VPNs, segmentação de rede, proxies e Zero Trust</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-04"
          value="Sistemas operacionais e Hardening - segurança em Linux e Windows, permissões, Active Directory e políticas de grupo"
          onChange={handleChange}
        />
        <span>Sistemas operacionais e Hardening - segurança em Linux e Windows, permissões, Active Directory e políticas de grupo</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-05"
          value="Criptografia - criptografia simétrica e assimétrica, hashing, infraestrutura de chaves públicas (PKI) e TLS/SSL"
          onChange={handleChange}
        />
        <span>Criptografia - criptografia simétrica e assimétrica, hashing, infraestrutura de chaves públicas (PKI) e TLS/SSL</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-06"
          value="Gestão de Identidade e Acesso (IAM) - autenticação multifator (MFA), SSO, OAuth2, SAML e princípio do menor privilégio"
          onChange={handleChange}
        />
        <span>Gestão de Identidade e Acesso (IAM) - autenticação multifator (MFA), SSO, OAuth2, SAML e princípio do menor privilégio</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-07"
          value="Segurança de aplicações Web (AppSec) - OWASP Top 10, SQL Injection, XSS, CSRF, SSRF e testes de segurança (SAST/DAST)"
          onChange={handleChange}
        />
        <span>Segurança de aplicações Web (AppSec) - OWASP Top 10, SQL Injection, XSS, CSRF, SSRF e testes de segurança (SAST/DAST)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-08"
          value="Gestão de vulnerabilidades - varredura (Nessus, OpenVAS), análise de CVEs e gerenciamento de patches"
          onChange={handleChange}
        />
        <span>Gestão de vulnerabilidades - varredura (Nessus, OpenVAS), análise de CVEs e gerenciamento de patches</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-09"
          value="Pentest e Ethical Hacking - reconhecimento, enumeração, exploração de vulnerabilidades (Nmap, Burp Suite, Metasploit)"
          onChange={handleChange}
        />
        <span>Pentest e Ethical Hacking - reconhecimento, enumeração, exploração de vulnerabilidades (Nmap, Burp Suite, Metasploit)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-10"
          value="Operações de Segurança (SOC) e SIEM - monitoramento de eventos, análise de logs, correlação de alertas e Threat Hunting"
          onChange={handleChange}
        />
        <span>Operações de Segurança (SOC) e SIEM - monitoramento de eventos, análise de logs, correlação de alertas e Threat Hunting</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-11"
          value="Resposta a Incidentes e Forense Digital (DFIR) - contenção, erradicação, recuperação e coleta de evidências"
          onChange={handleChange}
        />
        <span>Resposta a Incidentes e Forense Digital (DFIR) - contenção, erradicação, recuperação e coleta de evidências</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-12"
          value="Segurança em Nuvem (Cloud Security) - segurança em AWS/Azure/GCP, containers, Kubernetes e postura de segurança (CSPM)"
          onChange={handleChange}
        />
        <span>Segurança em Nuvem (Cloud Security) - segurança em AWS/Azure/GCP, containers, Kubernetes e postura de segurança (CSPM)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-13"
          value="Governança, Risco e Conformidade (GRC) - ISO 27001, NIST, LGPD/GDPR e políticas de segurança"
          onChange={handleChange}
        />
        <span>Governança, Risco e Conformidade (GRC) - ISO 27001, NIST, LGPD/GDPR e políticas de segurança</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="CF-14"
          value="Scripting para segurança - automação e análise com Python, Bash ou PowerShell"
          onChange={handleChange}
        />
        <span>Scripting para segurança - automação e análise com Python, Bash ou PowerShell</span>
      </label>

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}
