class House<T> {

}

class Car<T> {
  print() {
    console.log('I am a Car')
  }
}

interface Printable {
  print()
}

// Type T is going to have all the properties that the interface Printable has.
function printHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHouseOrCar([new Car(), new Car()])