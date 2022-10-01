// Defautl Namings
const classNameObserved = ".observe";
const onShowAttributeName = "classShow";
const onHideAttributeName = "classHide";
const precentageOfVisiblity = 0.1;

// Funcs
function toggleTheClasses(element, visible) {
  const classShow = element.attr(onShowAttributeName);
  const classHide = element.attr(onHideAttributeName);
  if(visible){
    element.removeClass(classHide);
    element.addClass(classShow);
  } else {
    element.removeClass(classShow);
    element.addClass(classHide);
  }
}

// Main Object
const observer = new IntersectionObserver(entries=>{
  entries
    .forEach(e => toggleTheClasses($(e.target), e.isIntersecting))
}, {
  threshold:precentageOfVisiblity
});

// Classes to obsever
function observeTheClasses(className) {
  // document
  // .querySelectorAll(className)
  // .forEach(element => observer.observe(element));
  
  // Jquery
  for (const element of $(className))
    observer.observe(element);
}



// On loaded
$(()=>{
  // activate the observer
  observeTheClasses(classNameObserved);
  
  setTimeout(()=>{
    $("#page-loading").remove();
  }, 2000);
})