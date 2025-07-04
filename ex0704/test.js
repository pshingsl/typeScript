// string
var username = 'Alice';
var message = "Hello, ".concat(username);
// number
// 주의 NaN, Infinity 이것도 숫자 취급을 함 따라서 number로 정의해야함
var age = 20;
var pi = 3.14;
//boolean
var isLoggedIn = true;
var hasPermission = false;
// null, undefined
// stricNallChecks tsconfig 에 설정 필요
var nothing = null;
var notAssigned = undefined;
// any 타입스크립트에서 최대한 쓰지 않기 권장함
var data = 123;
data = "문자열도 가능";
data = true;
// unknown
var value = "문자열";
if (typeof value == "string") {
    console.log(value.toUpperCase());
}
// void -> 함수한테만 쓰임 리턴값이 없을때 쓴다
// 변수에 쓸 수 있지만 잘 안씀
function logMessage(message) {
    console.log(message);
}
// never 예외 발생할때 무한루프일때 쓴다. 
// 절대 반환하지 않는 함수에 사용
function throwError() {
    throw new Error("예외 발생!");
}
//object
var obj = { name: "Sack" };
var obj2 = { name: "Alice" };
