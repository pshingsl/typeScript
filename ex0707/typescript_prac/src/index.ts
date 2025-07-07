/**
 * 1) boolean
  - boolean 타입은 참(true) 또는 거짓(false) 두 가지 값만을 나타냄
  - 주로 조건문 (예: `if`문), 비교연산 (예: `a===b`), 그리고 어떤 상태의 유효성 검사 등에서 사용
  - 2가지 상태 (예/아니오, 활성/비활성 등)를 표현할 때는 `boolean`을 사용해야 합니다
  - 3가지 이상 상태를 표현하고 싶을때 enum사용
 */
    function checkUserStatus(isLoggedIn: boolean): string{
    if(isLoggedIn){
      return "사용자 로그인되어 있습니다"
    } else{
      return "사용자 로그인되어 있지 않습니다"
    }
  }
  const currentUserLoggedIn : boolean = true;
  const message =  checkUserStatus((currentUserLoggedIn))
  /*
   2) number
  - number 타입은 TS에서 **모든 종류의 숫자**를 나타냄
  - 일반적인 프로그래밍 언어에서 정수와 실수를 구분하여 
    다른 타입을 사용하지만 ts에서는 'number'타입 하나로 이 모든 것을 처리
  - 심지어 2진수, 8진수, 16진수 리터럴까지도 `number` 타입으로 표현할 수 있음
  - 모든 수치 연산에 사용되는 값은 number 타입으로 명시해주세요
 */

  function calculateDiscountPrice(originalPrice:number, discountRate:number):number{
    return originalPrice * (1 - discountRate);
  }
 const productPrice : number = 12500.50;
 const discount : number = 0.15;
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

  function generateWelcomeMessage(userName:string, appName:string):string{
    return `안녕하세요`
  }

   /**
  * 4) Array
  - 배열은 같은 타입의 여러 원소들을 순서대로 저장하는 자료구조
  - 특정 타입 뒤에 [ ]를 붙여서 명시
  - ts에서 같은 타입의 데이터만 들어올 수 있다
  */
 function calculateAverage(grades:number[]):number{
  if(grades.length === 0){
    return 0;
  }

  let sum:number=0;
  for(const grade of grades){
    sum += grade;
  }
  return sum / grades.length;
 }
 const studentGrades : number[] = [88, 92, 75, 95, 80];
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

  enum UserRole{
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    USER = "USER",
  }

   // 각 요소는 별로 설정 값을 지정하지 않으면, 0으로 시작함
   // ts에서 객체 안에다 SUNDAY:0으로 할당함 요소들을 배열 형식으로 할당
   // enum 변하지 않는것 상수 예시-> 요일
   enum DayOfWeek{
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

   /**
    * readonly
    */