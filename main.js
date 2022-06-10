const btn = document.querySelectorAll(".btn");

const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", (eo) => {

    const screenResult = document.getElementById("screen-result");

    if (eo.target.classList == "btn btnnum") {
        screenResult.innerText += eo.target.textContent;
        return;
    }


    else if (eo.target.classList == "btn btnclear") {
        screenResult.innerText = "";
        return;
    }


    else if (eo.target.classList == "btn btnop") {

        screenResult.innerText += eo.target.textContent;
        return;

    }
    else if (eo.target.classList == "btn btnpar") {

        screenResult.innerText += eo.target.textContent;
        return;
    }


    else if (eo.target.classList == "btn btnvalue") {

        screenResult.innerText = eval(screenResult.innerText);

        return;
    }
});







