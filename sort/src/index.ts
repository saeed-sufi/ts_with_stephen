import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([3,0,-1,100,6])
const sorter = new Sorter(numbersCollection);
sorter.sort()
console.log(numbersCollection.data)

