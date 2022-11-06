const bgimg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
// img들을 array로 선언

function bgimgView() {
  // 이미지 랜덤 출력해주는 함수 정의
  let i = Math.floor(Math.random() * bgimg.length);
  // array 숫자 가져와서 랜덤 숫자 뽑기
  const img = document.createElement("img");
  // HTML에 img 추가하기
  document.body.append(img);
  // img를 body 맨 아래쪽에 추가
  img.src = `img/${bgimg[i]}`;
  // img에 src 추가해주기. 경로 img폴더 및 파일이름 추가
  img.id = "bgimg";
}

bgimgView();
// 함수 실행
