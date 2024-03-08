import DashboardCsv from './src/dashboard_csv.js';
import { readFileSync } from 'fs';

const data = readFileSync('./test-data/test.csv', 'utf8');
let dash = new DashboardCsv(data);
dash.orderDataByDate();
dash.convertToNumber();

dash.showHeaders();
dash.showDeltaValues();
dash.showData();
console.log(dash.getLastMoment());


// get the data from the csv file
// by header
// console.log("Prueba de obtener data by header")
// let presion = dash.getData(['time', 'velocity']);
// console.log(presion);

// by rows
console.log("Prueba de obtener data by rows")
let rows = dash.getData(null, 5);
console.log(rows);

export default DashboardCsv;
