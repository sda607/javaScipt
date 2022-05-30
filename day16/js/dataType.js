// number


let num1 = 10;
let num2 = 10.2;
let num3 = 1e+3; //지수(e) 10의 3제곱
console.log(num1 +"," + num2 + "." + num3); 

//  srtring
var str1 = '문자';
var str2 = "문자는 '문자'";
var str3 = '문자는 "문자"';
var str4 = 'you\'re tomm smart...';
console.log(str1 + "." + str2 + "," + str3 +"," + str4);

// boolean
let com1 = ( 5 > 4);
let com2 = ( 5 < 4);

console.log(com1 + ", " + com2);

// undefined
let storage;   //변수 선언 후 값을 입력하지 않은ㅁ
// storage = "A";
console.log(storage);

// null
let gnb = document.getElementById('gnb');
gnb.style.listStyleType = 'none';
// gnb.style.backgroundColor = "red";
console.log(gnb);

// type of
let type1 = 10;
let type2 = '문자';
let type3 = true;
console.log(typeof(type1) + "," + typeof type2 + "," + typeof type3);