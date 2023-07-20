console.log("Hello World!");
function startExplaination () {
    explanation.style.display = `block`;
    innerHTML = 
    `<article>
        <div id="fun">
            <div id="column">
                <label for="word">Palavra que deseja substituir por Lorem</label>
                <input id="word" type="text" placeholder="CSS">
            </div>
            <textarea name="" id="exampleTxt" cols="30" rows="10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eaque reprehenderit quo dolorum praesentium quae cupiditate. Nesciunt adipisci nemo veritatis libero. Ex voluptatum aperiam nulla! Quod amet earum ducimus provident!</textarea>
            <button>substituir</button>
            <button id="resetBtn">resetar</button>
        </div>
    </article>`;
}
let wordSubs;
let example;
let newString;


subsBtn.onclick = function repla() {
    wordSubs = word.value;
    example = exampleTxt.value;
    newString = example.replace(`Lorem`, `${wordSubs}`);
    exampleTxt.innerHTML = newString;
    function resetText() {
        exampleTxt.innerHTML = example;
    }
    resetBtn.onClick=resetText()
};

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

begin.onclick = function startFun() {
    mainFun.innerHTML = ``;
};

prankBtn.onclick = function prank() {
    prankBtn.style.visibility = `hidden`;
    prankP.style.visibility = `visible`; 
    setTimeout(startExplaination, 10000);
}
setTimeout(showBtn,10000);