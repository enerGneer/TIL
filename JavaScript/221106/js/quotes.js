const quotes = [
  {
    quote: "저는 깨달았어요. 제가 배운 모든 것들이 저를 발전시키는 원동력이 된다는 것을.",
    author: "빌 에반스",
  },
  {
    quote: "자신의 삶을 바꿀 수 있는 건 오직 자기 자신뿐이에요. 그 누구도 대신해줄 수 없어요.",
    author: "캐롤 버넷",
  },
  {
    quote: "할 수 있다고 생각하는 사람은 할 수 있고, 할 수 없다고 생각하는 사람은 할 수 없다.",
    author: "파블로 피카소",
  },
  {
    quote: "당신이 어떤 것을 상상할 수 있다면 그것을 이룰 수 있고, 어떤 것을 꿈꿀 수 있으면 그 꿈대로 될 수 있다.",
    author: "윌리엄 아서 워드",
  },
  {
    quote: "사람은 나이가 들어가면서 변하는 게 아닙니다. 그저 좀 더 명확하게 자기다워지는 것일 뿐이죠.",
    author: "린 홀",
  },
  {
    quote: "위대한 일은 갑작스러운 충동에 의해 이루어지는 것이 아니라, 느리지만 작은 일들이 여러번 연속적으로 이어질 때 마침내 이루어집니다.",
    author: "빈센트 반 고흐",
  },
  {
    quote: "시간이 없다. 인생은 짧기에, 다투고 사과하고 가슴앓이하고 해명을 요구할 시간이 없다. 오직 사랑할 시간만이 있을 뿐이며 그것도 순간일 뿐이다.",
    author: "마크 트웨인",
  },
  {
    quote: "삶의 모든 순간에서 배울 수 있다면, 당신은 엄청난 이점을 가지게 될 겁니다.",
    author: "찰리 멍거",
  },
  {
    quote: "당신이 무엇을 배웠느냐에 집중한다면, 당신은 계속 성장할 수 있을 거예요.",
    author: "브라이언 웨이너",
  },
  {
    quote: "삶이란, 끊임없이 도전을 만나는 일입니다. 평생 계속되는 도전에 맞설 용기를 가지는 것, 이것이야말로 삶의 본질이에요.",
    author: "알프레드 아들러",
  },
];

const quoteView = document.getElementById("quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//HTML의 quote ID 가져오기

function quoteRandom() {
  let i = Math.floor(Math.random() * quotes.length);
  //랜덤*전체obj수(quotes.length) 를 floor로 감싸서 내림해주기.
  quote.innerText = quotes[i].quote;
  //#quote span:first-child 에게 quote 출력
  author.innerText = quotes[i].author;
  //#quote span:last-child에게 author 출력
}

quoteRandom();
//함수 실행
