/**
 * 1) boolean
  - boolean 타입은 참(true) 또는 거짓(false) 두 가지 값만을 나타냄
  - 주로 조건문 (예: `if`문), 비교연산 (예: `a===b`), 그리고 어떤 상태의 유효성 검사 등에서 사용
  - 2가지 상태 (예/아니오, 활성/비활성 등)를 표현할 때는 `boolean`을 사용해야 합니다
  - 3가지 이상 상태를 표현하고 싶을때 enum사용
 */
function checkUserStatus(isLoggedIn: boolean): string {
  if (isLoggedIn) {
    return "사용자 로그인되어 있습니다"
  } else {
    return "사용자 로그인되어 있지 않습니다"
  }
}
const currentUserLoggedIn: boolean = true;
const message = checkUserStatus((currentUserLoggedIn))
console.log(message)
/*
 2) number
- number 타입은 TS에서 **모든 종류의 숫자**를 나타냄
- 일반적인 프로그래밍 언어에서 정수와 실수를 구분하여 
  다른 타입을 사용하지만 ts에서는 'number'타입 하나로 이 모든 것을 처리
- 심지어 2진수, 8진수, 16진수 리터럴까지도 `number` 타입으로 표현할 수 있음
- 모든 수치 연산에 사용되는 값은 number 타입으로 명시해주세요
*/

function calculateDiscountPrice(originalPrice: number, discountRate: number): number {
  return originalPrice * (1 - discountRate);
}
const productPrice: number = 12500.50;
const discount: number = 0.15;
const finalPrice = calculateDiscountPrice(productPrice, discount);
console.log(`원가${productPrice}원에서 ${discount * 100}%할인된 가격: ${finalPrice.toFixed(2)}원`)

/**
 * 3) string
 - string 타입은 텍스트 데이터를 나타냄. 작은따옴표(`'`), 큰따옴표(`"`) 또는 백쿼트 (``)를 사용하여
 문자열을 표현

 - 특히 백쿼트 (``)는 ES6부터 도입된 템플릿 리터럴을 사용할 때 쓰이며, 문자열 내부에 변수나
 표현식을 쉽게 삽입할 수 있도록 해줍니다. 'string' 타입은 텍스트를 조작하거나, 다른 텍스트와
 합치거나, 특정 문자열을 찾고 대체하는 등 다양한 텍스트 관련 작업에 활용
 */

function generateWelcomeMessage(userName: string, appName: string): string {
  return `안녕하세요`
}

/**
* 4) Array
- 배열은 같은 타입의 여러 원소들을 순서대로 저장하는 자료구조
- 특정 타입 뒤에 [ ]를 붙여서 명시
- ts에서 같은 타입의 데이터만 들어올 수 있다
*/
function calculateAverage(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  let sum: number = 0;
  for (const grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}
const studentGrades: number[] = [88, 92, 75, 95, 80];
const averageGrade = calculateAverage(studentGrades);
console.log(`학생 평균 점수" ${averageGrade.toFixed(2)}점`); // toFixed(2):소수 둘째 자리까지 나오게 함
const fruits: string[] = ["사과", "바나나", "오렌지"];
fruits.push("포도");
console.log(fruits)


/**
 * 5) 튜플 (Tupple)
 * - 튜플은 시도 다른 타입의 원소들을 정해진 순서와 개수에 맞게 가질 수 있는 특수한 형태의 배열
 * - 각 위치에 올 수 있는 원소의 타입을 미리 명확하게 정의해야 한다.
 * - 자바스크립트의 배열과 같음
 * 
 * 튜플하고 배열차이
 * 가장 큰 차이는 원소의 타입 규칙!
 * 
 * 배열 string[] => 다 문자열만로 와야함
 * 튜플 [string, number] => 각 위치에 오는 타입을 다를 수 있다. 다만 순서와 개수를 미리 지정해야한다.
 * 튜플은 최대한 안 쓰는게 좋다 -> 왜 -> 이유는 나중에 컴파일 할때 런타임 에러를 나타 낼 수 있음-> 타입스크립트를 사용할 이유가 없다
 */
const userInfo: [string, number, boolean] = ["글자", 35, true]; // 문자열, 숫자, 비교형 순서대로 선언 값도 맞게 순서대로 할당 해야함
console.log(`이름: ${userInfo[0]} 나이: ${userInfo[1]}  활성: ${userInfo[2]} `)

/**
* 6) enum
* - enum은 열거형 데이터 타입이라고 불림
* - 관련된 상수값의 집합에 의미있는 이름을 부여하여 코드를 더 쉽게 관리할 수 있게 만들어주는 타입
* - enum 내부의 각 요소는 별로 설정 값을 지정하지 않으면, 0으로 시작함
* - enum에는 숫자, string만 사용할 수 있다
* - enumd은 명확하게 관련된 상수 값들을 그룹화하여 코드를 더 읽기 쉽게 만들고 싶을때 사용하는 것이 좋다
* - 하지만 값의 수가 적거나, 값들 사이의 관계가 뚜렷하지 않으면 String 리터럴 유니온
* 타입등을 고려하는 것이 좋을 수 있다
*/

enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
}

