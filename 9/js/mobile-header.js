const navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),onNavToggleClick=()=>{navMain.classList.toggle("main-nav--closed")},initMobileHeader=()=>{navMain.classList.remove("main-nav--nojs"),navMain.classList.add("main-nav--closed"),navToggle.addEventListener("click",onNavToggleClick)};export{initMobileHeader};