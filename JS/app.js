var appIndex = 1;

const appsDiv = document.getElementById('appsDiv');
const firstApp = document.getElementById('firstApp');
const apps = document.querySelectorAll(".app");
const totalApps = apps.length;
const crossL = document.getElementById('crossL');
const crossU = document.getElementById('crossU');
const crossD = document.getElementById('crossD');
const crossR = document.getElementById('crossR');

var appsWidth = parseFloat(getComputedStyle(firstApp).getPropertyValue("width"));
var appsLMargin = parseFloat(getComputedStyle(firstApp).getPropertyValue("margin-left"));

const appTitle = document.getElementById('appTitle');
const appNames = [
    "CV",
    "GitHub",
    "Text 3",
    "Text 4",
    "Text 5"
];

const screenEmbed = document.getElementById('screenEmbed');
const embedLink = [
    "../pdf/cv.pdf",
    "https://github.com/Yacine-Hoc",
    "Text 3",
    "Text 4",
    "Text 5"
];

function updateAppPosition(index) {
    appIndex = index;

    let offset = -apps[appIndex - 1].offsetLeft + appsLMargin;
    appsDiv.style.left = offset + "px";

    apps.forEach((app, i) => {
        if (i + 1 === appIndex) {
            app.style.border = "0.5vh solid aqua";
        } else {
            app.style.border = "0.25vh solid #d0d0d0";
        }
    });

    appTitle.textContent = appNames[appIndex - 1];

    screenEmbed.src = embedLink[appIndex - 1];

    console.log("appIndex:", appIndex, "offset:", offset); 
}

document.onkeydown = function (e) {
    if (e.key === "ArrowRight") {
        appIndex++;
        if (appIndex > totalApps) appIndex = 1;
        updateAppPosition(appIndex);
    }
    if (e.key === "ArrowLeft") {
        appIndex--;
        if (appIndex < 1) appIndex = totalApps;
        updateAppPosition(appIndex);
    }
};

apps.forEach((app, i) => {
    app.addEventListener("click", () => {
        updateAppPosition(i + 1);
    });
});

crossL.addEventListener("click", () => {
    appIndex--;
    if (appIndex < 1) appIndex = totalApps;
    updateAppPosition(appIndex);
});

crossR.addEventListener("click", () => {
        appIndex++;
        if (appIndex > totalApps) appIndex = 1;
        updateAppPosition(appIndex);
});