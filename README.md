# Agence-Immo---POO

Premier brief de la formation Simplon CDA de grenoble. Durée 20h.  

# Consignes

Contexte du projet
Introduction

Ce projet adopte la POO en JavaScript pour organiser le code de manière modulaire et réutilisable. Les annonces immobilières seront modélisées sous forme d'objets, ce qui en simplifie la manipulation et la gestion. Les classes seront conçues selon le principe d'encapsulation, garantissant que chaque classe contient toutes les données et fonctions nécessaires à son fonctionnement autonome.

Votre projet reposera sur une classe fondamentale `BienImmobilier` 🏠, qui regroupera les attributs universels des biens immobiliers, tels que `id`, `titre`, `description`, `prix`, et `adresse`.

Vous enrichirez cette base par des classes spécialisées telles que `Appartement`, `Maison`, et `Terrain`, chacune héritant de `BienImmobilier` et y ajoutant ses spécificités.

Par exemple, la classe `Appartement` pourrait se distinguer par des propriétés supplémentaires comme `étage` et `ascenseur`, tandis que `Maison` pourrait se singulariser par la présence d'un `jardin` et d'un `garage`.

Vous êtes encouragés à explorer au-delà de ces suggestions en introduisant de nouvelles classes ou en adaptant les existantes selon les besoins de votre application.

Affichage des Annonces

Développez une interface utilisateur permettant de visualiser toutes les annonces immobilières enregistrées (page de liste d’annonces).
Chaque annonce doit afficher des informations clés telles que le prix du bien, la localisation, et une brève description.
​

Fonctionnalités

Implémentez un formulaire permettant aux utilisateurs d'ajouter de nouvelles annonces immobilières. Le formulaire doit recueillir des informations essentielles telles que le titre de l'annonce, le prix, l'emplacement, une description.
Assurez-vous que le formulaire valide les entrées utilisateur pour garantir la qualité des données.
Un système de filtre pourra être mis en place pour filtrer les annonces affichées à l’utilisateur selon différents critères (prix, surface, …).
​

Gestion des Données

Utilisez le localStorage du navigateur pour stocker les annonces immobilières. Cela permettra de persister les données entre les sessions de navigation sans nécessiter un backend.
​

Consignes Supplémentaires

Responsivité : Assurez-vous que le site est responsive et offre une expérience utilisateur optimale sur les appareils mobiles et de bureau.
Modularité : Organisez votre code en modules distincts pour séparer clairement la logique métier de la manipulation du DOM et des styles.
​

Autres

Temps #1 collectivement - découverte du cahier des charges

Temps #2 collectivement - remédiation, récapitulatif du brief et stratégie de développement


Bonus : Une page secrète, accessible uniquement aux utilisateurs disposant des identifiants appropriés (email et mot de passe), offre à l'administrateur la possibilité de gérer les annonces immobilières. Sur cette page, l'administrateur peut visualiser, modifier ou supprimer les annonces enregistrées sur la plateforme.