const cardData = JSON.parse(localStorage.getItem("liste_bien_immo"))
console.log(cardData);

// Sélectionner le conteneur des cards
const cardsContainer = document.getElementById('card-container');

// Tableau des images pour les appartements
const imagesAppartement = [
    "src/img/appartement_1.jpg",
    "src/img/appartement_2.jpg",
    "src/img/appartement_3.jpg",
    "src/img/appartement_4.jpg"
];

// Tableau des images pour les maisons
const imagesMaison = [
    "src/img/house_1.jpg",
    "src/img/house_2.jpg",
    "src/img/house_3.jpg",
    "src/img/house_4.jpg"
];

cardData.forEach(card => {
    // Créer un élément de card
    const cardElement = document.createElement('div');
    cardElement.classList.add('card'); // Ajouter des classes ou des attributs si nécessaire

    // Sélection aléatoire de l'image en fonction du type de bien immobilier
    let randomImage;
    if (card.type === "Appartement") {
        randomImage = imagesAppartement[Math.floor(Math.random() * imagesAppartement.length)];
    } else if (card.type === "Maison") {
        randomImage = imagesMaison[Math.floor(Math.random() * imagesMaison.length)];
    }

    cardElement.innerHTML = `
        <h2>${card.titre}</h2>
        <img src="${randomImage}" alt="Image du bien immobilier">
        <p>Description: ${card.description}</p>
        <p>Prix: ${card.prix}</p>
        <p>Adresse: ${card.adresse}</p>
        <p>Type: ${card.type}</p>
    `;
    
    // Conditions d'affichage basées sur le type de bien immobilier
    if (card.type === "Appartement") {
        cardElement.innerHTML += `
            <p>Étage: ${card.etage}</p>
            <p>Porte: ${card.porte}</p>
            <p>Ascenseur: ${card.ascenseur ? "Oui" : "Non"}</p>
        `;
    } else if (card.type === "Maison") {
        cardElement.innerHTML += `
            <p>Jardin: ${card.jardin ? "Oui" : "Non"}</p>
            <p>Piscine: ${card.piscine ? "Oui" : "Non"}</p>
            <p>Garage: ${card.garage ? "Oui" : "Non"}</p>
        `;
    }
    // Ajouter la card au conteneur
    cardsContainer.appendChild(cardElement);
});