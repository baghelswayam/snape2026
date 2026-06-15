// =======================
// ROADRESCUE AI SCRIPT
// =======================

// Page Loaded
window.onload = function(){
console.log("RoadRescue AI Loaded");
};

// =======================
// Hero Buttons
// =======================

const requestBtn =
document.querySelector(".primary-btn");

if(requestBtn){

```
requestBtn.addEventListener(
"click",
function(){

    alert(
    "Emergency request initiated!"
    );

});
```

}

const trackBtn =
document.querySelector(".secondary-btn");

if(trackBtn){

```
trackBtn.addEventListener(
"click",
function(){

    alert(
    "Technician tracking enabled!"
    );

});
```

}

// =======================
// Form Validation
// =======================

const form =
document.querySelector("form");

if(form){

form.addEventListener(
"submit",
function(e){

```
e.preventDefault();

const location =
document.querySelector(
'input[type="text"]'
);

if(
location.value.trim()===""
){

    alert(
    "Please enter your location"
    );

    return;

}

alert(
"Help request submitted successfully!"
);

form.reset();
```

});

}

// =======================
// Card Hover Effect
// =======================

const cards =
document.querySelectorAll(
".card,.service-card"
);

cards.forEach(card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.transform=
"translateY(-5px)";

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform=
"translateY(0px)";

});

});

// =======================
// FAQ Effect
// =======================

const faqItems =
document.querySelectorAll(
".faq-item"
);

faqItems.forEach(item=>{

item.addEventListener(
"click",
()=>{

item.classList.toggle(
"active"
);

});

});

// =======================
// Navbar Shadow
// =======================

window.addEventListener(
"scroll",
()=>{

const navbar =
document.querySelector(
".navbar"
);

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.3)";

}else{

navbar.style.boxShadow =
"none";

}

});

console.log(
"RoadRescue AI Ready"
);
