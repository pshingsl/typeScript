/** 1시 수업
 * 제너릭(Generic)
 * 프로그래밍을 하면서 다양한 데이터를 다루게 되는데, 이 데이터들은 안정적을 처리하기 위해 타입이 나옴
 * 어떤 함수나 클래스가 여러 타입을 유연하게 받아들일 수 있어야 할 때 필요함.
 * 
 * 나온이유 
 * 1.재사용 하기위해서 -> 빠른 성능 내기 위해서 -> 속도가 빠르면 사용자가 만족함
 * 2.제너릭이 나오기전에 any를 사용했는데 런타임 에러가 발생되서 문제해결하기 위해 나옴
 * 3.any를 사용하면 모든 타입을 받을 수 있지만, 타입스크립트의 가장 큰 장점인 정적 타입 검사가 없어진다
 * 
 * 제너릭은 타입을 매개변수처럼 사용하는 방법
 * 문제해결하기 위해 unknown이 나오며 타입체크를 통해 런타임 에러 해결
 * 아무 타입이나 들어오고 아무 타입으로 나가니 IDE 컴팡일러가 도와줄 수 없기 때문에 등장
 * 마치 함수의 인자처럼, 나중에 타입을 넘길 수 있는 유연한 방식
 */

function print(value: any): any {
  console.log(value);
  return value;
}

//T는 타입 변수(Type variable)
// `idenntity<number>(123)`이라고 호출하면 T는 `number`가 되고.
// `idenntity<string>('hello')`라고하면 T는 `string`가 된다.
// T에는 어떤 것도 들어 올 수 있다
function identity<T>(value: T): T {
  return value;
}

/** 유틸리티 타입(Utility Types)
 * TypeScript의 유틸리티 타입은 기존 타입을 기반으로 새로운 타입을 쉽게 생성하고 변환할 수 있도록 돕는 강력한 기능
 * 이를 토해 코드의 재사용성을 높이고 타입 추론을 더욱 효과적으로 활용할 수 있다
 * 
 * 1) Partial<T> 타입
 * Partial<T> 타입 T는 모든 속성을 선택적(?)으로 만듬
 * 즉, 해당 타입의 객체를 생성할 때 일부 또는 모든 속성을 생략할 수 있게 해준다
 * 보통은 객쳉의 일부 속성만 업데이트하거나, 특정 필드가 필수가 아닌 경우 사용한다.
 * 
 * 2) Required<T>
 * Required<T>는 Partial<T>와 반대로, 타입 T의 모든 속성을 필수적으로 만듬
 * 
 * 3) ReadOnly<T>
 * ReadOnly<T>는 타입 T의 모든 속성을 읽기 전용(readonly)으로 만든다
 * 한 번 할당된 속성 값은 이후에 변경할 수 없다.
 * 
 * 4) Pick<T, K>
 * Pick<T, K>는 타입 T에서 K에 해다아하는 속성들만 선택하여 새로운 타입
 * 여기서 K는 T의 속성 이름들의 유니온 타입
 * 
 * 5) Omit<T, K>
 * Omit<T, K>는 Pick<T, K>와 반대로, 타입 T에서 K에 해당하는 속성들만 제외하여 새로운 타입을 만듬
 * 기존 타입에서 불필요한 속성들을 제거하여 새로운 타입을 정의할때 사용
 * 
 */

// Partial<T> 타입 예시
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

// 예시에서 Product의 값이 부분적으로 올 수 있다. 전체가 오거나 한개가 오거나 개발자가 정할 수 있다
function updateProduct(product: Product, fieldsToUpdate: Partial<Product>): Product {
  return { ...product, ...fieldsToUpdate };
}

const originalProduct: Product = {
  id: "A100",
  name: "Phone",
  price: 13000,
  description: "choice"
}

const upadateProduct1 = updateProduct(originalProduct, { name: "keybord" });
console.log(upadateProduct1)

const upadateProduct2 = updateProduct(originalProduct, {
  price: 1300,
  description: "New Model"
})

// Required<T> 타입 예시
// Required<T>는 Partial<T>와 반대로, 타입 T의 모든 속성을 필수적으로 만듬

interface UserProfile {
  username: string;
  email: string;
  phone?: string;
  address?: string
}

type CompleteUserProfile = Required<UserProfile>;

