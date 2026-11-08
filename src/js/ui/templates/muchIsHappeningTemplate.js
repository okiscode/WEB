export const createMuchIsHappeningHeader = (header) => {
  return `
    <div class="much_is_happening__header">
      <h2 class="header__content">
        ${header}
      </h2>
    </div>
  `;
};

export const createMuchIsHappeningCards = ({cardName, img: {src, alt}, date, cardTitle, button: {title, href}}) => {
  return `
    <div class="${cardName}">
      <img src="${src}" alt="${alt}">
      <div class="container__content">
        <p class="much_is_happening__date">
          ${date}
        </p>
        <h3 class="much_is_happening__title">
          ${cardTitle}
        </h3>
        <a href="${href}">${title}</a>
      </div>
    </div>
  `;
};

export const createMuchIsHappeningCardsTemplate = (cards) => {
  const cardsTemplate = cards.map((card) => createMuchIsHappeningCards(card)).join("");

  return cardsTemplate;
};

export const muchIsHappeningTemplate = ({
  muchIsHappeningHeader,
  muchIsHappeningCards,
}) => {
  const muchIsHappeningHeaderTemplate = createMuchIsHappeningHeader(muchIsHappeningHeader);
  const muchIsHappeningCardsTemplate = createMuchIsHappeningCardsTemplate(muchIsHappeningCards);

  const resultTemplate = `
        ${muchIsHappeningHeaderTemplate}
        <div class="much_is_happening__grid">
            ${muchIsHappeningCardsTemplate}
        </div>
    `;

  return resultTemplate;
};