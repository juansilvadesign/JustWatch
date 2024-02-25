const imagestenp = [
  'url("./public/images/TenPuru/Card1.png")',
  'url("./public/images/TenPuru/Card2.png")',
  'url("./public/images/TenPuru/Card3.png")',
  'url("./public/images/TenPuru/Card4.png")',
  'url("./public/images/TenPuru/Card5.png")',
];

const imageston = [
  'url("./public/images/Tonikaku/Card1.png")',
  'url("./public/images/Tonikaku/Card2.png")',
  'url("./public/images/Tonikaku/Card3.png")',
  'url("./public/images/Tonikaku/Card4.png")',
  'url("./public/images/Tonikaku/Card5.png")',
  'url("./public/images/Tonikaku/Card6.png")',
  'url("./public/images/Tonikaku/Card7.png")',
];

const imagesspy = [
  'url("./public/images/SpyxFamily/Card1.png")',
  'url("./public/images/SpyxFamily/Card2.png")',
  'url("./public/images/SpyxFamily/Card3.png")',
  'url("./public/images/SpyxFamily/Card4.png")',
  'url("./public/images/SpyxFamily/Card5.png")',
  'url("./public/images/SpyxFamily/Card6.png")',
  'url("./public/images/SpyxFamily/Card7.png")',
  'url("./public/images/SpyxFamily/Card8.png")',
  'url("./public/images/SpyxFamily/Card9.png")',
  'url("./public/images/SpyxFamily/Card10.png")',
  'url("./public/images/SpyxFamily/Card11.png")',
];

const imageshell = [
  'url("./public/images/HellsParadise/Card1.png")',
  'url("./public/images/HellsParadise/Card2.png")',
  'url("./public/images/HellsParadise/Card3.png")',
  'url("./public/images/HellsParadise/Card4.png")',
  'url("./public/images/HellsParadise/Card5.png")',
  'url("./public/images/HellsParadise/Card6.png")',
];

const imageshero = [
  'url("./public/images/BokunoHero/Card1.png")',
  'url("./public/images/BokunoHero/Card2.png")',
  'url("./public/images/BokunoHero/Card3.png")',
  'url("./public/images/BokunoHero/Card4.png")',
  'url("./public/images/BokunoHero/Card5.png")',
  'url("./public/images/BokunoHero/Card6.png")',
  'url("./public/images/BokunoHero/Card7.png")',
  'url("./public/images/BokunoHero/Card8.png")',
  'url("./public/images/BokunoHero/Card9.png")',
];

const imagesmoshi = [
  'url("./public/images/MoDaoZuShi/Card1.png")',
  'url("./public/images/MoDaoZuShi/Card2.png")',
  'url("./public/images/MoDaoZuShi/Card3.png")',
  'url("./public/images/MoDaoZuShi/Card4.png")',
  'url("./public/images/MoDaoZuShi/Card5.png")',
  'url("./public/images/MoDaoZuShi/Card6.png")',
  'url("./public/images/MoDaoZuShi/Card7.png")',
  'url("./public/images/MoDaoZuShi/Card8.png")',
  'url("./public/images/MoDaoZuShi/Card9.png")',
];

function setupCardBehavior(cardId, images) {
  const card = document.getElementById(cardId);
  let currentIndex = 0;
  let intervalId;

  function changeBg() {
    currentIndex = (currentIndex + 1) % images.length;
    const bg = images[currentIndex];
    card.style.backgroundImage = bg;
  }

  card.addEventListener("mouseenter", () => {
    card.classList.add("smooth-transition");
    changeBg();
    intervalId = setInterval(changeBg, 4000);
  });

  card.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    resetBackgroundImage();
    card.classList.remove("smooth-transition");
  });

  function resetBackgroundImage() {
    currentIndex = 0;
    card.style.backgroundImage = images[currentIndex];
  }
}


setupCardBehavior("cardspy", imagesspy);

setupCardBehavior("cardton", imageston);

setupCardBehavior("cardtenp", imagestenp);

setupCardBehavior("cardhell", imageshell);

setupCardBehavior("cardhero", imageshero);

setupCardBehavior("cardmoshi", imagesmoshi);