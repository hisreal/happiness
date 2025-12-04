/* Auto typing love letter */
const text = "3 John 1:2 - Dear friend, I am praying that you may prosper in all things and be in health, just as your soul prospers. ❤️";

let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 40);
    }
}
typeText();

/* Gift Box */
function openGift() {
    document.getElementById("gift-reveal").style.display = "block";
}

/* Slideshow */
let slideIndex = 1;
setInterval(() => {
    slideIndex++;
    if (slideIndex > 3) slideIndex = 1;
    document.getElementById("slideshow").src = `images/photo${slideIndex}.jpg`;
}, 2500);

/* Music */
function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
