export const createRegAndExplorePretitle = (pretitle) => {
  return `
    <p class="container__pretitle">
      ${pretitle}
    </p>
  `;
};

export const createRegAndExploreDescription = (description) => {
  return `
    <p class="container__content">
      ${description}
    </p>
  `;
};

export const createRegAndExploreButton = ({title, href}) => {
  return `
    <div class="reg_and_explore__right">
      <a href="${href}" class="right__cta">${title}</a>
    </div>
  `;
};

export const RegAndExploreTemplate = ({
  regAndExplorePretitle,
  regAndExploreDescription,
  regAndExploreButton,
}) => {
  const regAndExplorePretitleTemplate = createRegAndExplorePretitle(regAndExplorePretitle);
  const regAndExploreDescriptionTemplate = createRegAndExploreDescription(regAndExploreDescription);
  const regAndExploreButtonTemplate = createRegAndExploreButton(regAndExploreButton);

  const resultTemplate = `
    <div class="reg_and_explore__left">
        ${regAndExplorePretitleTemplate}
        ${regAndExploreDescriptionTemplate}
    </div>
    ${regAndExploreButtonTemplate}
  `;

  return resultTemplate;
};