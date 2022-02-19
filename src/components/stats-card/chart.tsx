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
    tooltip: {
      callbacks: {}
    }
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
    return {...data}
  }, [data]);

  const yFixedOptions = useMemo(() => {
    const minY = Math.min(...data.datasets.map(x => Math.min(...x.data))) - 2;
    const maxY = Math.max(...data.datasets.map(x => Math.max(...x.data))) + 2;
    return {
      ...options,
      scales: {...options.scales, y: {min: minY, max: maxY}},
      plugins: {...options.plugins, tooltip: {callbacks: {
        label: (context: any) => {
          return context.parsed.y
        },
      }}}
    };
  }, [data]);
  return (
    <ParentDiv>
      <Line options={yFixedOptions} data={chartDataset}/>
    </ParentDiv>
  );
}