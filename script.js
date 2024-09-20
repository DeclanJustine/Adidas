const images = [
    ["/assets/Original1(HumanMade).png", "/assets/Original2(Gucci).png", "/assets/Original3(Beyonce).png", "/assets/Original4(BadBunny).png"],
    ["/assets/Sport1(TraeYoung).png", "/assets/Sport2(DamianLillard).png", "/assets/Sport3(Messi).png", "/assets/Sport4(Yeezy).png"],
    ["/assets/Running1(Nasa).png", "/assets/Running2(AllBirds).png", "/assets/Running3(Parley).png", "/assets/Running4(Wood).png"],
    ["/assets/Kids1(Disney).png", "/assets/Kids2(Lego).png", "/assets/Kids3(HelloKitty).png", "/assets/Kids4(Marvel).png"]
];

let currentIndex = [0, 0, 0, 0];

function changeSlide(categoryIndex, direction) {
    const $imgElement = $(`#category${categoryIndex}`);
    const $indicators = $(`#indicator${categoryIndex} .line`);

    $imgElement.addClass('fade-out');

    setTimeout(() => {
        currentIndex[categoryIndex] = (currentIndex[categoryIndex] + direction + images[categoryIndex].length) % images[categoryIndex].length;
        $imgElement.attr('src', images[categoryIndex][currentIndex[categoryIndex]]);

        $imgElement.removeClass('fade-out').addClass('fade-in');

        $indicators.each(function (index) {
            $(this).toggleClass('active', index === currentIndex[categoryIndex]);
        });
    }, 500);

    setTimeout(() => {
        $imgElement.removeClass('fade-in');
    }, 1000);
}

function prevSlide(categoryIndex) {
    changeSlide(categoryIndex, -1);
}

function nextSlide(categoryIndex) {
    changeSlide(categoryIndex, 1); 
}

function initIndicator() {
    for (let i = 0; i < 4; i++) {
        const $indicators = $(`#indicator${i} .line`);
        $indicators.eq(0).addClass('active');
    }
}

window.onload = initIndicator;

const slides = [
    {
        image: "/assets/influencer/PharrellWilliams.png",
        title: "Pharrell Williams",
        description: `Pharrell Williams has consistently spoken positively about his collaboration with Adidas, particularly through his Humanrace™ line. His partnership with Adidas has resulted in iconic sneakers like the Hu NMD and, more recently, the Humanrace Sichona and Samba collections. Pharrell often praises Adidas for its willingness to innovate while honoring the heritage of classic designs, such as the Samba. The premium materials and thoughtful design details of these collections highlight both brands' commitment to blending style, comfort, and cultural relevance. <br>- Adidas Hu NMD S1 RYAT`
    },
    {
        image: "/assets/influencer/Beyonce.png",
        title: "Beyoncé",
        description: `Beyoncé partnered with Adidas to relaunch her Ivy Park brand. She has spoken highly of the collaboration, emphasizing how Adidas supported her vision of blending performance and lifestyle apparel. Beyoncé praised the brand for embracing creativity and innovation, which allowed her to create inclusive, body-positive designs. <br>- Adidas X Ivy Park Super Sleek Chunky Sneakers`
    },
    {
        image: "/assets/influencer/DavidBeckham.png",
        title: "David Beckham",
        description: `As a long-time Adidas partner, Beckham has always praised the brand's quality and attention to detail. His signature Predator football boots became iconic, and Beckham often credits Adidas for allowing him to work closely on the designs, making them both functional and stylish. <br>- Adidas Predator Pulse FG`
    },
    {
        image: "/assets/influencer/JamesHarden.png",
        title: "James Harden    ",
        description: `NBA superstar James Harden's signature line of basketball shoes with Adidas has been a success both on and off the court. He frequently highlights Adidas' focus on performance and comfort, as well as their willingness to incorporate his personality into the designs <br>- Adidas Harden Vol 7`
    }
];

let currentSlide = 0;

function updateSlide() {
    const $imageElement = $("#categoryImage");
    const $titleElement = $("#commentTextTitle");
    const $descriptionElement = $("#commentText");

    $imageElement.fadeOut(500, function () {
        $imageElement.attr('src', slides[currentSlide].image);
        $titleElement.html(slides[currentSlide].title);
        $descriptionElement.html(slides[currentSlide].description);

        $imageElement.fadeIn(500);
    });
}


function nextSlides() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function prevSlides() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

updateSlide();
