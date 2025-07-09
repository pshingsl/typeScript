
class Coffee {
  // 속성 = 변수 coffeeType,shot
  coffeeType: string;
  shot: number;
  // constructor 언제 실행? 생성자에서 한번 초기화함
  // 초기화 안하면 값이 number = 0 or string = null
  constructor(public type: string, public shots: number) {
    this.coffeeType = type
    this.shot = shots
  }

  //method = function 여러개 들어감
  // 메소드에는 값이 들어가지 못한다. 
  describe() {
    console.log(`${this.coffeeType}샷이 들어간 ${this.shot} 커피`)
  }

}

const temp = new Coffee('에스프레소', 10);

const temp2 = new Coffee('아메리카노', 10);

// temp, temp2는 커피라는 공통점이 있지만 서로 같은건 아니다

/** 생성자
 *  생성자는 클래스의 인스턴스를 생성하고 초기화하는데 사용되는 특별한 메소드
 *  생성자는 클래스 내에서 constructor라는 이름으로 정의
 *  생성자는 인스턴스를 생성할 때 자동으로 호출
 *  생성자는 클래스 내에 오직 하나만 존재할 수 있다
 *  보통, 생성자로 객체 속성을 초기화 하는것 뿐 아니라 객체 생성이 될 때 꼭 되어야 하는 초기화 로직을 집어 넣기도 함
 *  디비 연결, API 초기화, 기본값 세팅 등 필수 로직을 여기서 넣음
 */

/** 접근 제한자
 * 클래스에서는 속성과 메서드에 접근 제한자를 사용해 접근을 제한할 수 있다
 * 
 * 1) public
 *    클래스 외부에서도 접근이 가능한 접근 제한자
 *    접근 제한자가 선언이 안되어있다면 기본적으로 접근 제한자는 public
 *    클래스의 함수 중 민감하지 않은 객체 정보를 열람할 때나 누구나 해당 클래스의 특정 기능을 사용해야할 때 많이 사용
 * 
 * 2) private
 *    클래스 내부에서만 접근이 가능한 접근 제한자
 *    보통은 클래스 속성은 대부분 private 접근 제한자로 설정 
 *      - 외부에서 직접적으로 객체의 속성을 변경할 수 없게 제한 -> 중요한 정보
 *    클래스의 속성을 보거나 편집하고 싶다면 별도의 getter/setter 메서드를 준비해놓는 것이 관례
 *    리액트의 state같은거 useState(1, set1) = 1(getter), set1(setter)
 * 
 * 3) protected
 *    클래스 내부와 해당 클래스를 상속받은 자식 클래스에서만 접근이 가능한 접근 제한자
 *    부모의 기능을 갖다 씀 상속이랑 연관 있음
 */

class BankAccount {
  private balance: number;
  constructor(startingBalance: number) {
    this.balance = startingBalance
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number) {
    if (amount > 0) this.balance += amount
  }
}

const test = new BankAccount(10000)
test.getBalance();
test.deposit(10000) // depoist 제한자가 private면 에러 
//  private는 밖에서 사용못함 해당 함수 안에서 사용 -> private 메서드는 외부에서 직접 호출할 방법이 없다!

/** 2시 내용
 * 상속 protected와 연관 있다.
 *  상속이 나온 이유: 객체 지향 언어에서 코드 재사용을 하기위해서 나옴
 *  코드 재사용을 위한 핵심 기능 -> 중요
 *  예시 자동차(바퀴, 문, 엔진) -> a, b, c라는 회사 존재 각 회사마다 자동차 기본 구조를 가지고 새로 만들 수 있다
 *  상속은 객체 지향 프로그래밍에서 클래스 간의 관계를 정의하는 중요한 개념
 *  상속이 있어서 똑같은 코드를 계속 반복적으로 작성할 필요가 없다
 *  아래의 예제르 보면 Vehicle라는 클래스를 생성했으면 ElectricCar에서 클래스를 상속받고
 *  자체적으로 필요한 속성 및 메서드를 추가하면 끝
 * 
 *  Vehicle(부모) - ElectricCar(자식) Car(자식)
 * 
 *  슈퍼타입 / 서브타입(타입스크립트 전용= 타입스크립트만 가지고 있다)
 *  1) 서브타입 
 *    두 개의 타입 A과 B가 있고 B가 A의 서브타입이면 A가 필요한 곳에는 어디든 B를 안전하게 사용할 수 있다
 * 
 * 2) 슈퍼타입 any
 *    두 개의 타입 A과 B가 있고 B가 A의 슈퍼타입이면 B가 필요한 곳에는 어디든 A를 안전하게 사용할 수 있다
 * 
 * 서브타입 -> 슈퍼 타입으로 변환 : upcasting(implicit)
 * 슈퍼타입 -> 서브 타입으로 변환 : downcasting(explicit)
 * 
 * 
 */

