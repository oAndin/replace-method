console.log("Hello World!");
function startExplaination () {
    explanation.style.visibility = `visible`;
    innerHTML = 
    `<article>
        <div id="fun">
            <div id="column">
                <label for="word">Palavra que deseja substituir</label>
                <input id="word" type="text" placeholder="CSS">
            </div>
            <textarea name="" id="example" cols="30" rows="10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eaque reprehenderit quo dolorum praesentium quae cupiditate. Nesciunt adipisci nemo veritatis libero. Ex voluptatum aperiam nulla! Quod amet earum ducimus provident!</textarea>
            <button>substituir</button>
        </div>
    </article>`;
}
let wordSubs;
let example;
let newString;
subsBtn.onclick = function repla() {
    wordSubs = word.value;
    example = exampleTxt.value;
    console.log(wordSubs);
    console.log(example);
    newString = example.replaceAll(`Lorem`, `${wordSubs}`);
    exampleTxt.innerHTML = newString;
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
setTimeout(showBtn,10000);

begin.onclick = function startFun() {
    mainFun.innerHTML = ``;
};

prankBtn.onclick = function prank() {
    prankBtn.style.visibility = `hidden`;
    prankP.style.visibility = `visible`; 
    setTimeout(startExplaination, 10000);
}
