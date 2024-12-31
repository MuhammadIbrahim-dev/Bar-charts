// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Scale } from 'chart.js';
import { color } from 'chart.js/helpers';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'red',
            'blue',
            'black',
            'green',
            'gray',
            'blue'
        ],
 
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      datasets :{
        formatter:(value ,context) =>{
            const total = context.Chart.data.datasets[0].data.reduce((acc ,val) => acc + val,0);
            const percentage = ((value / total) *100).toFixed(2)+'%';
            return percentage;
        }
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
      Animation:{
        tension: {
            duration : 1000,
            easing: 'linear',
            from: 1,
            to :0,
            loop: true
        }
      },
      scale:{
        y :{
            min :0,
            max:100
        }
      }
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;