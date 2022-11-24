const nav = document.querySelector(".nav");
    const menu = document.querySelector(".menu");
    const showcase = document.querySelector(".showcase");

    menu.addEventListener("click",()=>{
        nav.classList.toggle("active");
        showcase.classList.toggle("active");
    })
