// Defautl Namings
const classNameObserved = ".observe";
const animationttributeName = "animate";
const precentageOfVisiblity = 0.1;

// Funcs
function toggleTheClasses(element, visible) {
  element.classList
    .toggle(
      element.getAttribute(animationttributeName),
      visible
    );
}

// Main Object
const observer = new IntersectionObserver(entries=>{
  entries
    .forEach(e => toggleTheClasses(e.target, e.isIntersecting))
}, {
  threshold:precentageOfVisiblity
});

// Classes
document
  .querySelectorAll(classNameObserved)
  .forEach(element => observer.observe(element));

