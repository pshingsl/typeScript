const initialTodos = [
  { id: 1, title: "HTML 기본 태그 복습", description: "p, h1~h6, ul 등", isCompleted: true },
  { id: 2, title: "Flexbox 연습", description: "justify-content, align-items 사용", isCompleted: false },
  { id: 3, title: "부트스트랩 Grid 시스템", description: "row, col 구조 이해", isCompleted: false },
  { id: 4, title: "로그인 UI 만들기", description: "email, password 입력 필드", isCompleted: true },
  { id: 5, title: "JS 이벤트 처리", description: "버튼 클릭 이벤트 연결", isCompleted: false },
  { id: 6, title: "localStorage 학습", description: "토큰 저장/조회 구현", isCompleted: true },
  { id: 7, title: "Card 컴포넌트 만들기", description: "할 일 항목 UI 구성", isCompleted: false },
  { id: 8, title: "filter 함수 사용법", description: "배열 조건 필터링", isCompleted: true },
  { id: 9, title: "삼항 연산자 복습", description: "렌더링 조건 표현에 사용", isCompleted: false },
  { id: 10, title: "Todo 삭제 기능 설계", description: "옵션 항목 (필수 아님)", isCompleted: false },
  { id: 11, title: "폼 유효성 검사", description: "필수 입력 검사", isCompleted: true },
  { id: 12, title: "자바스크립트 객체 이해", description: "key-value 구조", isCompleted: true },
  { id: 13, title: "로그인 성공 후 페이지 이동", description: "window.location.href 사용", isCompleted: false },
  { id: 14, title: "버튼 스타일링", description: "Bootstrap 버튼 색상 적용", isCompleted: true },
  { id: 15, title: "아이콘 활용", description: "FontAwesome 체크 아이콘 사용", isCompleted: true },
  { id: 16, title: "필터링 기능 완성", description: "전체, 완료, 미완료 구분", isCompleted: false },
  { id: 17, title: "DOM 요소 선택", description: "getElementById, querySelector", isCompleted: true },
  { id: 18, title: "모달 창 연습", description: "SweetAlert2 활용해보기", isCompleted: false },
  { id: 19, title: "Todo 항목 정렬하기", description: "시간순 정렬 옵션 기획", isCompleted: false },
  { id: 20, title: "배열 push/concat 복습", description: "할 일 추가 시 활용", isCompleted: true },
  { id: 21, title: "취소선 처리", description: "text-decoration: line-through", isCompleted: true },
  { id: 22, title: "CSS 상태에 따라 배경 변경", description: "완료 시 회색 배경", isCompleted: true },
  { id: 23, title: "할 일 개수 출력", description: "총 개수 or 남은 항목 수 표시", isCompleted: false },
  { id: 24, title: "날짜 출력 형식 기획", description: "옵션 항목", isCompleted: false },
  { id: 25, title: "addEventListener 사용", description: "이벤트 동적 연결", isCompleted: true },
  { id: 26, title: "폼 초기화 처리", description: "등록 후 input 값 비우기", isCompleted: true },
  { id: 27, title: "Toast 메시지 띄우기", description: "등록 완료 메시지", isCompleted: false },
  { id: 28, title: "Todo 목록 데이터 기반 렌더링", description: "map 함수 활용", isCompleted: true },
  { id: 29, title: "페이지 새로고침 방지", description: "form submit 막기", isCompleted: true },
  { id: 30, title: "할 일 상세 설명 보이기", description: "hover 또는 toggle 방식", isCompleted: false },
];

const initialUsers = [
  { email: "user1@example.com", password: "password123" },
  { email: "admin@example.com", password: "adminpass" },
  { email: "guest@example.com", password: "guest" }
];

// data.js initialTodos Homework
interface Todos {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
}

// initialTodos
let todo_a: Todos = {
  id: 1,
  title: "HTML 기본 태그 복습",
  description: "p, h1~h6, ul 등",
  isCompleted: true
}
console.log(todo_a)

let todo_b: Todos = {
  id: 2,
  title: "Flexbox 연습",
  isCompleted: true
}

console.log(todo_b)


// data.js user
interface Users {
  email: string;
  password: string;
}

let user1: Users = {
  email: "user1@example.com",
  password: "password123"
}
console.log(user1)


const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
console.log(delay)

// 비동기로 전환
export const todoAPI = {
  async fetchTodos(): Promise<Todos[]> {
    await delay(800);
    return [...initialTodos];
  },



  /* Omit<T, K>란? -> 타입 T에서 K 속성을 제외한 새로운 타입을 만든다.
    쓰는 이유
    1. 새로운 할 일을 추가할때 id는 사용자가 직접 정하지 않는다
    2. 이걸 강제로 코드로 강제하려고
  */
  async addTodo(todo:Omit<Todos, 'id'>): Promise<Todos> {
    await delay(500);
    const newTodo = {
      ...todo,
      id: Date.now(),
    };
    return newTodo;
  },


  async toggleTodo(todoId:number, isCompleted:boolean) : Promise<{id:number, isCompleted:boolean}> {
    await delay(300);
    return { id: todoId, isCompleted };
  },

  async deleteTodo(todoId:number): Promise<number> {
    await delay(300);
    return todoId;
  },

  /**
   * Partial<T>란?
   * 타입 T의 모든 속성을 선택적(optional)을 만든다
   * 
   * 쓰는 이유
   * 일부 속성만 바꿀 때
   * 예시)
   * 제목만 바꾸거나
   * 완료여부만 바꾸거나
   * 둘다 안 바꾸거나 
   * 이때 모든 속성은 ?(선택)이어야 한다
   */
   async updateTodo(todoId: number, updates: Partial<Omit<Todos, 'id'>>): Promise<Todos> {
    await delay(400);
    return { id: todoId, ...updates } as Todos;
  },
};

export const userAPI = {
  async login(email:string, password:string): Promise<{ success: true; user: Pick<Users, 'email'> }> {
    await delay(600);
    const user = initialUsers.find(u => u.email === email && u.password === password);
    if (user) {
      return { success: true, user: { email: user.email } };
    }
    throw new Error('Invalid credentials');
  },
};

interface TodoStats {
  total:number;
  completed:number;
  pending:number
  completionRate:number;
}

export const todoStats = {
  calculateStats(todos:Todos[]):TodoStats {
    const total = todos.length;
    const completed = todos.filter(todo => todo.isCompleted).length;
    const pending = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      pending,
      completionRate
    };
  },

    filterTodos(todos:Todos[], filter: 'completed'| 'pending') {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
      case 'pending':
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos;
    }
  },

  sortTodos(todos:Todos[], sortBy : 'completed' | 'title'| 'id' ) {
    return [...todos].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'completed':
          return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1;
        case 'id':
        default:
          return a.id - b.id;
      }
    });
  }
};

export const handleAPIError = (error:unknown) => {
  console.error('API Error:', error);
  return {
    success: false,
    error: error instanceof Error ? error.message : 'An unexpected error occurred'
  };
}; 
