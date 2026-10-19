import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContexts';
import { AcessContext } from '../contexts/AcessContext';

const REGEX_FERRAMENTA_VALIDA = /^[a-zA-ZÀ-ÿ0-9\s.+#\-/()]{1,50}$/;

export default function DevopsFerramentas() {
  const { devopsFerramentas, setDevopsFerramentas } = useContext(GlobalContext);
  const { setAcessExperienciasProjetos } = useContext(AcessContext);
  const navigate = useNavigate();
  const [outroSelecionado, setOutroSelecionado] = useState(false);
  const [outraFerramenta, setOutraFerramenta] = useState("");
  const [ferramentasAdicionadas, setFerramentasAdicionadas] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setDevopsFerramentas((prev) => (prev.includes(value) ? prev : [...prev, value]));
    } else {
      setDevopsFerramentas((prev) => prev.filter((data) => data !== value));
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
    setDevopsFerramentas((prev) =>
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
        Com base nas ferramentas utilizadas por um profissional de DevOps,
        marque aquelas em que você possui conhecimento.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-01"
          value="Docker e Docker Compose"
          onChange={handleChange}
        />
        <span>Docker e Docker Compose</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-02"
          value="Kubernetes (K8s) e Helm"
          onChange={handleChange}
        />
        <span>Kubernetes (K8s) e Helm</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-03"
          value="Terraform / OpenTofu"
          onChange={handleChange}
        />
        <span>Terraform / OpenTofu</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-04"
          value="Ansible"
          onChange={handleChange}
        />
        <span>Ansible</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-05"
          value="AWS (EC2, S3, RDS, EKS, Lambda, IAM, VPC)"
          onChange={handleChange}
        />
        <span>AWS (EC2, S3, RDS, EKS, Lambda, IAM, VPC)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-06"
          value="Microsoft Azure / Azure DevOps"
          onChange={handleChange}
        />
        <span>Microsoft Azure / Azure DevOps</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-07"
          value="Google Cloud Platform (GCP)"
          onChange={handleChange}
        />
        <span>Google Cloud Platform (GCP)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-08"
          value="GitHub Actions / GitLab CI"
          onChange={handleChange}
        />
        <span>GitHub Actions / GitLab CI</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-09"
          value="Jenkins"
          onChange={handleChange}
        />
        <span>Jenkins</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-10"
          value="ArgoCD / FluxCD"
          onChange={handleChange}
        />
        <span>ArgoCD / FluxCD</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-11"
          value="Prometheus e Grafana"
          onChange={handleChange}
        />
        <span>Prometheus e Grafana</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-12"
          value="ELK Stack (Elasticsearch, Logstash, Kibana) / Grafana Loki"
          onChange={handleChange}
        />
        <span>ELK Stack (Elasticsearch, Logstash, Kibana) / Grafana Loki</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-13"
          value="Datadog / New Relic / Zabbix"
          onChange={handleChange}
        />
        <span>Datadog / New Relic / Zabbix</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-14"
          value="Nginx / Traefik / HAProxy"
          onChange={handleChange}
        />
        <span>Nginx / Traefik / HAProxy</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DFE-15"
          value="HashiCorp Vault / SonarQube / Trivy"
          onChange={handleChange}
        />
        <span>HashiCorp Vault / SonarQube / Trivy</span>
      </label>

      <br />

      {ferramentasAdicionadas.map((ferramenta, index) => (
        <div key={`DFE-EXTRA-${index}`}>
          <label className="opcao">
            <input
              type="checkbox"
              value={ferramenta}
              checked={devopsFerramentas.includes(ferramenta)}
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
          id="DFE-OUTRO"
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
