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
    constructor(id, titre, description, prix, adresse, etage, porte, ascenseur, type) {
        super(id, titre, description, prix, adresse);
        this.etage = etage;
        this.porte = porte;
        this.ascenseur = ascenseur;
        this.type = type;
    }
}

class Maison extends BienImmobilier {
    constructor(id, titre, description, prix, adresse, jardin, piscine, garage, type) {
        super(id, titre, description, prix, adresse);
        this.jardin = jardin;
        this.piscine = piscine;
        this.garage = garage;
        this.type = type;
    }
}