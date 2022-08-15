const arrows = document.querySelectorAll("i")
arrows.forEach((arrow) => {
        arrow.addEventListener("click",function (eo) {
        arrows.forEach(function (a) {
            if(a===eo.target){
                a.parentElement.parentElement.getElementsByClassName("answer")[0].classList.toggle("show-answer");
            }else{
                a.parentElement.parentElement.getElementsByClassName("answer")[0].classList.remove("show-answer")
            }
            if (a.parentElement.parentElement.getElementsByClassName("answer")[0].classList.contains("show-answer")) {
                a.setAttribute("class", "fa-solid fa-angle-up");
            } else {
                a.setAttribute("class", "fa-solid fa-angle-down");
            }
        })
    })
})
