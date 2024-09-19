// Array untuk menyimpan semua gambar setiap kategori
const images = [
    ["/assets/Original1(HumanMade).png", "/assets/Original2(Gucci).png", "/assets/Original3(Beyonce).png", "/assets/Original4(BadBunny).png"],
    ["/assets/Sport1(TraeYoung).png", "/assets/Sport2(DamianLillard).png", "/assets/Sport3(Messi).png", "/assets/Sport4(Yeezy).png"],
    ["/assets/Running1(Nasa).png", "/assets/Running2(AllBirds).png", "/assets/Running3(Parley).png", "/assets/Running4(Wood).png"],
    ["/assets/Kids1(Disney).png", "/assets/Kids2(Lego).png", "/assets/Kids3(HelloKitty).png", "/assets/Kids4(Marvel).png"]
];

let currentIndexes = [0, 0, 0, 0];

function changeSlide(categoryIndex, direction) {
    const imgElement = document.getElementById(`category${categoryIndex}`);
    const indicators = document.querySelectorAll(`#indicators${categoryIndex} .line`);

    imgElement.classList.add('fade-out');

    setTimeout(() => {
        currentIndexes[categoryIndex] = (currentIndexes[categoryIndex] + direction + images[categoryIndex].length) % images[categoryIndex].length;
        imgElement.src = images[categoryIndex][currentIndexes[categoryIndex]];

        imgElement.classList.remove('fade-out');
        imgElement.classList.add('fade-in');

        indicators.forEach((line, index) => {
            line.classList.toggle('active', index === currentIndexes[categoryIndex]);
        });
    }, 500); 

    setTimeout(() => {
        imgElement.classList.remove('fade-in');
    }, 1000);
}

function prevSlide(categoryIndex) {
    changeSlide(categoryIndex, -1);
}

function nextSlide(categoryIndex) {
    changeSlide(categoryIndex, 1); 
}

function initIndicators() {
    for (let i = 0; i < 4; i++) {
        const indicators = document.querySelectorAll(`#indicators${i} .line`);
        indicators[0].classList.add('active');
    }
}

document.addEventListener('Loaded', initIndicators);