class Vehicle {
  move() {
    console.log('이동 중...')
  }
}

class ElectricCar extends Vehicle {
  go() {
    console.log('fast...')
  }
}

class Car extends Vehicle {
  move() {
    console.log('시끄럽게 이동 중...') // 메서드 오버라이딩:부모에서 물려받은 것을 자식이 부모에게서 받은것을 재정의함
  }
}
const tesla = new ElectricCar();
tesla.move();
tesla.go();

// 업캐스팅 예시
class Animal {
  eat() {
    console.log("먹는다")
  }
} // Animal = any 최상위 -> 자세한건 월에 했던 any내용 보기

class Dog extends Animal {
  name: string;
  constructor(inputName: string) {
    super();
    this.name = inputName
  }

}

let dog: Dog = new Dog('DDO DDO');
let animal: Animal = dog;

animal.eat();

// 다운캐스팅
let animal2: Animal;
let dog2: Dog = new Dog('DDO');

// let realDog : Dog = animal error 
// 왜 에러? -> animal 실제로 Dog가 아닐지 모름 
// animal 타입엔 name이 없음 안전을 위해 강제로는 못 바꿔줌.
let realDog: Dog = animal as Dog
animal.eat();

/**3시 내용 
 * 추상 클래스
 * 추상 클래스는 클래스와는 다르게 인스턴스화를 할 수 없는 클래스
 * 추상 클래스의 목적은 상속을 통해 자식 클래스에서 메서드를 제각각 구현하도록 강제를 하는 용도
 * 추상 클래스도 최소한의 기본 메서드는 정의를 할 수 있음
 * 핵심 기능의 구현은 전부 자식 클래스에게 위임
 * 함수구현을 무조건 자식클래스에서 해야함
 * 
 * 상속은 1개밖에 못 받음 이 문제를 해결하기 위해 인터페이스가 탄생
 * 인터페이스
 * 인터페이스는 객체가 가져야 하는 속성과 메서드를 정의
 * 인터페이스를 구현한 객체는 인터페이스를 반드시 준수해야한다! 규약과 같아서 어길 수 없다!
 * 코드의 안정성을 높이고 유지 보수성을 향상 시킬 수 있다
 * 
 * 구현부 
 * 추상 클래스 : 클래스의 기본 구현을 제공
 * 인터페이스 : 객체의 구조만을 정의하고 기본 구현을 제공하지 않음
 * 
 * 동작 방식
 * 추상 클래스 : 단일 상속만 지원 예시) 클래스를 상속 받으면 다른 클래스는 상속 못받음
 * 인터페이스 : 다중 상속을 지원
 * 
 * 구현 방식
 * 추상 클래스 : 추상 클래스를 상속받은 자식 클래스는 반드시 추상 함수를 구현
 * 인터페이스 : 인터페이스를 구현하는 클래스는 인터페이스에 정의된 모든 메서드를 전부 구현
 * 
 * S.O.L.I.D 원칙
 * 
 * 1) 단일 책임의 원칙 (SRP) *****
 * 클래스는 하나의 책임만 가져야 한다는 매우 기본적인 원칙
 * 5개의 설계 원칙 중 가장 기본적이고 중요한 원칙
 * 예를 들면, 유저 서비스라는 클래스가 있는 경우 해당 클래스는 유저 관련된 액션만 해야되고 다른 액션을 해서는 안됨
 * 
 * 2) 개방 폐쇠 원칙(OCP) 인터페이스와 상속 연관
 * 클래스는 확장에 대해서는 열려 있어야 하고 수정에 대해서는 닫혀 있어야 한다는 원칙
 * 클래스의 기존코드를 변경하지 않고도 기능을 확장할 수 있어야한다
 * 즉, 인터페이스나 상속을 통해서 이를 해결할 수 있다
 * 부모 클래스의 기존 코드 변경을 하지 않고 기능을 확장 가능함
 * 
 * 3) 리스코프 치환 원칙 (LSP)
 * 서브타입은 기반이 되는 슈퍼타입을 대체할 수 있어야 한다는 원칙
 * 다시 말해, 자식 클래스는 부모 클래스의 기능을 수정하지 않고도 부모 클래스와 호환되어야 한다 -> 추상 클래스
 * 논리적으로 엄격하게 관계가 정립이 되어야 한다.
 * 
 * 4) 인터페이스 분리 원칙 (ISP)
 * 클래스는 자신이 사용하지 않는 인터페이스의 영향을 받지 않아야 한다.
 * 무조건 무의미한것들을 받으면 성능이 떨어진다
 * 즉, 해당 클래스에게 무의미한 메소드의 구현을 막자는 의미
 * 인터페이스를 너무 크게 정의하기보단 필요한 만큼만 정의하고 클래스는 요구사항에 맞게 인터페이스를 구현 하도록 유도 해야한다
 * 자바스크립트의 1급객체인 함수처럼 찢는것처럼 인터페이스도 많이 분리해서 관리하기 쉽게 해라
 * 
 * 5) 의존 역전 원칙 (DIP)
 * DIP는 JAVA의 Spring 프레임워크나 Node.js의 Nest.js 프레임워크와 같이 웹 서버 프레임워크 내에서 많이 나오는 원칙
 * 이 원칙은 하위(상속 받은 애들) 수준 모듈(구현 클래스)보다 상위 수준 모듈(인터페이스)에 의존을 해야한단느 의미
 * 
 * 
 */

