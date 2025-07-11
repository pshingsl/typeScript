// 사용자 인터페이스 (User Interface)정의
// 사용자는 Id 예: 'admin-001', 'user-001;
// 이름, 역할

interface User {
  Id: string;
  name: string;
  role: 'admin' | 'regular'
}