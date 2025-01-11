import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
/* 
const numbersCollection = new NumbersCollection([3,0,-1,100,6])
const sorter = new Sorter(numbersCollection);
sorter.sort()
console.log(numbersCollection.data)
 */

const charactersCollection = new CharactersCollection('sAeed')
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(4)
linkedList.add(5)
linkedList.add(-1)
linkedList.add(3)

// const sorter1 = new Sorter(linkedList)
linkedList.sort()
linkedList.print()
