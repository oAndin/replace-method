console.log("Hello World!");

darkmode.onclick = function darkMode () {
    if (normal.classList.contains(`active`)) {
        whiteMode.classList.add("active");
        normal.classList.remove("active");
        darkModeH1.style.color = `#000`
    } else {
        normal.classList.add("active");
        whiteMode.classList.remove("active");
        darkModeH1.style.color = `#fff`
    }
}