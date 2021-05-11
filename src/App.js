import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import Doughnut from "./components/DoughnutChart";

function App() {
  return (
    <div className="App">
      <div className="chart">
        <LineChart />
        {/* <BarChart /> */}
        {/* <Doughnut /> */}
      </div>
    </div>
  );
}

export default App;
