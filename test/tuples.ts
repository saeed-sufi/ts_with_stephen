const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// the following type is what makes the pepsi a tuple:
const pepsi: Drink = ['brown', true, 40]

// type aliases are perfect for this situations
type Drink = [ string, boolean, number ]
