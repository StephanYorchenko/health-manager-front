import React, {useMemo} from 'react';
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
import styled from "styled-components";

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
  borderWidth: 5,
  scales: {
    y: { // defining min and max so hiding the dataset does not change scale range
      min: 34,
      max: 43
    },
    xAxes: {
      display: false
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

const ParentDiv = styled.div`
  max-width: 600px;
`;

export const Chart = ({data} : ChartProps) => {
  const chartDataset = useMemo(() => {
    return {...data, backgroundColor: "green"}
  }, [data]);
  return (
    <ParentDiv>
      <Line options={options} data={chartDataset}/>
    </ParentDiv>
  );
}