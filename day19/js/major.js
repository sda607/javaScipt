//선택한 옵견 항목 찾아내기
//select 태그 이름(name)에 폼이름으로 접근
let selectMenu = document.testForm.major;

function displaySelect(){
    //select option 속성의 value
   /*let selectText = document.getElementById("subj").value;
   alert(selectText + "가 선택되었습니다.");*/

   let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
   alert(selectText + "가 선택되었습니다.");

}
