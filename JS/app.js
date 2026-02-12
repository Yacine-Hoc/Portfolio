const appsData = [
    {
        name: "Profil",
        content: `
            <div class="app-container">
                <h2 class="app-header"><i class="fas fa-id-card"></i> Profil</h2>
                <div class="app-content">
                    <img src="../images/profil.jpg" style="float:right; width:8vh; height:8vh; border-radius:1vh; margin-left:1vh; object-fit:cover;">
                    <p><strong>Hocini Yacine</strong><br>Étudiant BTS SIO / SLAM.</p>
                    <p>Recherche de stage Bac + 1 :<br>Développeur Logiciel / Web</p>
                    
                    <h4>Objectif</h4>
                    <p>Devenir Développeur Fullstack et concevoir des applications web modernes.</p>
                </div>
            </div>
        `
    },
    {
        name: "Compétences",
        content: `
            <div class="app-container">
                <h2 class="app-header"><i class="fas fa-code"></i> Compétences</h2>
                <div class="app-content">
                    <h4>Front-End</h4>
                    <div>
                        <span class="tag">HTML</span> <span class="tag">CSS</span> <span class="tag">JavaScript</span> <span class="tag">Bootstrap</span>
                    </div>
                    <h4>Back-End</h4>
                    <div>
                        <span class="tag">PHP</span> <span class="tag">Symfony</span> <span class="tag">C#</span>
                    </div>
                    <h4>Data</h4>
                    <div>
                        <span class="tag">MySQL</span> <span class="tag">SQL</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        name: "Projets",
        content: `
            <div class="app-container">
                <h2 class="app-header"><i class="fas fa-folder-open"></i> Mes Projets</h2>
                <div class="app-content">
                    <p><strong>1. Portfolio 3DS</strong><br>Création d'un portfolio interactif.</p>
                    <hr style="border:0; border-top:1px solid #eee; margin:1vh 0;">
                    <p><strong>2. Site E-commerce Pokémon</strong><br>Boutique en ligne avec gestion panier.</p>
                    <br>
                    <div style="text-align:center;">
                        <a href="https://github.com/Yacine-Hoc" target="_blank" class="tag" style="background:#333; color:white; text-decoration:none;">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            </div>
        `
    },
        
        {
        name: "Veille Techno",
        content: `
            <div class="app-container">
                <h2 class="app-header"><i class="fas fa-rss"></i> Veille Techno</h2>
                <div class="app-content">
                    <p>Je surveille les tendances tech et design.</p>
                    
                    <h4 style="margin-bottom:1vh;">Mes Sources</h4>

                    <div style="margin-bottom: 1.5vh; display: flex; align-items: center; justify-content: space-between;">
                        <span style="font-weight:bold; font-size:1.4vh;">Blog Modérateur :</span>
                        <a href="https://www.blogdumoderateur.com/" target="_blank" class="tag" style="background:#e67e22; color:white; text-decoration:none; padding: 0.5vh 1vh;">
                            <i class="fas fa-newspaper"></i> Lire BDM
                        </a>
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="font-weight:bold; font-size:1.4vh;">Adobe (Reddit) :</span>
                        <a href="https://www.reddit.com/r/Adobe/" target="_blank" class="tag" style="background:#ff4500; color:white; text-decoration:none; padding: 0.5vh 1vh;">
                            <i class="fab fa-reddit"></i> Suivre
                        </a>
                    </div>
                </div>
            </div>
        `
    },
    {
        name: "Contact",
        content: `
            <div class="app-container">
                <h2 class="app-header"><i class="fas fa-envelope"></i> Contact</h2>
                <div class="app-content">
                    <p>N'hésitez pas à me contacter.</p>
                    <h4>Coordonnées</h4>
                    <p><i class="fas fa-at"></i> hociniyacine2006@gmail.com</p>
                    <p><i class="fas fa-phone"></i> 06 38 66 87 86</p>
                    <h4>Réseaux</h4>
                    <a href="https://www.linkedin.com/in/yacine-hocini-8202b8385/" target="_blank" class="tag" style="background:#0077b5; color:white; text-decoration:none;">LinkedIn</a>
                </div>
            </div>
        `
    }
];

// --- LES VARIABLES ---
var appIndex = 1;
const appsDiv = document.getElementById('appsDiv');

const apps = document.querySelectorAll(".app");
const totalApps = apps.length;


const crossL = document.getElementById('crossL');
const crossR = document.getElementById('crossR');


const screenContent = document.getElementById('screenContent');

const appTitle = document.getElementById('appTitle');

const firstApp = document.getElementById('firstApp');
var appsLMargin = 0;
if (firstApp) {
    appsLMargin = parseFloat(getComputedStyle(firstApp).getPropertyValue("margin-left"));
}


function updateAppPosition(index) {
    appIndex = index;

    if (apps[appIndex - 1]) {
        let offset = -apps[appIndex - 1].offsetLeft + appsLMargin;
        appsDiv.style.left = offset + "px";
    }

    
    apps.forEach((app, i) => {
        if (i + 1 === appIndex) {
            app.style.border = "0.5vh solid aqua"; 
            app.style.transform = "scale(1.1)";    
        } else {
            app.style.border = "0.25vh solid #d0d0d0"; 
            app.style.transform = "scale(1)";
        }
    });

    if (appsData[appIndex - 1]) {
        appTitle.textContent = appsData[appIndex - 1].name;
        
        
        screenContent.innerHTML = appsData[appIndex - 1].content;
    } else {
        appTitle.textContent = "Application " + appIndex;
        screenContent.innerHTML = "<div class='app-container'><p>Application vide</p></div>";
    }
}

// LES ÉVÉNEMENTS (Clavier et Souris) 

// Navigation Clavier (Flèches)
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
    if (e.key === "Escape") {
        const screenTop = document.getElementById('screen');
        
        screenTop.classList.remove('screen-zoomed');
    }
};

// Clic sur les icônes
apps.forEach((app, i) => {
    app.addEventListener("click", () => {
        updateAppPosition(i + 1);
    });
});

// Clic sur la croix 
if(crossL) {
    crossL.addEventListener("click", () => {
        appIndex--;
        if (appIndex < 1) appIndex = totalApps;
        updateAppPosition(appIndex);
    });
}

if(crossR) {
    crossR.addEventListener("click", () => {
        appIndex++;
        if (appIndex > totalApps) appIndex = 1;
        updateAppPosition(appIndex);
    });
}




const physicalButtonA = document.getElementById('btnB');

if (physicalButtonA) {
    physicalButtonA.addEventListener('click', () => {
        
        if (appIndex === 1) {
            window.open('../pdf/cv.pdf', '_blank');
        }
        else if (appIndex === 2) {
            // On cible l'écran du haut
            const screenTop = document.getElementById('screen'); 
            // On ajoute ou enlève la classe CSS qu'on vient de créer
            screenTop.classList.toggle('screen-zoomed');
        }
        else if (appIndex === 3) {
            window.open('https://github.com/Yacine-Hoc', '_blank');
        }
    });
}

// --- 5. INITIALISATION (Lancer au chargement) ---
// On lance la fonction une première fois pour afficher la 1ère app
updateAppPosition(1);