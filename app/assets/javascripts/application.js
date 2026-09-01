//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

  //AT A GLANCE -> making the icon work with the rest of the accordion
  let accordionIconBox = document.querySelectorAll(
    ".ataglance-accordion-iconbox",
  );
  accordionIconBox.forEach((icon) => {
    const button = icon
      .closest(".govuk-accordion__section-header")
      .querySelector(".govuk-accordion__section-button");
    icon.addEventListener("click", (e) => {
      button.focus();
      e.preventDefault();
    });
    icon.addEventListener("mousedown", (e) => {
      button.focus();
      e.preventDefault();
    });
  });

  //AT A GLANCE -> making the icon work with signposted link
  let signpostedLinkIcon = document.querySelectorAll(".ataglance-link__iconbox");
  signpostedLinkIcon.forEach((icon) => {
    const button = icon
      .closest(".govuk-link");
    icon.addEventListener("click", (e) => {
      button.focus();
      e.preventDefault();
    });
    icon.addEventListener("mousedown", (e) => {
      button.focus();
      e.preventDefault();
    });
  });

  
});

