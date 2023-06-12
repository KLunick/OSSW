const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 가상의 게시물 데이터
let posts = [
  { id: 1, title: "20221986 권용준", content: "안녕하세요. 20221986학번 권용준입니다." },
  { id: 2, title: "20221146 성도경", content: "안녕하세요. 20221146학번 성도경입니다." }
];

// 글 목록 보기
function displayPosts() {
  console.log("===== 글 목록 =====");
  posts.forEach(post => {
    console.log(`ID: ${post.id}`);
    console.log(`제목: ${post.title}`);
    console.log(`내용: ${post.content}`);
    console.log("===================");
  });
  displayMenu();
}

// 메뉴 표시 함수
function displayMenu() {
  console.log("");
  console.log("===== 게시판 메뉴 =====");
  console.log("1. 글쓰기");
  console.log("2. 글수정");
  console.log("3. 검색");
  console.log("4. 삭제");
  console.log("5. 글 목록 보기");
  console.log("0. 종료");

  rl.question('메뉴를 선택하세요: ', (choice) => {
    switch (choice) {
      case '1':
        console.log("");
        writePost();
        break;
      case '2':
        console.log("");
        updatePost();
        break;
      case '3':
        console.log("");
        searchPost();
        break;
      case '4':
        console.log("");
        deletePost();
        break;
      case '5':
        console.log("");
        displayPosts();
        break;
      case '0':
        rl.close();
        break;
      default:
        console.log("잘못된 메뉴 선택입니다. 다시 선택해주세요.");
        displayMenu();
        break;
    }
  });
}

// 시작 메시지와 메뉴 표시
console.log("===== 간단한 게시판 프로그램 =====");
displayMenu();
