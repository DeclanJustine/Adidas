function moveSlide(sectionId, direction) {
  const container = document.querySelector(`#${sectionId} .productContainer`);
  const items = container.children;
  const visibleItems = 4;
  const totalSlides = Math.ceil(items.length / visibleItems);

  let currentSlide = parseInt(container.dataset.currentSlide || 0);
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  container.style.transform = `translateX(-${currentSlide * 100}%)`;
  container.dataset.currentSlide = currentSlide;
}
