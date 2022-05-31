//생성자 함수로 book 객체 만들기
function Book(tittle, author, price){
    this.tittle = tittle;
    this.author = author;
    this.price = price;
}

//Book 객체 생성, 힙메모리(heap)
let web = new Book("반응형 웹", "조혜경", 30000);
console.log(web.tittle);
let java = new Book("혼자 공부하는 Java", "신자바", 25000);
let spring = new Book("스피링 프레임워크", "spring", 30000);

//객체 배열로 관리
let bookList = [web, java, spring];

console.log(bookList[0].tittle);
console.log(bookList[1].tittle);
console.log(bookList[2].tittle);

//자료 수정
bookList[1].author = "신용권";
console.log(bookList[1].author);

//목록 조회
document.write("<h1>책 제목과 저자</h1>")
for(let i = 0; i < bookList.length; i++){
    document.write("<p>" + bookList[i].tittle + " : " +
    bookList[i].author + "</p>");
}