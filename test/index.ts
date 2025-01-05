import axios from "axios";

interface user {
  id: number
  email: string;
  completed: boolean
}
const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(res => {
  const todo = res.data as user;
  const ide = todo.id;
  console.log(todo)
})