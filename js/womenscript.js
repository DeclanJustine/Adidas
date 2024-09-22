function moveSlide(sectionId, n) {
  var section = document.getElementById(sectionId);
  var container = section.querySelector(".productContainer");
  var items = container.querySelectorAll(".productItem");
  var totalItems = items.length;
  var visibleItems = 4;
  var productWidth = items[0].offsetWidth;
  var maxIndex = Math.ceil(totalItems / visibleItems) - 1;

  var currentTransform = container.style.transform || "translateX(0px)";
  var currentX = parseInt(currentTransform.match(/-?\d+/)[0]);
  var currentIndex = Math.abs(currentX / (productWidth * visibleItems));

  var nextIndex = (currentIndex + n + maxIndex + 1) % (maxIndex + 1);

  container.style.transform = `translateX(${
    -productWidth * visibleItems * nextIndex
  }px)`;
}
