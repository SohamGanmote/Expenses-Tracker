import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const datapointValues = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...datapointValues);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lebel={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