// 각 요소는 별로 설정 값을 지정하지 않으면, 0으로 시작함
// ts에서 객체 안에다 SUNDAY:0으로 할당함 요소들을 배열 형식으로 할당
// enum 변하지 않는것 상수 예시-> 요일
enum DayOfWeek {
  SUNDAY, // 0
  MONDAY, // 1
  THEDAY,
  WEDENDAY,
  THURSAY,
  FRIDAY,
  SATDAY,
}

const today: DayOfWeek = DayOfWeek.MONDAY;

console.log(`현재 요일: ${DayOfWeek} (${DayOfWeek.MONDAY})`)

/**
 * const 한번 선언만하면 값이 안 바뀜
 * const numbers = [1, 2, 3, 4, 5]
 * numbers.push(6)
 * const numbers = [1, 2, 3, 4, 5, 6] // 이러면 상수는 아님
 *  - 하지만 객체난 배열 내부의 속성 또는 원소는 변경될 수 있다. 타입스크립트도 적용됨
 */

const PI: number = 3.14159;
console.log(`PI: ${PI}`);

const colors: string[] = ["red", "green", "blue"];
console.log(`초기 색상: ${colors}`)

colors.push('yellow')
console.log(`변경 색상: ${colors}`)

/** 4
 * readonly
 * - readonly 키워드는 TypeScript에서만 사용되는 키워드
 * - 클래스의 속성(Property)이나 인터페이스의 속성을 불변(Immutable)으로 만들 때 사용
 * - readonly로 선언된 속성은 생성자(constructor) 내부에서 한 번만 초기화될 수 있으며,
 *   그 이후로는 값을 변경할 수 없다.
 * - const가 변수 자체의 재할당을 막는다면, readonly는 객체 속성의 재할당을 막는 데 특화되어 있다
 *   타입스크립트는 클래스를 자주 사용함
 * 
 *  const랑 readonly 모두 불변성을 보장하는데 사용
 * const:변수, readonly:객체속성 
 */

// class Product {
//   readonly productId: string;
//   productName: string;
//   price: number;

//   constructor(id: string, name: string, price: number) {
//     this.productId = id;
//     this.productName = name;
//     this.price = price;
//   }
// }

// const laptop = new Product("LAPTOP001", "최신형 노트북", 1500000);
// console.log(`제품ID": ${laptop.productId}`)
// console.log(`제품명: ${laptop.productName}`)
// laptop.productName = "고급형 노트북"
// console.log(`변경된 제품명: ${laptop.productName}`)

// laptop.productId = "Laptop2" error

/**
 * any
 * any는 TS에서 모든 타입의 슈퍼타입-> 최상위에 있음 
 * any 타입으로 선언된 변수에는 어떤 타입의 값이든 저장할 수 있다는 으미
 * JavaScript의 Object 타입처럼, 모든 값을 수용할 수 있는 '만능' 타입
 * 최대한 안 사용하는걸 권장
 * 
 * any 타입은 TypeScript의 타입 검사 기능이 무력화되어, 
 * 잠재적인 런타임 오류를 컴파일 시점에 잡아내지 못함 
 */
let flexibleValue: any;

flexibleValue = 10;
console.log(flexibleValue);

flexibleValue = "자유로운 문자열"
console.log(flexibleValue);

flexibleValue = { id: 1, type: "data" };
console.log(flexibleValue);

let num: number = flexibleValue;
console.log(num)

/**
 * unknwon
 * 형식은 any랑 같음 -> 비슷하게 모든 타입의 값을 저장할 수 있다
 * any와는 다르게 더 안전한 방식으로 동작
 * unknwon 타입의 변수에 할당된 값을 다른 특징 타입의 변수에 할당하거나,
 * 그 값을 직접 사용하려면 명시적으로 타입이 무엇인지 확인
 * 
 * 즉, 사용하기 전에 반드시 타입 체크를 하도록 강제하도록 만듬
 * 
 * 아예 모를때는 어쩔 수 없이 any or unknwon으로 지정 <-> 그게 아니면 union으로 지정
 */

