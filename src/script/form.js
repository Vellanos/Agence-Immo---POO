document.getElementById('type').addEventListener('change', function() {
    var selectedType = this.value;
    var appartementFields = document.getElementById('appartementFields');
    var maisonFields = document.getElementById('maisonFields');

    if (selectedType === 'Appartement') {
        appartementFields.style.display = 'block';
        maisonFields.style.display = 'none';
    } else if (selectedType === 'Maison') {
        appartementFields.style.display = 'none';
        maisonFields.style.display = 'block';
    }
});

document.getElementById('bienImmobilierForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var id = document.getElementById('id').value;
    var titre = document.getElementById('titre').value;
    var description = document.getElementById('description').value;
    var prix = document.getElementById('prix').value;
    var adresse = document.getElementById('adresse').value;
    var type = document.getElementById('type').value;

    var bienImmobilier;

    if (type === 'Appartement') {
        var etage = document.getElementById('etage').value;
        var porte = document.getElementById('porte').value;
        var ascenseur = document.getElementById('ascenseur').checked;
        bienImmobilier = new Appartement(id, titre, description, prix, adresse, etage, porte, ascenseur);
    } else if (type === 'Maison') {
        var jardin = document.getElementById('jardin').checked;
        var piscine = document.getElementById('piscine').checked;
        var garage = document.getElementById('garage').checked;
        bienImmobilier = new Maison(id, titre, description, prix, adresse, jardin, piscine, garage);
    }
    
    var liste_bien_immo = JSON.parse(localStorage.getItem('liste_bien_immo')) || [];
    liste_bien_immo.push(bienImmobilier);
    localStorage.setItem('liste_bien_immo', JSON.stringify(liste_bien_immo));
    console.log(liste_bien_immo);
    document.getElementById('bienImmobilierForm').reset();
});
