// Por defecto ya es publico
export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    const { year } = this;
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 9);
console.log(myDate2.day);
console.log(myDate2.isLeapYear);
