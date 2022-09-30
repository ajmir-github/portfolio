// Defautl Namings
const classNameObserved = ".observe";
const onShowAttributeName = "classShow";
const onHideAttributeName = "classHide";
const precentageOfVisiblity = 0.25;

// Funcs
function toggleTheClasses(element, visible) {
  const classShow = element.getAttribute(onShowAttributeName);
  const classHide = element.getAttribute(onHideAttributeName);
  if(visible){
    element.classList.remove(classHide);
    element.classList.add(classShow);
  } else {
    element.classList.remove(classShow);
    element.classList.add(classHide);
  }
}

// Main Object
const observer = new IntersectionObserver(entries=>{
  entries
    .forEach(e => toggleTheClasses(e.target, e.isIntersecting))
}, {
  threshold:precentageOfVisiblity
});

// Classes to obsever
function observeTheClasses(className) {
  document
  .querySelectorAll(className)
  .forEach(element => observer.observe(element));
}



function main() {
  // activate the observer
  observeTheClasses(classNameObserved);

  setTimeout(()=>{
    document
      .getElementById("page-loading")
      .style.display = "none";
  }, 2000);
}
