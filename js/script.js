// Funcs
function toggle(element, visible) {
  const show = element.attr("class-onShow");
  const hide = element.attr("class-onHide");
  if (visible) {
    element.removeClass(hide);
    element.addClass(show);
  } else {
    element.removeClass(show);
    element.addClass(hide);
  }
}

// Main Object
const observer = new IntersectionObserver(
  (e) => e.forEach((e) => toggle($(e.target), e.isIntersecting)),
  { threshold: 0.1 }
);

// On loaded
$(() => {
  // activate the observer
  for (const element of $(".observe")) observer.observe(element);
  // Remove the page loading element
  setTimeout(() => $("#page-loading").remove(), 1000);
});
