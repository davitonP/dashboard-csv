export default class DashboardCsv {
  constructor(data) {
    this.data = data;
    this.separateData();
    this.separateByComma();
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
}
