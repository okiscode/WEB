import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initYourExpectations from "./../components/initYourExpectations.js";
import initRegAndExplore from "./../components/initRegAndExplore.js";
import initMuchIsHappening from "./../components/initMuchIsHappening.js";
import initStepIntoTheFuture from "./../components/initStepIntoTheFuture.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section your_expectations"></section>
    <section class="section reg_and_explore"></section>
    <section class="section much_is_happening"></section>
    <section class="section step_into_the_future"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);

  const yourExpectationsNode = rootNode.querySelector(".your_expectations");
  initYourExpectations(yourExpectationsNode);

  const regAndExploreNode = rootNode.querySelector(".reg_and_explore");
  initRegAndExplore(regAndExploreNode);

  const muchIsHappeningNode = rootNode.querySelector(".much_is_happening");
  initMuchIsHappening(muchIsHappeningNode);

  const stepIntoTheFutureNode = rootNode.querySelector(".step_into_the_future");
  initStepIntoTheFuture(stepIntoTheFutureNode);
};

export default homePage;
