interface initialTodos {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
}

let todo_a: initialTodos = {
  id:1,
  title: "HTML 기본 태그 복습",
  description: "p, h1~h6, ul 등",
  isCompleted: true
}

console.log(todo_a)