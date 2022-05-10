export class MyService {
  static instance: MyService | null = null;

  private constructor(public name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('debería entrar una vez');
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }
}

const myService1 = MyService.create('service 1');
console.log(myService1.getName());

const myService2 = MyService.create('service 2');
console.log(myService2.getName());

console.log(myService1 === myService2);
