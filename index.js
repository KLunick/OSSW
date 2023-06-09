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

// 글쓰기 기능
function writePost(){
  rl.question('제목을 입력하세요.: ', (title) => {
    rl.question('내용을 입력하세요.: ', (content) => {
      const newPost = {id: posts.length + 1, title, content};
      posts.push(newPost);
      console.log("게시물이 작성되었습니다.");
      displayMenu();
    });
  });
}

// 글수정 기능
function updatePost() {
  rl.question('수정할 게시물의 ID를 입력하세요.: ', (id) => {
    const postIndex = posts.findIndex(post => post.id === parseInt(id));
    if(postIndex !== -1) {
      rl.question('새로운 재목을 입력하세요.: ', (title) => {
        rl.question('새로운 내용을 입력하세요.: ', (content) => {
          posts[postIndex].title = title;
          posts[postIndex].content = content;
          console.log("수정이 완료되었습니다.");
          displayMenu();
        })
      });
    }
  });
}

//검색 기능
function searchPost() {
  rl.question('검색할 키워드를 입력하세요: ', (keyword) => {
    const searchResults = posts.filter(post => {
      return post.title.includes(keyword) || post.content.includes(keyword);
    });
    console.log("검색 결과:");
    console.log(searchResults);
    displayMenu();
  });
}

//삭제 기능
function deletePost() {
  rl.question('삭제할 게시물의 ID를 입력하세요.: ', (id) => {
    const postIndex = posts.findIndex(post => post.id === parseInt(id));
    if (postInddex !== -1) {
      posts.splice(postIndex, 1);
      console.log('게시물이 삭제되었습니다.');
      displayMenu();
    } else {
      console.log('해당 ID의 게시물을 찾을 수 없습니다.');
      displayMenu();
    }
  });
}

// 메뉴 표시 함수
function displayMenu() {
  console.log("");
  console.log("===== 게시판 메뉴 =====");
  console.log("1. 글 목록 보기");
  console.log("2. 글쓰기");
  console.log("3. 글수정");
  console.log("4. 검색");
  console.log("5. 삭제");
  console.log("0. 종료");

  rl.question('메뉴를 선택하세요: ', (choice) => {
    switch (choice) {
      case '1':
        console.log("");
        displayPosts();
        break;
      case '2':
        console.log("");
        writePost();
        break;
/*      case '3':
        console.log("");
        updatePost();
        updatePost();
        break;
      case '4':
        console.log("");
        updatePost();
        break;
      case '5':
        console.log("");
        deletePost();
        break;*/
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
