// =========================
// PREMIUM BIRTHDAY WEBSITE
// Script Part 1
// =========================

// Loader

const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

        document.getElementById("galaxy").scrollIntoView({
            behavior: "smooth"
        });

    }, 800);

});

// =========================
// Continue Button

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    document.getElementById("love").scrollIntoView({
        behavior: "smooth"
    });

});

// =========================
// Typewriter

const typing = document.getElementById("typing");

const message =

`Happy Birthday, My Queen Eshya ❤️

Every heartbeat reminds me how special you are.

Thank you for coming into my life.

I hope today brings you endless smiles and happiness.

I Love You Forever. 💖`;

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }

}

window.onload = ()=>{

    setTimeout(typeWriter,1200);

};
// =========================
// Script Part 2
// Love Letter
// Gift
// Memory Slider
// =========================

// LOVE LETTER

const letterBtn = document.getElementById("letterBtn");
const loveLetter = document.getElementById("loveLetter");
const letterText = document.getElementById("letterText");

const finalLetter = `আমার প্রিয় মিমি ❤️

শুভ জন্মদিন, আমার জীবনের সবচেয়ে সুন্দর মানুষ।

তোমার হাসিটা সবসময় এভাবেই সুন্দর থাকুক, এটাই আমার সবচেয়ে বড় চাওয়া।

তোমার জীবনের প্রতিটি দিন আনন্দ, শান্তি আর ভালোবাসায় ভরে উঠুক।

আমি তোমাকে কথা দিচ্ছি—
পুরো পৃথিবী যখন তোমার বিপক্ষে চলে যাবে,
তখন আমি একমাত্র তোমার পক্ষে থাকবো।

তুমি আমার কাছে সবসময়ই সবচেয়ে স্পেশাল থাকবে।

I Love You Forever. ❤️`;

if(letterBtn){

letterBtn.addEventListener("click",()=>{

loveLetter.classList.toggle("show");
letterText.innerHTML=finalLetter.replace(/\n/g,"<br>");

});

}

// =========================
// GIFT BOX

const giftBox=document.getElementById("giftBox");
const giftMessage=document.getElementById("giftMessage");

if(giftBox){

giftBox.addEventListener("click",()=>{

giftBox.style.transform="scale(1.2) rotate(15deg)";

setTimeout(()=>{

giftBox.innerHTML="💖";
giftMessage.style.display="block";

},700);

});

}

// =========================
// MEMORY SLIDER

const slideImage=document.getElementById("slideImage");

const images=[
"mimi1.jpg",
"mimi2.jpg"
];

let current=0;

setInterval(()=>{

current++;

if(current>=images.length){

current=0;

}

slideImage.src=images[current];

},3000);
// =========================
// PREMIUM BIRTHDAY WEBSITE
// Script Part 3
// Music - Cake - Poster - Popup
// =========================

// MUSIC

const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

if (musicBtn && birthdayMusic) {

    musicBtn.addEventListener("click", () => {

        birthdayMusic.play();

        musicBtn.innerHTML = "🎵 Playing Heeriye ❤️";

    });

}

// =========================
// CAKE

const birthdayCake = document.getElementById("birthdayCake");

if (birthdayCake) {

    birthdayCake.addEventListener("click", () => {

        birthdayCake.style.transform = "scale(1.25)";

        setTimeout(() => {

            birthdayCake.style.transform = "scale(1)";

            alert("🎂 Happy Birthday My Queen Eshya ❤️");

        }, 500);

    });

}

// =========================
// POSTER

const poster = document.getElementById("poster");

if (poster) {

    poster.addEventListener("click", () => {

        poster.classList.toggle("zoom");

    });

}

// =========================
// FINAL POPUP

const finalBtn = document.getElementById("finalBtn");
const finalPopup = document.getElementById("finalPopup");
const closePopup = document.getElementById("closePopup");

if (finalBtn) {

    finalBtn.addEventListener("click", () => {

        finalPopup.style.display = "flex";

    });

}

if (closePopup) {

    closePopup.addEventListener("click", () => {

        finalPopup.style.display = "none";

    });

}
// =========================
// PREMIUM BIRTHDAY WEBSITE
// Script Part 4 (FINAL)
// Hearts - Petals - Fireworks
// =========================

// FLOATING HEARTS

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 700);

// =========================
// ROSE PETALS

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";
    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (20 + Math.random() * 15) + "px";
    petal.style.animationDuration = (6 + Math.random() * 3) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 9000);

}

setInterval(createPetal, 1200);

// =========================
// FIREWORKS

function createFirework() {

    const firework = document.createElement("div");

    firework.className = "firework";
    firework.innerHTML = "✨";

    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1500);

}

setInterval(createFirework, 2000);

// =========================
// END

console.log("❤️ Happy Birthday My Queen Eshya ❤️");


