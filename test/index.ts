import axios from 'axios';

interface user {
  id: number;
  email: string;
  completed: boolean;
}
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  const todo = res.data as user;
  const ide = todo.id;
  console.log(todo);
});

let numbers = [1, 2, 3, 4];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
// const a: number = profile.age
const setAg = profile.setAge;
const { setAge }: { setAge: (a: number) => void } = profile;
// const { lat, lng }: {lat: number, lng:number} = profile.coords
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number }} = profile;

let cars = ['ford', 'toyota']
cars.map((car: string): string => {
  return car;
})

const impo: Date[] | string[] = []
const imp: (Date | string)[] = []