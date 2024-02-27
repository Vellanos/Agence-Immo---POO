class BienImmobilier {
    constructor(id, titre, description, prix, adresse) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
        this.adresse = adresse;
    }
}

class Appartement extends BienImmobilier {
    constructor(id, titre, description, prix, adresse, etage, porte, ascenseur) {
        super(id, titre, description, prix, adresse);
        this.etage = etage;
        this.porte = porte;
        this.ascenseur = ascenseur;
    }
}

class Maison extends BienImmobilier {
    constructor(id, titre, description, prix, adresse, jardin, piscine, garage) {
        super(id, titre, description, prix, adresse);
        this.jardin = jardin;
        this.piscine = piscine;
        this.garage = garage;
    }
}