// 추상 클래스
abstract class Media {
  constructor(public title: string) {

  }
  abstract play(): void; // 추상 클래스 정의하 메서드는 상속받은 자식 클래스에서 무조건 만들어야한다. -> 추상 메서드 필요
}

class Song extends Media {
  play(): void {
    console.log(`${this.title}노래가 재생 중`)
  }
}

const song1: Song = new Song('Perfect');
song1.play();


// 단일 책임의 원칙 예시
class UserService {
  constructor(private db: Database) { }

  getUser(id: number): void {

    return this.db.findUser(id);
  }

  saveUser(user: User): void {

    return this.db.saveUser(user);
  }
}

class EmailService {
  sendWelcomeEmail(user: User): void {
    console.log(`Sending welcome emaul to ${user.email}`)
  }
}
// 유저 서비스는 유저만 관리 이메일서비스는 이메일 전송만 관리

// 개방 폐쇠 원칙 예시
interface Notifiacation {
  send(message: string): void;
}

class EmailNotifier implements Notifiacation {
  send(msg: string) {
    console.log(`이메일 발송: ${msg}`)
  }
}

class SMSNotifier implements Notifiacation {
  send(msg: string) {
    console.log(`SMS 발송: ${msg}`)
  }
}

function notify(userMsg: string, service: Notifiacation) {
  service.send(userMsg);
}

// 리스코프 치환 원칙 예시
//  class Bird{
//   fly(): void{
//     console.log('펄럭펄럭')
//   }
//  }

//  class Penguin extends Bird {
//   // 에러 펭귄을 날지 못함 해결방법 단일 책임의 원칙? 인터페이스? 추상 클래스?
//  }

// 리스코프 치환 해결 방법 -> 추상 클래스 이용해 논리적으로 맞춰야한다
abstract class Bird {
  abstract move(): void;
}

class NonFlylingBird extends Bird {
  move() {
    console.log('펄럭펄럭')
  }
}

