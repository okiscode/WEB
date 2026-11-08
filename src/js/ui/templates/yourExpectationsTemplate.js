export const createYourExpectationsImage = ({src, alt}) => {
  return `
    <div class="your_expectations_section__left">
      <img src="${src}" alt="${alt}">
    </div>
  `;
};

export const createYourExpectationsPretitle = (pretitle) => {
  return `
    <div class="your_expectations_section__pretitle">
      ${pretitle}
    </div>
  `;
};

export const createYourExpectationsHeader = (header) => {
  return `
    <h2 class="left__header">
      ${header}
    </h2>
  `;
};

export const createYourExpectationsDescription = (description) => {
  return `
    <div class="right__container">
      <p class="container__content">
        ${description}
      </p>
    </div>
  `;
};

export const createYourExpectationsButton = ({title, href}) => {
  return `
    <a href="${href}" class="right__cta">${title}</a>
  `;
};

export const YourExpectationsTemplate = ({
  yourExpectationsImage,
  yourExpectationsPretitle,
  yourExpectationsHeader,
  yourExpectationsDescription,
  yourExpectationsButton,
}) => {
  const yourExpectationsImageTemplate = createYourExpectationsImage(yourExpectationsImage);
  const yourExpectationsPretitleTemplate = createYourExpectationsPretitle(yourExpectationsPretitle);
  const yourExpectationsHeaderTemplate = createYourExpectationsHeader(yourExpectationsHeader);
  const yourExpectationsDescriptionTemplate = createYourExpectationsDescription(yourExpectationsDescription);
  const yourExpectationsButtonTemplate = createYourExpectationsButton(yourExpectationsButton);

  const resultTemplate = `
    ${yourExpectationsImageTemplate}
    <div class="your_expectations_section__right">
        ${yourExpectationsPretitleTemplate}
        ${yourExpectationsHeaderTemplate}
        ${yourExpectationsDescriptionTemplate}
        ${yourExpectationsButtonTemplate}
    </div>
  `;

  return resultTemplate;
};