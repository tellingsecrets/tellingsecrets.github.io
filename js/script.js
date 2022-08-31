const btnClick = () => {
    const password = document.getElementById("inputPassword").value;
    if (password === "gabberwash") {
        window.location = '/success.html'
    } else {
        alert("Sucks to suck!");
    }
};

window.onload = () => {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        btnClick();
    });
};
