const cardData = JSON.parse(localStorage.getItem("liste_bien_immo"));
console.log(cardData);

const cardsContainer = document.getElementById('card-container');

const imagesAppartement = [
    "src/img/appartement_1.jpg",
    "src/img/appartement_2.jpg",
    "src/img/appartement_3.jpg",
    "src/img/appartement_4.jpg"
];

const imagesMaison = [
    "src/img/house_1.jpg",
    "src/img/house_2.jpg",
    "src/img/house_3.jpg",
    "src/img/house_4.jpg"
];

cardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-type', card.type);

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
    cardsContainer.appendChild(cardElement);
});

function filterCards(type) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

filterCards('all');
