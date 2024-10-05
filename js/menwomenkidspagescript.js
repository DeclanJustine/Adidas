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

// Membuat fungsi untuk mencari item-item dalam product container
function cariProduk() {
  // Mendapatkan nilai input dari search bar
  var input = document.getElementById("searchInput").value.toLowerCase();

  // Mendapatkan semua item dalam product container
  var produk = document.querySelectorAll(".productItem");

  // Looping semua item dalam product container
  for (var i = 0; i < produk.length; i++) {
    // Mendapatkan nama produk
    var namaProduk = produk[i]
      .querySelector(".productTitle")
      .textContent.toLowerCase();

    // Jika nama produk tidak sesuai dengan input, maka sembunyikan item
    if (namaProduk.indexOf(input) < 0) {
      produk[i].style.display = "none";
    } else {
      // Jika nama produk sesuai dengan input, maka tampilkan item
      produk[i].style.display = "block";
    }
  }
}

// Membuat event listener untuk search bar
document.getElementById("searchInput").addEventListener("input", cariProduk);

const searchInput = document.getElementById("searchInput");
const searchPage = document.querySelector(".search-page");
const searchResults = document.querySelector(".search-results");

searchInput.addEventListener("input", function () {
  const inputValue = searchInput.value.toLowerCase();
  const produk = document.querySelectorAll(".productItem");

  searchResults.innerHTML = "";

  produk.forEach(function (item) {
    const namaProduk = item
      .querySelector(".productTitle")
      .textContent.toLowerCase();
    if (namaProduk.includes(inputValue)) {
      const div = document.createElement("div");
      div.textContent = namaProduk;
      searchResults.appendChild(div);
    }
  });

  if (searchResults.children.length > 0) {
    searchPage.style.display = "block";
  } else {
    searchPage.style.display = "none";
  }
});
