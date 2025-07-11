"use strict";
// 사용자 인터페이스 (User Interface)정의
// 사용자는 Id 예: 'admin-001', 'user-001;
// 이름, 역할
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["Regular"] = "regular";
})(Role || (Role = {}));
// 데이터 정의
// 도서 목록을 저장 Book이 가지는 값만 가져와야함
let libraryBooks = [];
// 회원 목록 저장  User가지는 값만 가져와야함
let libraryUsers = [];
// 대출 기록을 저장 LoanRecord이 가지는 값만 가져와야함
let loanRecords = [];
// 3시부터 기능 만든다
// isAdmin함수 -> 입력시 유저 정보를 받음 
// 리턴으로 user의 role값이 admin이면 true
// user의 role값이 admin이면 false
function isAdmin(user) {
    if (user.role === Role.Admin) {
        // admin인 경우
        return true;
    }
    // admin아닌 경우
    return false;
}
// isRegularUser
function isRegularUser(user) {
    if (user.role === Role.Regular) {
        // regular 경우
        return true;
    }
    // regular 아닌 경우
    return false;
}
