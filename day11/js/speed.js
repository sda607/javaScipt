//구속을 변환하는 프로그램
const RATE_KPH_MPH = 1.609; //변환율
let MPH, KPH;
        
        
//입력 - 문자가 입력되므로 Nuber()로 변환
KPH = prompt("당신의 구속을 입력하세요(KM/H) :" , "100" );


//연산
MPH = KPH / RATE_KPH_MPH;

//출력
document.write(KPH + "km는 " + MPH.toFixed(2) + "mile입니다.");

   
    