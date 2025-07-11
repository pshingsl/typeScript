// 사용자 인터페이스 (User Interface)정의
// 사용자는 Id 예: 'admin-001', 'user-001;
// 이름, 역할

enum Role {
  Admin = "admin",
  Regular = "regular"
}
interface User {
  Id: string;
  name: string;
  role: Role; // 인터페이스에서 역할은 지정 -> 고정이기 때문에 enum Role로 정의
}

// Book interface
// isbn string    책 고유 번호
// title          제목
// author         저자
// publishedYear  출판연도
// isAvailable    대출 가능 여부

interface Book {
  isbn: string;
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

// LoanRecord
// loanId:  // 숫자
// bookIsbn: // 문자
// userId: // 문자
// loanDate: // 날짜
// dueDate: // 날짜
// returnDate: 날짜인데 선택값으로 지정
interface LoanRecord {
  loanId: number;
  bookIsbn: string;
  userId: string
  loanDate: Date;
  dueDate: Date;
  returnDate?: Date;
}

// 데이터 정의
// 도서 목록을 저장 Book이 가지는 값만 가져와야함
let libraryBooks: Book[] = []
// 회원 목록 저장  User가지는 값만 가져와야함
let libraryUsers: User[] = []
// 대출 기록을 저장 LoanRecord이 가지는 값만 가져와야함
let loanRecords: LoanRecord[] = []

// 3시부터 기능 만든다
// isAdmin함수 -> 입력시 유저 정보를 받음 
// 리턴으로 user의 role값이 admin이면 true
// user의 role값이 admin이면 false
function isAdmin(user: User): boolean {
  return user.role === Role.Admin
}

// isRegularUser
function isRegularUser(user: User): boolean {
  return user.role === Role.Regular // 아래 내용을 이렇게 변경 가능
  // if (user.role === Role.Regular) {
  //   // regular 경우
  //   return true;
  // }
  // // regular 아닌 경우
  // return false;
}

// * - **도서 등록 기능** - 관리자만 등록이 가능함
// 도서 등록 함수가 호출되면, addBook
// user가 권한이 있는지 확인하고
//  enum or User에 값 or 함수에 만든거 가져오기?

// book 정보가 이미 등록되어 있는지 확인하  고 
// ->초반에 책정보가 없다 
// -> 조건문 있는지 여부 확인 아니면 filter or Set

// 없는 경우에 추가 있으면 중복이니까 추가하면 안됨
// return 없음
function addBook(user: User, book: Book):void {
// user가 권한이 있는지 확인하고
if(!isAdmin(user)){
  console.log("권한없음");
  return;
}
// book 정보가 이미 등록되어 있는지 확인하고 
if(libraryBooks.some(b => b.isbn === book.isbn)){
  console.log("이미있음");
  return;
}
// 없는 경우에만 추가
libraryBooks.push(book);
}
// 호출
// addBook();


/** 
 * 도서 삭제 4
 * 1) 관리자인지 확인
 * 2) 도서 목록에 있는지 확인
 * 3) 대출 진행 진행 중이면 삭제 불가능
 * 4) 삭제
*/
function removeBook(user: User, isbn: Pick<Book, 'isbn'>):void{
// 관리자인지 확인
if(!isAdmin(user)){
  console.log("권한없음");
  return;
}
// 도서 목록에 있는지 확인
const index = libraryBooks.findIndex(book => book.isbn === isbn.isbn);
if (index === -1){
  console.log(`ISBN ${isbn}인 도서를 찾을 수 없습니다`);
  return;
}

// 책 대출 여부 확인
if(!libraryBooks[index].isAvailable){
  console.log(`해당 도서가 대출 중 입니다`)
}

// 책 대출 여부 확인
const removeBook = libraryBooks.splice(index, 1)[0];
 console.log(`도서 '${removeBook.title}' (ISBN: ${isbn})이(가) 삭제되었습니다`);
}

// 책 [1,2,3,4,5]에서 특정 값 삭제 splice 사용


// 도서 대출 기능 5
// 일치할 경우 리턴값 숫자 또는 --1
function borrowBook(user:User, isbn: string):number {
//유저 확인
if(!isRegularUser(user)){
   console.log("권한없음");
   return -1;
}

// 입력 받은 isbn이 도서 목록에 있는지 확인
const index = libraryBooks.findIndex(book => book.isbn === isbn);
// 없으면 -1
if (index === -1){
  console.log(`ISBN ${isbn}인 도서를 찾을 수 없습니다`);
  return -1;
}
// 해당 도서가 대출 중이면 -1 리턴
if(!libraryBooks[index].isAvailable){
  console.log(`이미 대출중 입니다`);
  return -1;
} 
// 해당 도서가 대출이 가능하면 해당 index값 리턴
  return index;
}

// 유저 생성
function registerUser(user:User, { id, name, role }:User){
  // 관리자인지 확인
  if(!isAdmin(user)){
  console.log("권한없음");
  return;
}

// 유저 리스트에 존재하는지 확인
  const exist = libraryUsers.some(b => b.Id === user.Id)
  if(exist){
    console.log(`이미 존재합니다.`)
    return;
  }
// 새로운 유저 추가
const newUser : User = {
  Id: id,
  name:name,
  role:role
}
    libraryUsers.push(newUser)
}