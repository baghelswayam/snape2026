/* ==========================
   LOADER
========================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";

            setTimeout(function () {

                loader.style.display = "none";

            }, 500);

        }, 1500);

    }

});


/* ==========================
   CUSTOM CURSOR
========================== */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", function (e) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}


/* ==========================
   FEATURE CARDS
========================== */

const cards = document.querySelectorAll(".feature-card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


/* ==========================
   ANIMATED COUNTERS
========================== */

const counters = document.querySelectorAll(".card h1");

counters.forEach(function (counter) {

    let target = parseInt(counter.textContent.replace("+", ""));

    let count = 0;

    let speed = Math.ceil(target / 100);

    function updateCounter() {

        if (count < target) {

            count += speed;

            if (count > target) {

                count = target;

            }

            counter.textContent = count + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target + "+";

        }

    }

    updateCounter();

});


/* ==========================
   EMERGENCY POPUP
========================== */

setTimeout(function () {

    alert(
        "🚨 Emergency Alert System Active!\n\nStay informed and follow safety instructions."
    );

}, 4000);


/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const topBtn = document.createElement("button");

topBtn.textContent = "↑";

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00d4ff";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
const commandCards=document.querySelectorAll(".command-card");

commandCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});
