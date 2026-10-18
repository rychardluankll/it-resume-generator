import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContexts';

export default function DataAnalystFerramentas() {
  const { dataAnalystFerramentas, setDataAnalystFerramentas, sendData } = useContext(GlobalContext);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setDataAnalystFerramentas((prev) => [...prev, value]);
    } else {
      setDataAnalystFerramentas((prev) => prev.filter((data) => data !== value));
    }
  }

  async function getData(e) {
    e.preventDefault();
    await sendData();
  }

  return (
    <form onSubmit={getData}>
      <p>
        Com base nas ferramentas utilizadas por um Data Analyst,
        marque aquelas em que você possui conhecimento.
      </p>

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-01"
          value="Microsoft Excel / Google Sheets"
          onChange={handleChange}
        />
        <span>Microsoft Excel / Google Sheets</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-02"
          value="Microsoft Power BI (Power Query e DAX)"
          onChange={handleChange}
        />
        <span>Microsoft Power BI (Power Query e DAX)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-03"
          value="Tableau"
          onChange={handleChange}
        />
        <span>Tableau</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-04"
          value="Looker Studio (Google Data Studio) / Metabase"
          onChange={handleChange}
        />
        <span>Looker Studio (Google Data Studio) / Metabase</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-05"
          value="Python (Pandas, NumPy, SciPy)"
          onChange={handleChange}
        />
        <span>Python (Pandas, NumPy, SciPy)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-06"
          value="Matplotlib / Seaborn / Plotly"
          onChange={handleChange}
        />
        <span>Matplotlib / Seaborn / Plotly</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-07"
          value="Jupyter Notebook / Google Colab"
          onChange={handleChange}
        />
        <span>Jupyter Notebook / Google Colab</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-08"
          value="R e RStudio (tidyverse, ggplot2, dplyr)"
          onChange={handleChange}
        />
        <span>R e RStudio (tidyverse, ggplot2, dplyr)</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-09"
          value="PostgreSQL / MySQL / SQL Server"
          onChange={handleChange}
        />
        <span>PostgreSQL / MySQL / SQL Server</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-10"
          value="Google BigQuery"
          onChange={handleChange}
        />
        <span>Google BigQuery</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-11"
          value="Snowflake / Amazon Redshift"
          onChange={handleChange}
        />
        <span>Snowflake / Amazon Redshift</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-12"
          value="Databricks / Apache Spark"
          onChange={handleChange}
        />
        <span>Databricks / Apache Spark</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-13"
          value="dbt (data build tool) / Apache Airflow"
          onChange={handleChange}
        />
        <span>dbt (data build tool) / Apache Airflow</span>
      </label>

      <br />

      <label className="opcao">
        <input
          type="checkbox"
          id="DAFE-14"
          value="Google Analytics (GA4) / Mixpanel / Amplitude"
          onChange={handleChange}
        />
        <span>Google Analytics (GA4) / Mixpanel / Amplitude</span>
      </label>

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
}
