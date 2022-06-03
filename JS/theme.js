switch(localStorage.getItem("DarkTheme")){
    case "true":
        document.getElementById("theme").setAttribute("href", "/CSS/dark.css");
        break;
    case "false":
        document.getElementById("theme").setAttribute("href", "/CSS/light.css");
        break;
    default:
        localStorage.setItem("DarkTheme", matchMedia("(prefers-color-scheme: dark)").matches.toString());
        if (localStorage.getItem("DarkTheme") == "true") document.getElementById("theme").setAttribute("href", "/CSS/dark.css");
        else document.getElementById("theme").setAttribute("href", "/CSS/light.css");
}
var invertTheme = function() {
    switch(localStorage.getItem("DarkTheme")){
        case "true":
            localStorage.setItem("DarkTheme", "false");
            break;
        default:
            localStorage.setItem("DarkTheme", "true");
    }
    location.reload();
};