/**
 * union 타입 
 * 나온 이유 ->  unknwon땜에 나옴
 * ->unknwon 타입은 안전하게 타입을 다룰 수 있지만, 결국 값을 사용할 때마다 매번 타입을 확인해야 번거러옴
 * union 타입은 변수가 여러 타입 중 하나를 가질 수 있도록 선언할 때 사용
 * - 'A 또는 B 또는 C'와 같은 논리적 OR(|)=유니온타입 연산자 처럼, 정의된 여러 타입 중 하나만 OK
 * 
 * 나온이유: 구체적으로 무엇인지를 알 수 있기 때문이다 -> any or unknwon보다 명확하다
 */
//union 타입 매개변수
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(`ID는 문자열 입니다; ${id.toUpperCase()}`)
  } else {
    console.log(`ID는 숫자입니다; ${id.toFixed(2)}`)
  }
}
printId(2)
printId("12")

/**
 * TypeScript 사용하는 이유는 코드의 안정성과 유지보수를 높이려고 사용
 * 
 * any, unknwon을 남용 악마 유혹
 * 변수가 가질 수 있는 타입을 최대한 구체적으로 명시하려는 습관을 들이는 것이 중요합니다
 */

/**
 * // 5시 수업
 * 타입 가드(Type Guard)
 * TypeScript는 코드를 실행하기 전에 타입 오류를 잡는 강력한 기능을 제공하지만,
 * 때로는 런타임에 변수의 실제 타입을 확인하고 싶을 때가 있다.
 * 
 * 이때 사용하는 것이 바로 **타입 가드(Type Guard)**
 * 
 * 타입 가드는 특정 스코프 내에서 변수의 타입을 좁히는(narrowing) 역할을 하며,
 * 해당 타입의 속성이나 메서드를 안전하게 사용할 수 있도록 돕습니다
 * 
 * typeof 
 * 원시 타입(String, number, boolean, symbol, undefined, bigint)을 체크할 때 사용
 * 
 * instanceof
 * 특정 클래스의 인스턴스인지 확인할 때 사용
 * 
 * in 연산자
 * 객체안에 특정 속성(Property)이 존재하는지 확인할 때 사용
 * 
 * 사용자 정의 타입 가드(실제로 잘 쓰이지 않음) 
 * 개발자가 직접 타입을 좁히는 함수를 정의
 * 반환 타입에 parameter is Type 형태의 타입 프레디케이트(Type Predicate)를  사용
 */

// class instanceof 예제
class Car {
  drive() {
    console.log("자동차가 운전됩니다");
  }
}

class Bicycle {
  pedal() {
    console.log("자전거 페달을 밟습니다");
  }
}

function moveVehicle(vehicle: Car | Bicycle) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.pedal
  }
}

// in 연산자
interface Dog {
  bark(): void;
  breed: string;
}

interface Cat {
  meow(): void;
  purr: boolean;
}

function makeSound(animal: Cat | Dog) {
  if ('bark' in animal) {
    animal.bark();
    console.log(`품종: ${animal.breed}`)
  } else {
    console.log(`골골송 여부: ${animal.purr}`)
  }
}
const myDog: Dog = { bark: () => console.log("멍멍!"), breed: "골든 리트리버" }
const myCat: Cat = { meow: () => console.log("야옹~"), purr: true }

//사용자 정의 타입 가드
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim! == undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

/**
 * 인터페이스(Interface)
 * 인터페이스는 TS에서 객체의 모양을 정의하는 도구
 * 
 * 인터페이스 상속(Interface Extension)
 * 인터페이스는 extends 키워드를 사용하여 다른 인터페이스의 정의를 상속(확장)받을 수 있다
 * 
 * 코드의 재사용성을 높이고, 관련된 인터페이스 간의 계층 구조를 명확히 하는 데 도움을 준다
 * 여러 인터페이스를 동시에 상속받는 것도 가능함
 */

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // 옵션값 있을 수도 있고 없을 수 도 있다.
  readonly createdAt: Date;
}

const maptop: Product = {
  id: 101,
  name: "울트라북",
  price: 15000,
  createdAt: new Date(),
}
console.log(maptop)

const keyboard: Product = {
  id: 101,
  name: "키보드",
  price: 12000,
  description:"게이밍",
 createdAt: new Date()
}

