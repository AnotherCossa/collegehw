function buttonHandler(value) {
    const messageReference = {
        red: "Your face is red",
        blue: "Feeling blue?",
        yellow: "Sun is blinding",
        green: "Quite nauseous"
    };
    const buttons = document.getElementsByClassName("button")
    let clicked;
    for (const button of buttons) {
        if (!button.classList.contains(value)) {
            button.style["border-color"]=button.style["background-color"];
            continue
    };
        clicked=button
    }
    clicked.style["border-color"]="white";
    document.getElementById("outputmessage").innerHTML=messageReference[value]
    return;
}
