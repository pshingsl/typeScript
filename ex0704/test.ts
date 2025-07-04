// string
let username : string = 'Alice';
let message : string = `Hello, ${username}`;

// number
// 주의 NaN, Infinity 이것도 숫자 취급을 함 따라서 number로 정의해야함
let age : number = 20;
let pi : number = 3.14;

//boolean
let isLoggedIn : boolean = true;
let hasPermission: boolean = false;

// null, undefined
// stricNallChecks tsconfig 에 설정 필요
let nothing : null = null
let notAssigned : undefined = undefined;

// any 타입스크립트에서 최대한 쓰지 않기 권장함
let data : any = 123;
data = "문자열도 가능";
data = true

// unknown
let value : unknown = "문자열";

if(typeof value == "string"){
  console.log(value.toUpperCase());
}

// void -> 함수한테만 쓰임 리턴값이 없을때 쓴다
// 변수에 쓸 수 있지만 잘 안씀
function logMessage(message:string):void{
  console.log(message)
}


// never 예외 발생할때 무한루프일때 쓴다. 
// 절대 반환하지 않는 함수에 사용
function throwError(): never{
  throw new Error("예외 발생!")
}

//object

let obj : object = {name:"Sack"}