//함수 타입 인터페이스 
// 인터페이스 함수 형식을 똑같이하면 됨
interface SearchFucntion {
  (source : string, subString : string) : boolean;
}
let mySearch: SearchFucntion;

mySearch = function(src:string, sub:string): boolean{
  const result = src.indexOf(sub);
  return result > -1;
};

console.log(mySearch("안녕하세요 TypeScript", "Type"))

let anotherSearch : SearchFucntion = function (text: string, 
  keyword: string): boolean {
    return text.includes(keyword);
  };
  console.log(anotherSearch("안녕 TypeScript", "Type"))

  /**
 * 인덱싱 기능 인터페이스(Indexable Type Interface)
 * 배열이나 객체처럼 인덱스를 통해 접근할 수 있는 타입의 모양을 정의할 때 사용
 * 인덱스 시그니처 ([index: IndexType]: ValueType)를 사용하여 정의하며, IndexType은 string 또는 number만 가능
  백엔드에서 많이 사용 프론트에서 잘 사용하지 않음
  */
interface StringArray{
  [index:number]:string;
}

let myArray: StringArray;
myArray = ["Hello", "World"];
console.log(myArray[0]);

interface Dictionary{
  [key : string]: string;
}

let myDictionary : Dictionary={
  name:"홍길동",
  city:"서울" 
}
console.log(myDictionary["name"])
myDictionary["country"] = "대한민국";


// 인터페이스 상속
interface Shape {
  color: string;
}

interface Circle extends Shape{
  radius: number;
}

interface ColorCircleWithBorder extends Circle {
  borderWidth: number;
  borderColor: string;
}
const myCircle: Circle = {
  color: "red",
  radius: 5
}

const myComplexCircle : ColorCircleWithBorder = {
   color: "blue",
  radius: 10,
  borderWidth: 10,
  borderColor : "green"
}

/**
 *  타입 별칭 (Type Alias)
 *  타입 별칭은 기존 타입에 새로운 이름(별칭)을 부여하는 데 사용
 *  
 *  인터페이스와 차이점은?
 *  type 키워드를 사용하여 정의하며, 인터페이스와 달리 객체 타입뿐만 아니라
 *  원시타입, 유니온 타입, 튜플, 함수 시그니처 등 거의 모든 TypeScript 타입에 별칭을 부여할 수 있음
 * 
 *  모든 타입에 적용 가능
 *  복잡한 타입 단순화
 *  타입 조합
 *  선언적 병합 불가 -> 하나의 타입을 만들어 놓으면 그 타입으로 고정이 됨
 */

// 선언적 병합 불가 예시
type Age = number; // 원시 타입에 별칭을 부여
type UserName = string;

const userAge : Age = 30;
const greetingName : UserName = "TypeScript";
console.log(`${greetingName}의 나이: ${userAge}`)

// 2 유니온 타입에 별칭 부여
type ResultStatus = "success" | "failure";
type IdOrName = number | string

function showStatus(status: ResultStatus): void{
  console.log(`처리 상태: ${status}`)
}
showStatus("success")
//showStatus("pending")

// 3 객체 타입에 별칭 부여
type Coords = {
  x:number;
  y:number;
}

// 인터페이스랑 유사함 같은건 아님
const point: Coords = {x:10, y:20};
console.log(`좌표: (${point.x}), ${point.y}`)

// 4 함수 시그니처에 별칭 부여
type GreetFunction = (name:string) => string;

const sayHello: GreetFunction = (name) => `Hello, ${name}!`;

// 5 타입 조합
type PersonInfo = {
  name:string;
  age:number
}

type EmployeeInfo = PersonInfo & {
  employeeId :string
  department :string
}

const employee : EmployeeInfo = {
  name: "김영희",
  age: 32,
  employeeId: "EMP-001",
  department: "개발"
}
console.log(employee)

/**
 * 차이점
 * interface --- type 
 * extends--- &
 * interface 원시타입 안됨 --- type 원시타입 가능
 * 
 */
interface Person {
  name: string;
  age: number
}

interface Person {
  gender: string;
}// tpye은 이처럼 추가되는게 안됨

const test: Person ={
  name: "park",
  age:25,
  gender:"boy"
} 

type Subjects = 'math' | 'english' | 'science';

type Grades = {
  [key in Subjects] : string
} // 타입은 이런게  가능

// interface Grades{
//   [key in Subjects] : string
// } 는 이게 안됨