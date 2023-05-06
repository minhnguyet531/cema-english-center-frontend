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
  ArcElement,
} from 'chart.js';

import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const LineChart = () => {
  const labels = getlastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'Bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(107, 70, 193, 0.5)',
        backgroundColor: '#6b46c1',
      },
    ],
  };

  return <Line option={options} data={data} />;
};

export const DoughtnutChart = () => {
  const data = {
    labels: ['Subcription', 'Not Subcription'],
    datasets: [
      {
        label: 'Views',
        data: [19, 3],
        fill: false,
        borderColor: ['rgb(107, 70, 193)', 'rgb(214,43, 129)'],
        backgroundColor: ['rgba(63, 12, 171, 0.3)', 'rgba(214,43, 129, 0.3)'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

function getlastYearMonths() {
  const labels = [];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = new Date().getMonth();
  const remain = 11 - currentMonth;
  for (let i = currentMonth; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);
    if (i === 0) break;
  }

  for (let i = 11; i > remain; i--) {
    if (i === currentMonth) break;
    const element = months[i];
    labels.unshift(element);
  }

  return labels;
}
