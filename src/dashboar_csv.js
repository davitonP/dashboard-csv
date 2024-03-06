export class DashboardCsv {
  constructor() {
    this.csv = new Csv();
  }

  export() {
    this.csv.export();
  }
}
