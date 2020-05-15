'use strict';

// 로고버튼과 네비게이션 버튼, 옷 리스트들을 담은 변수
const logoBtn = document.querySelector('.main-title .logo'),
  clothingBtns = document.querySelectorAll('.main-title .nav .clothing-btn'),
  clothingList = Array.from(document.querySelectorAll('.main-view .clothing-list'))[0].children;

// 로고 버튼 클릭시 새로고침 이벤트 발생
function showMainView() {
  
  // 모든 리스트 순회
  for (let clothing of clothingList) {
    clothing.classList.remove('deactivate');
  }
}

// 선택된 버튼에 맞춰 옷이 조회되도록 하는 함수
function showSlectedClothing(event) {
  const btn = event.target;
  
  // 모든 리스트 순회
  for (let clothing of clothingList) {
    let img = clothing.childNodes[1];
    
    if (img.classList.contains(btn.id)) {
      // 이미지 클래스에 클릭된 버튼의 id가 있으면 "deactive" 클래스를 지워줌으로써 "display=none"속성을 없애줌.
      clothing.classList.remove('deactivate');
    } else {
      // 이미지 클래스에 클릭된 버튼의 id가 없으면 "deactive" 클래스를 넣어줌으로써 "display=none"속성이 추가됨.
      clothing.classList.add('deactivate');
    }
  }
}

// 메인 함수
function main() {
  // 로고 버튼 클릭시 새로고침 이벤트 발생 => 원래 classList.remove로 "deactive" 클래스를 지워주는 것으로 했는데 작동이 안해서 새로고침으로라도 했습니다...ㅠ
  logoBtn.addEventListener('click', showMainView);

  // 옷 버튼 클릭시 선택된 옷들만 분류하여 조회하는 함수 실행
  clothingBtns.forEach(clothingBtn => {
    clothingBtn.addEventListener('click', showSlectedClothing);
  });
}

// 메인 함수 호출
main();