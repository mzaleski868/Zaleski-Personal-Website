import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data?: number[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  // Generate labels for the x-axis (just simple numeric indices in this case)
  const labels = data ? data.map((_, index) => index + 1) : undefined;

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Data Points',
        data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Line Chart Example',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Index',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div>
      {data && data.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
};

export default LineChart;
