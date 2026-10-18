import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContexts';

export default function DataAnalystFundamentos() {
  const { dataAnalystFundamentos, setDataAnalystFundamentos, sendData } = useContext(GlobalContext);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setDataAnalystFundamentos((prev) => [...prev, value]);
    } else {
      setDataAnalystFundamentos((prev) => prev.filter((data) => data !== value));
    }
  }

  async function getData(e) {
    e.preventDefault();
    await sendData();
  }

  return (
    <form onSubmit={getData}>
      <p>
        Com base nos conhecimentos fundamentais requeridos a um Data Analyst,
        marque apenas os que você se considera ter conhecimento relevante ou maestria.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-01"
          value="Estatística descritiva e inferencial - média, mediana, desvio padrão, distribuições, correlação e testes de hipóteses"
          onChange={handleChange}
        />
        <span>Estatística descritiva e inferencial - média, mediana, desvio padrão, distribuições, correlação e testes de hipóteses</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-02"
          value="Excel e Google Sheets avançado - tabelas dinâmicas, PROCV/XLOOKUP, fórmulas condicionais e automação"
          onChange={handleChange}
        />
        <span>Excel e Google Sheets avançado - tabelas dinâmicas, PROCV/XLOOKUP, fórmulas condicionais e automação</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-03"
          value="SQL para análise de dados - consultas complexas, JOINs, agregações, subqueries, CTEs e Window Functions"
          onChange={handleChange}
        />
        <span>SQL para análise de dados - consultas complexas, JOINs, agregações, subqueries, CTEs e Window Functions</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-04"
          value="Python para análise de dados - Pandas, NumPy e manipulação de grandes volumes de dados"
          onChange={handleChange}
        />
        <span>Python para análise de dados - Pandas, NumPy e manipulação de grandes volumes de dados</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-05"
          value="Linguagem R para análise estatística - RStudio, dplyr, tidyr e ggplot2"
          onChange={handleChange}
        />
        <span>Linguagem R para análise estatística - RStudio, dplyr, tidyr e ggplot2</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-06"
          value="Limpeza e preparação de dados (Data Cleaning & Wrangling) - tratamento de valores nulos, duplicados, outliers e padronização"
          onChange={handleChange}
        />
        <span>Limpeza e preparação de dados (Data Cleaning & Wrangling) - tratamento de valores nulos, duplicados, outliers e padronização</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-07"
          value="Análise Exploratória de Dados (EDA) - identificação de padrões, tendências e anomalias"
          onChange={handleChange}
        />
        <span>Análise Exploratória de Dados (EDA) - identificação de padrões, tendências e anomalias</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-08"
          value="Ferramentas de Business Intelligence (BI) - Power BI (DAX, Power Query), Tableau ou Looker Studio"
          onChange={handleChange}
        />
        <span>Ferramentas de Business Intelligence (BI) - Power BI (DAX, Power Query), Tableau ou Looker Studio</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-09"
          value="Visualização de dados com código - Matplotlib, Seaborn ou Plotly"
          onChange={handleChange}
        />
        <span>Visualização de dados com código - Matplotlib, Seaborn ou Plotly</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-10"
          value="Data Storytelling e construção de dashboards - comunicação executiva, escolha de gráficos e apresentação de insights"
          onChange={handleChange}
        />
        <span>Data Storytelling e construção de dashboards - comunicação executiva, escolha de gráficos e apresentação de insights</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-11"
          value="Modelagem de dados e Data Warehousing - Esquema Estrela (Star Schema), Snowflake, fatos e dimensões"
          onChange={handleChange}
        />
        <span>Modelagem de dados e Data Warehousing - Esquema Estrela (Star Schema), Snowflake, fatos e dimensões</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-12"
          value="Processos de ETL/ELT - extração, transformação, carga de dados e integração de múltiplas fontes (APIs, CSV, bancos)"
          onChange={handleChange}
        />
        <span>Processos de ETL/ELT - extração, transformação, carga de dados e integração de múltiplas fontes (APIs, CSV, bancos)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-13"
          value="Métricas de negócio e KPIs - CAC, LTV, Churn, ROI, funil de conversão e análise de coorte (Cohort)"
          onChange={handleChange}
        />
        <span>Métricas de negócio e KPIs - CAC, LTV, Churn, ROI, funil de conversão e análise de coorte (Cohort)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-14"
          value="Experimentação e Testes A/B - desenho de experimentos, significância estatística e análise de resultados"
          onChange={handleChange}
        />
        <span>Experimentação e Testes A/B - desenho de experimentos, significância estatística e análise de resultados</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-15"
          value="Bancos de dados em nuvem e Big Data - BigQuery, Snowflake, Redshift ou Databricks"
          onChange={handleChange}
        />
        <span>Bancos de dados em nuvem e Big Data - BigQuery, Snowflake, Redshift ou Databricks</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DA-16"
          value="Governança, qualidade e privacidade de dados - LGPD/GDPR, catalogação e integridade dos dados"
          onChange={handleChange}
        />
        <span>Governança, qualidade e privacidade de dados - LGPD/GDPR, catalogação e integridade dos dados</span>
      </label>

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}
