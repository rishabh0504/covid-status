import React, { useEffect, useState } from 'react';
import { getStatistics } from './api/covid-api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.component';
import TableComponent from './components/Table.component';
import ChartComponent from './components/Chart.component';

const formatData = (allStatistics) => {
  const data = allStatistics.map(item => {
    return {
      country: item.country || 'NA',
      totalCases: item.cases.total || 'NA',
      active: item.cases.active || 'NA',
      death: item.deaths.total || 'NA',
      recovered: item.cases.recovered || 'NA'
    };
  })
  return data;
}

const formatChartData = (allChartData) => {
  const allData = allChartData.map(item => {
    return {
      country: item.country,
      totalCases: item.totalCases || 'NA',
    }
  })
  return allData;
}

const columns = [
  { id: 'country', label: 'Country', minWidth: 100 },
  { id: 'totalCases', label: 'Total Cases/million', minWidth: 80 },
  { id: 'active', label: 'Active /million', minWidth: 80 },
  { id: 'death', label: 'Death Cases/million', minWidth: 80 },
  { id: 'recovered', label: 'Recovered/million', minWidth: 80 },
];

function App() {

  const [countryName, setCountryName] = useState("");
  const [statistics, setStatistics] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(async () => {
    const statistics = await getStatistics();
    const data = formatData(statistics.response);
    const chartData = formatChartData(data.slice(0, 7));
    setStatistics(data);
    setChartData(chartData);
    setFilteredData(data);
  }, []);

  useEffect(() => {
    const filteredData = statistics.filter(item => item.country.toLowerCase().indexOf(countryName.toLowerCase()) > -1);
    setFilteredData(filteredData);
  }, [countryName]);

  return (
    <div>
      <Header />
      <div className="col-12 filter mt-4 mb-4 ml-3 mr-3">
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search By country..."
            value={countryName}
            onChange={e => setCountryName(e.target.value)} />
        </div>
      </div>
      <TableComponent filteredData={filteredData} columns={columns} />

      <ChartComponent chartData={chartData} />
    </div>
  );
}

export default App;
