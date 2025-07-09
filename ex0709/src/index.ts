
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
  eat(){
    console.log("먹는다")
  }
} // Animal = any 최상위 -> 자세한건 월에 했던 any내용 보기

class Dog extends Animal{
  name:string;
  constructor(inputName:string){
    super();
    this.name = inputName
  }

}

let dog: Dog = new Dog('DDO DDO');
let animal : Animal = dog;

animal.eat();

// 다운캐스팅
let animal2 : Animal;
let dog2: Dog = new Dog('DDO');

// let realDog : Dog = animal error 
// 왜 에러? -> animal 실제로 Dog가 아닐지 모름 
// animal 타입엔 name이 없음 안전을 위해 강제로는 못 바꿔줌.
let realDog : Dog = animal as Dog
animal.eat();