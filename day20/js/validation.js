// 유효성 검사(체크)
document.getElementById("user-id");
let pw1 = document.getElementById("pwd1");
let pw2 = document.getElementById("pwd3");

//onchange 속성사용
id.ocshange = checkId;  
//함수 호출(괄호를 생략해서 이벤트 발생시만 호출됨)
pw1.onchange = checkpw;
pw2.onchange = comparepw;

//아이디 체크 함수
function checkId(){
    if(id.value.length < 4 || id.value.length > 15){
        alert("아이디는 4자 이상 15자 이하로 입력")
        id.select();
    }
}
//비밀번호 함수
function checkpw(){
    if(pw1.value.length < 8 || id.value.length > 15){
        alert("비밀번호는 8자 이상 입력")
        pw1.select();
    }
}

//비밀번호 일치 여부 함수
function comparepw(){
    if(pw1.value != pw2.value){
        alert("비빌먼호가 일치하지 않습ㄴ디ㅏ.");
        pw2.value = ""; //비밀번호 초기화
        pw2.focus(); // 커서 위치
    }
}