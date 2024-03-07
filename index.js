import DashboardCsv from './src/dashboard_csv.js';
import { readFileSync } from 'fs';

const data = readFileSync('./test-data/test.csv', 'utf8');
let dash = new DashboardCsv(data);
dash.showData();

export default DashboardCsv;
