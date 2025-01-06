class Vehicle {

  model: number = 1996
  constructor(protected color: string) {}
  protected honk(): void {
    console.log('beep')
  }

}

const vehicle = new Vehicle('red')
console.log(vehicle.model)
class Car extends Vehicle {
  constructor(protected wheels: number, color: string) {
    super(color)
  }
  private drive(): void { 
      console.log('vroom')
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'red')
// car.startDrivingProcess()

