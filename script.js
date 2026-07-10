// =========================
// Birthday Website Script
// Part 1
// =========================

// Start Button
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        intro.style.display = "none";

        document.getElementById("galaxy")
        .scrollIntoView({
            behavior: "smooth"
        });

    });

}

// =========================
// Typewriter Effect
// =========================

const typing = document.getElementById("typing");

const message =
"I made this little surprise only for you, My Queen Eshya. ❤️ Every heartbeat reminds me how special you are. Happy Birthday, My Love. 💖";

let i = 0;

function typeWriter(){

    if(!typing) return;

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,50);

    }

}

window.addEventListener("load",()=>{

    setTimeout(typeWriter,1500);

});

// =========================
// Music
// =========================

const music =
document.getElementById("birthdayMusic");

const musicBtn =
document.getElementById("musicBtn");

if(musicBtn){

    musicBtn.onclick = ()=>{

        music.play();

        musicBtn.innerHTML =
        "🎵 Playing...";

    };

    }
// =========================
// Birthday Website Script
// Part 2
// =========================

// Continue Button

const nextBtn = document.getElementById("nextBtn");

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        document.getElementById("love")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}

// =========================
// Gift Box
// =========================

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

if(giftBox){

    giftBox.onclick = ()=>{

        giftBox.style.transform =
        "scale(1.2) rotate(15deg)";

        setTimeout(()=>{

            giftBox.innerHTML = "💖";

            if(giftMessage){

                giftMessage.style.display =
                "block";

            }

        },700);

    };

}

// =========================
// Love Letter
// =========================

const letterBtn =
document.getElementById("letterBtn");

const loveLetter =
document.getElementById("loveLetter");

const letterText =
document.getElementById("letterText");

const fullLetter =
`My Dear Eshya ❤️

Happy Birthday to the most beautiful person in my life.

I hope your smile always shines brighter than the stars.

No matter what happens,
I will always pray for your happiness.

I Love You Forever. 💖`;

if(letterBtn){

    letterBtn.onclick = ()=>{

        loveLetter.classList.toggle("show");

        letterText.innerText = fullLetter;

    };

}
// =========================
// Birthday Website Script
// Part 3
// =========================

// Poster Zoom

const poster = document.getElementById("poster");

if(poster){

    poster.onclick = ()=>{

        poster.classList.toggle("zoom");

    };

}

// =========================
// Floating Hearts
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.animationDuration =
    (Math.random()*3+3)+"s";

    heart.style.fontSize =
    (Math.random()*20+15)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,500);

// =========================
// Rose Petals
// =========================

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration =
    (Math.random()*5+5)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,800);
// =========================
// Birthday Website Script
// Part 4
// =========================

// Final Surprise Popup

const finalBtn = document.getElementById("finalBtn");
const finalPopup = document.getElementById("finalPopup");
const closePopup = document.getElementById("closePopup");

if(finalBtn){

    finalBtn.onclick = ()=>{

        finalPopup.style.display = "flex";

    };

}

if(closePopup){

    closePopup.onclick = ()=>{

        finalPopup.style.display = "none";

    };

}

// =========================
// Countdown Animation
// =========================

const countdown = document.getElementById("countdown");

if(countdown){

    const numbers = countdown.querySelectorAll("span");

    numbers.forEach((num,index)=>{

        setTimeout(()=>{

            num.style.transform = "scale(1.3)";
            num.style.color = "#ff4da6";

        },index*1000);

    });

}

// =========================
// Firework Effect
// =========================

function createFirework(){

    const firework = document.createElement("div");

    firework.innerHTML = "✨";

    firework.style.position = "fixed";
    firework.style.left = Math.random()*100+"vw";
    firework.style.top = Math.random()*100+"vh";
    firework.style.fontSize = "30px";
    firework.style.zIndex = "999";

    document.body.appendChild(firework);

    setTimeout(()=>{

        firework.remove();

    },1500);

}

setInterval(createFirework,1200);
// =========================
// Birthday Website Script
// Part 5 (Final)
// =========================

// Button Click Animation

const buttons = document.querySelectorAll("button");

buttons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        btn.style.transform = "scale(.95)";

        setTimeout(()=>{

            btn.style.transform = "scale(1)";

        },150);

    });

});

// =========================
// Auto Scroll Reveal

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

sections.forEach((section)=>{

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// =========================
// Final Message

console.log("❤️ Happy Birthday My Queen Eshya ❤️");

// =========================
// End of Script
// =========================