class FlylingBird extends Bird {
  move() {
    console.log('뚜벅뚜벅')
  }
}

// 인터페이스 분리 원칙 예시
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

class SmartPrinter implements Printer, Scanner {
  print() { }
  scan() { }
}

// 의존 역전 원칙 예시
interface MyStorage {
  save(data: string): void
}

class MyLocalStorage implements MyStorage {
  save(data: string): void {
    console.log(`로컬에 저장 ${data}`)
  }
}

class MyCloudStorage implements MyStorage {
  save(data: string): void {
    console.log(`클라우드에 저장 ${data}`)
  }
}

class Database {
  constructor(private storage: MyStorage) { }

  saveData(data: string): void {
    this.storage.save(data);
  }
}
const myLocalStorage = new MyLocalStorage();
const myCloudStorage = new MyCloudStorage();
const myLocalDatabase = new Database(myLocalStorage)
const myCloudDatabase = new Database(myCloudStorage)
myLocalDatabase.saveData("로컬 데이터")
myCloudDatabase.saveData("클라우드 데이터")
// 이렇게 짠 이유는 MyStorage만 있으면 클라우드도 쓸 수 있고 로컬도 쓸 수 있다 -> 슈퍼 타입
// 안정성을 보장해줌 유지 보수도 좋다 재사용성이 높아짐

/**
 * Enum과 객체 리터럴
 * -공통점 
 * enum과 객체 리터럴은 모두 상수를 정의하고 그룹화 하는데 사용할 수 있다
 * 
 * -차이점
 * 1)enum
 * enum은 상수 값들의 집합을 정의하는 데 사용되는 특별한 데이터 타입 -> 쓰는 이유
 * 문자열과 숫자만 들어 갈 수 있다.
 * 주로 관련된 상수들을 명확하게 그룹화하고 관리할 때 유용
 * 가독성 및 명확성: 상수 값에 의미 있는 이름을 부여하여 코드의 가독성을 높아진다
 * 미리 정의된 상수 값만 사용할 수 있어 타입 안정성이 높다
 * 변경된 일이 없을때 주로 쓴다
 *
 * 
 * 2) 객체 리터럴
 * 객체 리터럴은 키-값 쌍으로 구성된 객체를 직접 생성하는 방식
 * const또는 let 키워드를 사용하여 정의하며, 다양한 데이터 타입을 값으로 가질 수 있음
 * 유연한 구조: enum과 달리 키에 다양한 타입의 값을 할당할 수 있다.
 * 런타임 유연성: 필요에 따라 객체의 속성을 추가, 수정, 삭제하는 등 다양한 용도로 활용
 * 다목적 사용: 상수 그룹화 외에도 데이터 구조, 설정 객체 등 다양한 용도로 활용
 */

//enum 쓰는 이유 안정성
enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
}

enum OrderStatus {
  PENDING,    //0
  PROCESSING, //1
  COMPLETED,  //2
  CANCLLED,   //3
}
function handleUserAction(role: UserRole, order: OrderStatus): void {
  if (role === UserRole.ADMIN) {
    console.log("관리자 권한으로 작업을 수행합니다")
  } else if (role === UserRole.EDITOR) {
    console.log("편집자 권한으로 작업을 수행합니다")
  } else {
    console.log("일반 사용자 권한으로 작업을 수행합니다")
  }

  switch (order) {
    case OrderStatus.PENDING:
      console.log("주문이 대기 중입니다")
      break
    case OrderStatus.COMPLETED:
      console.log("주문이 완료되었습니다")
      break
    default:
      console.log("주문 상태를 확인해주세요")
  }
}

const currentUserRole : UserRole = UserRole.EDITOR
const currentOrderStatus : OrderStatus = OrderStatus.PENDING
handleUserAction(currentUserRole, currentOrderStatus)

// 객체 리터럴
const appConfig = {
  appName: "My Awesome App",
  version: "1.0.0",
  apiEndPoints: {
    users: "/api/users",
    products: "/api/products",
  },
  isActicve: true,
  maxUsers: 100,
}