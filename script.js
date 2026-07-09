// =========================
// Birthday Website Script
// Part 1
// =========================

// Typewriter Text
const typingText =
"I made this little surprise only for you, my Queen Eshya. ❤️";

const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < typingText.length) {

        typing.innerHTML += typingText.charAt(index);

        index++;

        setTimeout(typeWriter, 70);

    }

}

window.onload = () => {

    setTimeout(typeWriter, 6500);

};

// =========================
// Music
// =========================

const music = document.getElementById("birthdayMusic");

const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {

    music.play();

    musicBtn.innerHTML = "🎵";

};w
// =========================
// Birthday Website Script
// Part 2
// =========================


// Gift Box Opening
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

if (giftBox) {

    giftBox.onclick = () => {

        giftBox.classList.add("open");

        setTimeout(() => {

            if (giftMessage) {

                giftMessage.style.display = "block";

            }

        }, 1000);

    };

}


// Love Letter
const letterBtn = document.getElementById("letterBtn");
const loveLetter = document.getElementById("loveLetter");

if (letterBtn) {

    letterBtn.onclick = () => {

        loveLetter.classList.toggle("show");

    };

}


// Surprise Poster
const poster = document.getElementById("poster");

if (poster) {

    poster.onclick = () => {

        poster.classList.toggle("zoom");

    };

}
// =========================
// Birthday Website Script
// Part 3
// =========================


// Floating Hearts Effect

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 6000);

}


setInterval(createHeart, 500);


// Rose Petals Effect

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";


    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (Math.random() * 5 + 5) + "s";


    document.body.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 10000);

}


setInterval(createPetal, 800);
// =========================
// Birthday Website Script
// Part 4
// =========================


// Fireworks Effect

function createFirework() {

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.innerHTML = "✨";


    firework.style.left = Math.random() * 100 + "vw";

    firework.style.top = Math.random() * 70 + "vh";


    document.body.appendChild(firework);


    setTimeout(() => {

        firework.remove();

    }, 2000);

}


setInterval(createFirework, 1500);



// Scroll Reveal Animation

const revealElements = document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



// Final Birthday Message

const finalText =
"Happy Birthday My Queen Eshya ❤️👑";


const finalMessage =
document.getElementById("finalMessage");


if(finalMessage){

    finalMessage.innerHTML = finalText;
  // =========================
// Birthday Website Script
// Part 5
// =========================


// Smooth Button Click Effects

const buttons = document.querySelectorAll("button");


buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.9)";


        setTimeout(() => {

            btn.style.transform = "scale(1)";

        }, 150);

    });

});



// Countdown to Birthday Surprise

const countdown =
document.getElementById("countdown");


function updateCountdown(){

    if(!countdown) return;


    const target =
    new Date("January 1, 2027 00:00:00").getTime();


    const now =
    new Date().getTime();


    const distance =
    target - now;


    if(distance < 0){

        countdown.innerHTML =
        "🎉 The Surprise Has Started ❤️";

        return;

    }


    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));


    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds =
    Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    countdown.innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;

}


setInterval(updateCountdown,1000);

updateCountdown();


// Website Loaded Animation

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

  }
