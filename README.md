# chartjs 
``
npm install react-chartjs-2 chart.js
``
## necessary components
``
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
``
## Register the necessary components
 ``
 ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
 ``