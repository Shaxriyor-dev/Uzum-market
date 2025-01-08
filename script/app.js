const login1 = document.getElementById("login-1");
const login2 = document.getElementById("login-2");
const login3 = document.getElementById("login-3");

// login3.addEventListener('click' , ()=>{
//     setTimeout(function () {
//            window.location.pathname = "pages/Cart.index.html"
//     }, 500)

// })
// login2.addEventListener('click' , ()=>{
//     setTimeout(function () {
//            window.location.pathname = "pages/Likes.html"
//     }, 500)

// })
// login1.addEventListener('click' , ()=>{
//     setTimeout(function () {
//            window.location.pathname = "pages/accaund.html"
//     }, 500)

// })

//        Scrolll

const btn12 = document.getElementById("btn-12");
const container3 = document.querySelector(".fromse");

btn12.addEventListener("click", () => {
  container3.style.display = "block";
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

btn1.addEventListener("click", () => {
  setTimeout(function () {
    window.location.href = "pages/Hammasi.html";
  }, 500);
});

btn2.addEventListener("click", () => {
  setTimeout(function () {
    window.location.href = "pages/Hammasi.html";
  }, 500);
});

btn3.addEventListener("click", () => {
  setTimeout(function () {
    window.location.href = "pages/Hammasi.html";
  }, 500);
});

btn4.addEventListener("click", () => {
  setTimeout(function () {
    window.location.href = "pages/Hammasi.html";
  }, 500);
});
