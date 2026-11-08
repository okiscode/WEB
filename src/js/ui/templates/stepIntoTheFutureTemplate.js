export const createStepIntoTheFutureHeader = (header) => {
  return `
    <div class="step_into_the_future__header">
      <h2 class="header__content">
        ${header}
      </h2>
    </div>
  `;
};

export const createStepIntoTheFutureButton = ({title, href}) => {
  return `
    <div class="step_into_the_future__cta">
      <div class="cta_button">
        <a href="${href}" class="middle__cta">${title}</a>
      </div>
    </div>
  `;
};

export const createStepIntoTheFutureInfo = ({img: {src, alt}, address, copyright}) => {
  return `
    <div class="step_into_the_future__info">
      <img src="${src}" alt="${alt}">
      <p class="step_into_the_future__info_text">
        ${address}
      </p>
      <p class="step_into_the_future__info_copyright">
        ${copyright}
      </p>
    </div>
  `;
};

export const createStepIntoTheFutureLinks = ({titleButton, href}) => {
  return `
    <a href="${href}" class="cta_buttons">${titleButton}</a>
  `;
};

export const createStepIntoTheFutureLinksTemplate = ({title, buttons}) => {
  const buttonsTemplate = buttons.map((button) => createStepIntoTheFutureLinks(button)).join("");

  return `
    <div class="step_into_the_future__links">
      <h3 class="step_into_the_future__links_title">
        ${title}
      </h3>
      <div class="step_into_the_future__links_buttons">
        ${buttonsTemplate}
      </div>
    </div>
  `;
};

export const createStepIntoTheFutureCompany = ({titleButton, href}) => {
  return `
    <a href="${href}" class="cta_buttons">${titleButton}</a>
  `;
};

export const createStepIntoTheFutureCompanyTemplate = ({title, buttons}) => {
  const companyTemplate = buttons.map((button) => createStepIntoTheFutureCompany(button)).join("");

  return `
    <div class="step_into_the_future__company">
      <h3 class="step_into_the_future__company_title">
        ${title}
      </h3>
      <div class="step_into_the_future__company_buttons">
        ${companyTemplate}
      </div>
    </div>
  `;
};

export const createStepIntoTheFutureContacts = ({title, address, phone: {phoneTitle, phoneHref}, email: {emailTitle, emailHref}}) => {
  return `
    <div class="step_into_the_future__contacts">
      <h3 class="step_into_the_future__contacts_title">
        ${title}
      </h3>
      <p class="step_into_the_future__contacts_street">
        ${address}
      </p>
      <div class="step_into_the_future__contacts_buttons">
        <a href="${phoneHref}" class="cta_buttons">${phoneTitle}</a>
        <a href="${emailHref}" class="cta_buttons">${emailTitle}</a>
      </div>
    </div>
  `;
};

export const createStepIntoTheFutureCopyright = (copyright) => {
  return `
    <div class="step_into_the_future__copyright">
      <p class="step_into_the_future__copyright_text">
        ${copyright}
      </p>
    </div>
  `;
};

export const stepIntoTheFutureTemplate = ({
  stepIntoTheFutureHeader,
  stepIntoTheFutureButton,
  stepIntoTheFutureInfo,
  stepIntoTheFutureLinks,
  stepIntoTheFutureCompany,
  stepIntoTheFutureContacts,
  stepIntoTheFutureCopyright,
}) => {
  const stepIntoTheFutureHeaderTemplate = createStepIntoTheFutureHeader(stepIntoTheFutureHeader);
  const stepIntoTheFutureButtonTemplate = createStepIntoTheFutureButton(stepIntoTheFutureButton);
  const stepIntoTheFutureInfoTemplate = createStepIntoTheFutureInfo(stepIntoTheFutureInfo);
  const stepIntoTheFutureLinksTemplate = createStepIntoTheFutureLinksTemplate(stepIntoTheFutureLinks);
  const stepIntoTheFutureCompanyTemplate = createStepIntoTheFutureCompanyTemplate(stepIntoTheFutureCompany);
  const stepIntoTheFutureContactsTemplate = createStepIntoTheFutureContacts(stepIntoTheFutureContacts);
  const stepIntoTheFutureCopyrightTemplate = createStepIntoTheFutureCopyright(stepIntoTheFutureCopyright);

  const resultTemplate = `
    ${stepIntoTheFutureHeaderTemplate}
    ${stepIntoTheFutureButtonTemplate}
    <div class="step_into_the_future__content">
      ${stepIntoTheFutureInfoTemplate}
      ${stepIntoTheFutureLinksTemplate}
      ${stepIntoTheFutureCompanyTemplate}
      ${stepIntoTheFutureContactsTemplate}
    </div>
    ${stepIntoTheFutureCopyrightTemplate}
  `;

  return resultTemplate;
};