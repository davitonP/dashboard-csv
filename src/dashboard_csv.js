import moment from "moment";

export default class DashboardCsv {

  /*
  data: [
    ['date', 'impressions', 'clicks', 'revenue'],
    ['2019-01-01', '100', '10', '1.23'],
    ['2019-01-02', '200', '20', '2.23'],
    ['2019-01-03', '300', '30', '3.23']
  ]
  */
  constructor(data) {
    moment.locale('es');
    this.data = data;
    this.last_moment = null;
    this.separateData();
    this.separateByComma();
    this.headers();
    this.removeEmptyRows();
    this.createDeltaValues();
    this.last_moment = this.lastMoment();
    console.log(this.last_moment);
    // this.getDeltaValues();
  }

  headers() {
    this.header = this.data.shift();
  }
  getHeaders() {
    return this.header;
  }
  showHeaders() {
    console.log(this.header);
  }

  createDeltaValues() {
    this.delta = [];
    let length = this.data.length;

    let last = this.data[length - 2];
    let current = this.data[length - 1];

    // console.log(last);
    // console.log(current);

    for (let i = 0; i < last.length; i++) {
      this.delta.push(current[i] - last[i]);
    }

    this.delta[0] = moment(last[0]).from(current[0]);
  }
  showDeltaValues() {
    console.log(this.delta);
  }

  getNRows() {
    // console.log(this.data);
    return this.data.length;
  }

  separateData() {
    this.data = this.data.split('\n');
  }
  
  separateByComma() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = this.data[i].split(',');
    }
  }

  showData() {
    console.log(this.data);
  }

  orderDataByDate() {
    this.data.sort((a, b) => {
      return new Date(a[0]) - new Date(b[0]);
    });
  }

  convertToNumber() {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 1; j < this.data[i].length; j++) {
        try {
          this.data[i][j] = this.data[i][j].replace(/,/g, '');
          this.data[i][j] = Number(this.data[i][j]);
        } catch (e) {
          console.log(e);
        }
      }
    }
  }


  lastMoment() {
    let last = this.data[this.data.length - 1][0];
    return moment(last).fromNow();
  }
  removeEmptyRows() {
    this.data = this.data.filter(row => {
      return row.length > 2;
    });
  }
}
