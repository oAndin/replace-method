console.log("Hello World!");
function startExplaination () {

}
darkmode.onclick = function darkMode() {
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
function showBtn() {
    begin.style.visibility = `visible`;
}
setTimeout(showBtn,10000);

begin.onclick = function startFun() {
    mainFun.innerHTML = ``;
};

prankBtn.onclick = function prank() {
    prankBtn.style.visibility = `hidden`;
    prankP.style.visibility = `visible`; 
    setTimeout(startExplaination, 10000);
}
