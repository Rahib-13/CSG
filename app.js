const burger=document.querySelector(".fa-bars")
const menyu=document.querySelector("#menyu")

burger.addEventListener("click", (e)=>{
    menyu.classList.toggle("open")
})