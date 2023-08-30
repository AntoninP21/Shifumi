let imageGauche = document.getElementById("imageGauche");
let imageDroite = document.getElementById("imageDroite");
let rejouer = document.getElementById("rejouer");
let resultatGauche = document.getElementById("resultatGauche");
let resultatDroite = document.getElementById("resultatDroite");
let choixCiseaux = document.getElementById("choixCiseaux");
let choixPierre = document.getElementById("choixPierre");
let choixFeuille = document.getElementById("choixFeuille");
let navbar = document.getElementById("navbar");
let jeuxGauche = document.getElementById("jeuxgauche")
let jeuxDroite = document.getElementById("jeuxdroite")

let tabchoix = [{label:"pierre", image:"pierre.jpg"},{label:"ciseaux",image:"ciseau.jpg"},{label:"feuille",image:"feuille.jpg"}]

imageGauche.addEventListener("click", () => {
    navbar.style.display = "initial";
    imageGauche.style.display = "none";
    resultatGauche.style.display = "none";
  
    choixCiseaux.addEventListener("click", () => {
      joueurChoisit("ciseaux");
    });
    choixPierre.addEventListener("click", () => {
      joueurChoisit("pierre");
    });
    choixFeuille.addEventListener("click", () => {
      joueurChoisit("feuille");
    });
  });
  
  function joueurChoisit(choixJoueur) {
    // Mettre à jour l'image du joueur en fonction de son choix
    imageGauche.src = tabchoix.find((item) => item.label === choixJoueur).image;
    imageGauche.style.display = "block";
    navbar.style.display = "none"; // Cacher la liste de choix du joueur
    jouer(choixJoueur);
  }
  
  function jouer(choixJoueur) {
    // Générer un choix aléatoire pour l'ordinateur
    const choixOrdinateur = tabchoix[Math.floor(Math.random() * tabchoix.length)];
  
    // Mettre à jour l'image de l'ordinateur
    imageDroite.src = choixOrdinateur.image;
    imageDroite.style.display = "block";
  
    // Comparer les choix du joueur et de l'ordinateur pour déterminer le résultat
    const resultat = comparerChoix(choixJoueur, choixOrdinateur.label);
  
    // Afficher le résultat
    resultatGauche.textContent = `Joueur: ${choixJoueur}`;
    resultatDroite.textContent = `Ordinateur: ${choixOrdinateur.label}`;
    resultatGauche.style.display = "block";
    resultatDroite.style.display = "block";
  
    // Mettre à jour les couleurs de fond en fonction du résultat
    if (resultat === "égalité") {
      rejouer.textContent = "Égalité !";
      jeuxGauche.style.backgroundColor = "grey"; // Réinitialiser la couleur
      jeuxDroite.style.backgroundColor = "grey"; // Réinitialiser la couleur
    } else if (resultat === "Joueur") {
      rejouer.textContent = `${resultat} wins`;
      jeuxGauche.style.backgroundColor = "green"; // Couleur verte pour le gagnant
      jeuxDroite.style.backgroundColor = "red"; // Couleur rouge pour le perdant
    } else {
      rejouer.textContent = `${resultat} wins`;
      jeuxGauche.style.backgroundColor = "red"; // Couleur rouge pour le perdant
      jeuxDroite.style.backgroundColor = "green"; // Couleur verte pour le gagnant
    }
  }
  
  
  function comparerChoix(choixJoueur, choixOrdinateur) {
    if (choixJoueur === choixOrdinateur) {
      return "égalité";
    } else if (
      (choixJoueur === "pierre" && choixOrdinateur === "ciseaux") ||
      (choixJoueur === "ciseaux" && choixOrdinateur === "feuille") ||
      (choixJoueur === "feuille" && choixOrdinateur === "pierre")
    ) {
      return "Joueur";
    } else {
      return "Ordinateur";
    }
  }
  
  rejouer.addEventListener("click", () => {
    // Réinitialiser l'affichage
    imageGauche.style.display = "block";
    imageDroite.style.display = "none";
    resultatGauche.style.display = "none";
    resultatDroite.style.display = "none";
    rejouer.textContent = "";
  
    // Réafficher la liste de choix du joueur
    navbar.style.display = "initial";
  });
  rejouer.addEventListener("click", () => {
    // Recharger la page pour réinitialiser le jeu
    location.reload();
  });
