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
const heroStats=document.querySelectorAll(".hero-stat h2");

heroStats.forEach(stat=>{

let target=parseInt(stat.textContent);

let count=0;

let speed=Math.ceil(target/80);

function update(){

if(count<target){

count+=speed;

if(count>target){

count=target;

}

stat.textContent=count;

requestAnimationFrame(update);

}

}

update();

});
const dashboardNumbers=document.querySelectorAll(".dashboard-card h1");

dashboardNumbers.forEach(item=>{

const value=parseInt(item.textContent);

if(!isNaN(value)){

let count=0;

const speed=Math.ceil(value/80);

function update(){

if(count<value){

count+=speed;

if(count>value){

count=value;

}

item.textContent=count;

requestAnimationFrame(update);

}

}

update();

}

});
const sosButton=document.querySelector(".sos-btn");

if(sosButton){

sosButton.addEventListener("click",()=>{

alert(
"🚨 SOS Activated!\n\nEmergency request has been initiated."
);

});

}
const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

const btn=item.querySelector(".faq-question");

btn.addEventListener("click",()=>{

item.classList.toggle("active");

});

});
const contactForm=document.querySelector(".contact-form button");

if(contactForm){

contactForm.addEventListener("click",()=>{

alert("✅ Your message has been submitted.");

});

}
const subscribeBtn=document.querySelector(".subscribe-btn");

if(subscribeBtn){

subscribeBtn.addEventListener("click",()=>{

alert("✅ Newsletter subscription successful!");

});

}
const themeBtn=document.getElementById("themeToggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.textContent="☀️";

}else{

themeBtn.textContent="🌙";

}

});

}
const widgetSOS=document.querySelector(".widget-sos");

if(widgetSOS){

widgetSOS.addEventListener("click",()=>{

alert(
"🚨 Emergency mode activated.\n\nPlease contact your local emergency services if immediate assistance is required."
);

});

}
/* LIVE CLOCK */

const liveClock=document.getElementById("liveTime");

function updateClock(){

if(liveClock){

const now=new Date();

liveClock.textContent=now.toLocaleTimeString();

}

}

setInterval(updateClock,1000);

updateClock();
const locationBtn=document.getElementById("locationBtn");

if(locationBtn){

locationBtn.addEventListener("click",()=>{

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position)=>{

document.getElementById("locationStatus").textContent="✅ Location Found";

document.getElementById("latitude").textContent=

"Latitude: "+position.coords.latitude.toFixed(6);

document.getElementById("longitude").textContent=

"Longitude: "+position.coords.longitude.toFixed(6);

},

()=>{

document.getElementById("locationStatus").textContent=

"❌ Unable to access location.";

}

);

}else{

document.getElementById("locationStatus").textContent=

"❌ Geolocation not supported.";

}

});

}
/* INTERACTIVE MAP */

const mapContainer=document.getElementById("map");

if(mapContainer){

const map=L.map("map").setView([20.5937,78.9629],5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{

attribution:"© OpenStreetMap"

}).addTo(map);

/* Example markers */

L.marker([28.6139,77.2090])
.addTo(map)
.bindPopup("🏛 Emergency Command Center");

L.marker([19.0760,72.8777])
.addTo(map)
.bindPopup("🏥 Partner Hospital");

L.marker([22.7196,75.8577])
.addTo(map)
.bindPopup("🏠 Emergency Shelter");

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(position){

const lat=position.coords.latitude;

const lon=position.coords.longitude;

map.setView([lat,lon],12);

L.marker([lat,lon])

.addTo(map)

.bindPopup("📍 Your Location")

.openPopup();

});

}

}
