const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        input.classList.add("clicked");
    });
});

const pass = document.querySelector("#pass");
const conf = document.querySelector("#confirm");
const warn = document.querySelector("#match");

[pass, conf].forEach((input) => {
    input.addEventListener("keyup", () => {
        if(pass.value !== conf.value){
            warn.style.opacity = "1";
            pass.classList.add("invalid");
            conf.classList.add("invalid");
        } else {
            warn.style.opacity = "0";
            pass.classList.remove("invalid");
            conf.classList.remove("invalid")
        }
    });
})
