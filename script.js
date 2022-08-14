const arrows = document.querySelectorAll("i")
arrows.forEach((arrow) => {
    arrow.addEventListener("click", (eo) => {
        const answer = eo.target.parentElement.parentElement.getElementsByClassName("answer")[0];
        answer.classList.toggle("show-answer");
        if (answer.classList.contains("show-answer")) {
            eo.target.setAttribute("class", "fa-solid fa-angle-up");
        } else {
            eo.target.setAttribute("class", "fa-solid fa-angle-down");
        }
    })
})