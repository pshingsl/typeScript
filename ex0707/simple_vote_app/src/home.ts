interface initialTodos {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
}

// initialTodos
let todo_a: initialTodos = {
  id:1,
  title: "HTML 기본 태그 복습",
  description: "p, h1~h6, ul 등",
  isCompleted: true
}
console.log(todo_a)

let todo_b: initialTodos = {
  id:2,
  title: "Flexbox 연습",
  isCompleted: true
}

console.log(todo_b)

//initialUsers
interface initialUsers{
  email: string;
  password:string;
}

let user1 : initialUsers = {
  email:"user1@example.com",
  password: "password123"
}

const delay = (ms : number ) => new Promise(resolve => setTimeout(resolve, ms));