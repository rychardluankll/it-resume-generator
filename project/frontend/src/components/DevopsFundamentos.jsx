import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';

export default function DevopsFundamentos() {
  const { devopsFundamentos, setDevopsFundamentos } = useContext(GlobalContext);
  const { setAcessDevopsFerramentas } = useContext(AcessContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setDevopsFundamentos((prev) => [...prev, value]);
    } else {
      setDevopsFundamentos((prev) => prev.filter((data) => data !== value));
    }
  }

  function getData(e) {
    e.preventDefault();
    setAcessDevopsFerramentas(true);
    navigate("/devopsFerramentas");
  }

  return (
    <form onSubmit={getData}>
      <p>
        Com base nos conhecimentos fundamentais requeridos a um profissional de DevOps,
        marque apenas os que você se considera ter conhecimento relevante ou maestria.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-01"
          value="Sistemas operacionais Linux - administração, processos, permissões e gerenciamento de pacotes"
          onChange={handleChange}
        />
        <span>Sistemas operacionais Linux - administração, processos, permissões e gerenciamento de pacotes</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-02"
          value="Scripting e automação - Bash, Shell Script e Python"
          onChange={handleChange}
        />
        <span>Scripting e automação - Bash, Shell Script e Python</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-03"
          value="Redes e protocolos - TCP/IP, DNS, HTTP/HTTPS, SSH, firewalls, VPN e sub-redes"
          onChange={handleChange}
        />
        <span>Redes e protocolos - TCP/IP, DNS, HTTP/HTTPS, SSH, firewalls, VPN e sub-redes</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-04"
          value="Controle de versão com Git - fluxos de branches (GitFlow, Trunk-Based), tags e hooks"
          onChange={handleChange}
        />
        <span>Controle de versão com Git - fluxos de branches (GitFlow, Trunk-Based), tags e hooks</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-05"
          value="Containers com Docker - Dockerfile, imagens multi-stage, volumes, redes e Docker Compose"
          onChange={handleChange}
        />
        <span>Containers com Docker - Dockerfile, imagens multi-stage, volumes, redes e Docker Compose</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-06"
          value="Orquestração de containers - Kubernetes (Pods, Deployments, Services, Ingress, Helm)"
          onChange={handleChange}
        />
        <span>Orquestração de containers - Kubernetes (Pods, Deployments, Services, Ingress, Helm)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-07"
          value="CI/CD - GitHub Actions, GitLab CI, Jenkins e pipelines de integração e entrega contínua"
          onChange={handleChange}
        />
        <span>CI/CD - GitHub Actions, GitLab CI, Jenkins e pipelines de integração e entrega contínua</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-08"
          value="Computação em nuvem - AWS, Azure ou GCP (computação, armazenamento, IAM e redes)"
          onChange={handleChange}
        />
        <span>Computação em nuvem - AWS, Azure ou GCP (computação, armazenamento, IAM e redes)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-09"
          value="Infraestrutura como Código (IaC) - Terraform, OpenTofu ou CloudFormation"
          onChange={handleChange}
        />
        <span>Infraestrutura como Código (IaC) - Terraform, OpenTofu ou CloudFormation</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-10"
          value="Gerenciamento de configuração - Ansible, Chef ou Puppet"
          onChange={handleChange}
        />
        <span>Gerenciamento de configuração - Ansible, Chef ou Puppet</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-11"
          value="Servidores web, Reverse Proxy e Load Balancing - Nginx, Apache, Traefik e HAProxy"
          onChange={handleChange}
        />
        <span>Servidores web, Reverse Proxy e Load Balancing - Nginx, Apache, Traefik e HAProxy</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-12"
          value="Monitoramento e métricas - Prometheus, Grafana, Zabbix e Datadog"
          onChange={handleChange}
        />
        <span>Monitoramento e métricas - Prometheus, Grafana, Zabbix e Datadog</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-13"
          value="Observabilidade e centralização de logs - ELK Stack (Elasticsearch, Logstash, Kibana), Loki e OpenTelemetry"
          onChange={handleChange}
        />
        <span>Observabilidade e centralização de logs - ELK Stack (Elasticsearch, Logstash, Kibana), Loki e OpenTelemetry</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-14"
          value="GitOps - ArgoCD e FluxCD"
          onChange={handleChange}
        />
        <span>GitOps - ArgoCD e FluxCD</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-15"
          value="DevSecOps - gestão de segredos (Vault), análise de vulnerabilidades e segurança em pipelines"
          onChange={handleChange}
        />
        <span>DevSecOps - gestão de segredos (Vault), análise de vulnerabilidades e segurança em pipelines</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DF-16"
          value="Confiabilidade e SRE - SLIs, SLOs, SLAs, alta disponibilidade, backup e disaster recovery"
          onChange={handleChange}
        />
        <span>Confiabilidade e SRE - SLIs, SLOs, SLAs, alta disponibilidade, backup e disaster recovery</span>
      </label>

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}
