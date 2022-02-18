import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: { // defining min and max so hiding the dataset does not change scale range
      min: 34,
      max: 43
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

type Dataset = {
  label: string;
  data: number[];
}

type ChartData = {
  labels: string[];
  datasets: Dataset[]
}

type ChartProps = {
  data: ChartData
}

export const Chart = ({data} : ChartProps) => {
  return <Line options={options} data={data}/>;
}