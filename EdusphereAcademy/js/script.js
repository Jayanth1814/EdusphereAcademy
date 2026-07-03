const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };

    topBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

// =============================
// Sticky Navbar Shadow
// =============================

const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
}

// =============================
// Reveal Animation
// =============================

const reveals = document.querySelectorAll(
".card,.course-card,.facility,.testimonial,.news-card"
);

function revealItems(){

const trigger = window.innerHeight * 0.85;

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

}

reveals.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition=".8s";

});

window.addEventListener("scroll",revealItems);

revealItems();

// =============================
// Course Button
// =============================

document.querySelectorAll(".course-card a")
.forEach(button=>{

button.addEventListener("click",()=>{

alert("Opening Course Details...");

});

});

// =============================
// Apply Button
// =============================

document.querySelectorAll(".btn")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// =============================
// Footer Year
// =============================

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML=
`© ${new Date().getFullYear()} EduSphere Academy. All Rights Reserved.`;

}
const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("🎉 Registration Completed Successfully!\n\nThank you for registering with EduSphere Academy.");

        form.reset();
    });
}