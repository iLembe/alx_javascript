function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    var screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    // Add a paragraph to the body
    var paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    // Add buttons to the body
    var buttonSpooky = document.createElement("button");
    buttonSpooky.textContent = "Spooky";
    document.body.appendChild(buttonSpooky);

    var buttonDarkMode = document.createElement("button");
    buttonDarkMode.textContent = "Dark mode";
    document.body.appendChild(buttonDarkMode);

    var buttonScreamMode = document.createElement("button");
    buttonScreamMode.textContent = "Scream mode";
    document.body.appendChild(buttonScreamMode);

    // Add event listeners to the buttons
    buttonSpooky.addEventListener("click", spooky);
    buttonDarkMode.addEventListener("click", darkMode);
    buttonScreamMode.addEventListener("click", screamMode);
}

main();