const newUser: CompleteUserProfile = {
  username: "James",
  email: "w1234@gmail.com",
  phone: "010-1234-5678",
  address: "GBK"
}

// 에러난 이유: Required<T> 인터페이스 정의한 모든 속성을 필수적으로 적어야함
// 모든 속성을 사용하지 않아서 에러남
// const incompleteUser : CompleteUserProfile = {
//   username: "string",
//   email: "string",
// }

/*ReadOnly<T> 타입 예시
 ReadOnly<T>는 타입 T의 모든 속성을 읽기 전용(readonly)으로 만든다
 한 번 할당된 속성 값은 이후에 변경할 수 없다.
 예시로 주민번호, 유저의 고유한 아이디가 있다. -> 상수*/

interface Point {
  x: number
  y: number
}

const mutablePoint: Point = { x: 10, y: 20 };
mutablePoint.x = 15;
console.log(mutablePoint);

type ImmutablePoint = Readonly<Point>
const immutablePoint: ImmutablePoint = { x: 30, y: 40 };
//immutablePoint.x= 35; 에러 이유 Readonly 유틸리티 선언 후 한번 할당 된 값들은 변경하면 안됨 
console.log(immutablePoint)

// 2시
/* Pick<T, K> 예시
 * Pick<T, K>는 타입 T에서 K에 해다아하는 속성들만 선택하여 새로운 타입
여기서 K는 T의 속성 이름들의 유니온 타입*/
interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

// T = Customer , K = firstName | lastName 유니온 타입으로 정의
//union 타입은 변수가 여러 타입 중 하나를 가질 수 있도록 선언할 때 사용
// 'A 또는 B 또는 C'와 같은 논리적 OR(|)=유니온타입 연산자 처럼, 정의된 여러 타입 중 하나만 OK
type CustomerName = Pick<Customer, "firstName" | "lastName">;

const CustomerInfo: CustomerName = {
  firstName: "Alice",
  lastName: "Smith"
};
console.log(CustomerInfo) // {firstName : "Alice",  lastName : "Smith"}

// 에러 발생 -> Pick<Customer, "firstName" | "lastName">로 했는데 <>안에 email을 정의 하지 않았는데 사용해서 에러남
// const invalidCustomerInfo: CustomerName = {
//   firstName: "Alic",
//   lastName: "Smit",
//   email: "w2ok@naver.com"
// }

/* Omit<T, K> 예시
Omit<T, K>는 Pick<T, K>와 반대로, 타입 T에서 K에 해당하는 속성들만 제외하여 새로운 타입을 만듬
  기존 타입에서 불필요한 속성들을 제거하여 새로운 타입을 정의할때 사용*/

interface Employee {
  id: string;
  name: string;
  department: string;
  salary: number;
  hiderate: Date;
}

//Omit<Employee, "salary" | "hiderate">; 로 만들면 salary" | "hiderate를 제외한 것으로 만들면됨
// salary" | "hiderate 둘다 있거나 둘 중 하나라도 포함해서 만들면 에러 발생
type PublicEmployeeInfo = Omit<Employee, "salary" | "hiderate">;

const publicInfo: PublicEmployeeInfo = {
  id : "EMP01",
  name : "Alpha",
  department : "UI"
}
console.log(publicInfo)

const publicInfo2: PublicEmployeeInfo = {
  id : "EMP01",
  name : "Alpha",
  department : "UI",
  // salary:1000; salary" | "hiderate 둘다 있거나 둘 중 하나라도 포함해서 만들면 에러 발생
}

// 2시 실습
/** 도서관 관리 프로그램
 * TypeScript에서 배웠던 인터페이스, 타입 별칭, 그리고 타입 가드를 활용하여 온라인 도서관 관리 프로그램
 *
 * 온라인 도서관 관리 프로그램은 다음과 같은 기능을 제공합니다:
 * - **도서 등록 기능** - 관리자 (Admin)
 * - **도서 삭제 기능** - 관리자 (Admin)
 * - **도서 대출 기능** - 사용자 (User)
 * - **도서 반납 기능** - 사용자 (User)
 * - **도서 검색/조회 기능**
 * - 관리자, 사용자 (제목, 저자, ISBN 등으로 검색)
 * - 회원 등록/조회 기능** - 관리자
 */