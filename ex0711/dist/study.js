"use strict";
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
function print(value) {
    console.log(value);
    return value;
}
//T는 타입 변수(Type variable)
// `idenntity<number>(123)`이라고 호출하면 T는 `number`가 되고.
// `idenntity<string>('hello')`라고하면 T는 `string`가 된다.
// T에는 어떤 것도 들어 올 수 있다
function identity(value) {
    return value;
}
// 예시에서 Product의 값이 부분적으로 올 수 있다. 전체가 오거나 한개가 오거나 개발자가 정할 수 있다
function updateProduct(product, fieldsToUpdate) {
    return Object.assign(Object.assign({}, product), fieldsToUpdate);
}
const originalProduct = {
    id: "A100",
    name: "Phone",
    price: 13000,
    description: "choice"
};
const upadateProduct1 = updateProduct(originalProduct, { name: "keybord" });
console.log(upadateProduct1);
const upadateProduct2 = updateProduct(originalProduct, {
    price: 1300,
    description: "New Model"
});
const newUser = {
    username: "James",
    email: "w1234@gmail.com",
    phone: "010-1234-5678",
    address: "GBK"
};
const mutablePoint = { x: 10, y: 20 };
mutablePoint.x = 15;
console.log(mutablePoint);
const immutablePoint = { x: 30, y: 40 };
//immutablePoint.x= 35; 에러 이유 Readonly 유틸리티 선언 후 한번 할당 된 값들은 변경하면 안됨 
console.log(immutablePoint);
const CustomerInfo = {
    firstName: "Alice",
    lastName: "Smith"
};
console.log(CustomerInfo); // {firstName : "Alice",  lastName : "Smith"}
const publicInfo = {
    id: "EMP01",
    name: "Alpha",
    department: "UI"
};
console.log(publicInfo);
const publicInfo2 = {
    id: "EMP01",
    name: "Alpha",
    department: "UI",
    // salary:1000; salary" | "hiderate 둘다 있거나 둘 중 하나라도 포함해서 만들면 에러 발생
};
