#  API Context

## Exercice API Context

En récupérant le code de l'exercice context_api.html ajoutez un bouton permettant de modifier l'ordre d'affichage des posts. Pensez à ajouter des posts pour tester le fonctionnement de votre nouvelle action.

## TP

Créez le projet num-characters à l'aide de CRA. Puis vous devez mettre les dépendances suivantes dans le projets :

- styled-components pour la gestion des styles CSS-IN-JS.

- react-router-dom pour la gestion du routing dans l'application.

- useReducer pour gérer le store de l'application.

Vous devez respecter la structuration des dossiers & fichiers suivantes :

```txt
reducers/
    characters.js  <-- initialState et reducer (pensez à faire un export des objets suivants CharacterContext, initialState et reducer  }
Provider.js
App.js
... // les autres composants
```

Vous devez gérer le store de votre application à l'aide d'un **useReducer**.

L'application se présentera sur deux pages, vous devez disposer un menu principal tout en haut de vos pages :

[Message] [Rendu]

On ne vous impose pas une charte graphique particulière mais, vous devez soigner cette partie et surtout vous devez impérativement coder vos CSS avec styled-components.

Une fois votre projet terminé vous devez également le builder afin de vérifier que le code que vous avez écris est valide :

```bash
npm run build
```

Une fois le dossier build créé, à l'aide de la commande ci-dessus, lancer le "Go Live" de vscode pour vérifier le bon fonctionnement de l'application.

## Objectif de l'application

L'application permet de saisir un texte, de définir un style pour le texte saisi. Et affiche ce texte avec son rendu sur une page spécifique. Chaque texte saisi pourra être supprimé.

## Page "Message"

Vous créez un formulaire permettant de saisir un texte, ajoutez sous le texte, lors de la saisie le nombre de caractère(s) de chaque mot (voyez le wireframe ci-après).

Un bouton select permettra de sélectionner un type de rendu pour le texte : palevioletred (choix par défaut) et tomato. Un autre champ permettra de sélectionner la taille du texte (nombre compris entre 15px et 20px), proposez les choix suivants : 15, 16, 17, 18, 19 et 20px.

Une fois que l'on a validé, le texte est enregistré dans le store votre useReducer. La page Rendu permettra de visualiser chaque texte avec son rendu spécifique.

- Wireframe pour saisir le texte et définir le style

```txt
saisir le texte : [ Bonjour tout le monde ]
nombre de lettres : 7 4 2 5     

Selectionnez un rendu : [ palevioletred ]

taille du texte : [15]

[ valider ]
```

## Page Rendu 

La page de rendu affichera l'ensemble des rendus. Un bouton delete associé à chaque texte permettra de supprimer le rendu :

Texte 1 :

```txt
    [ Bonjour tout le monde ] 

    [Delete]
```
Texte 2 :

```txt
    [ Un autre texte avec un autre rendu ] 

    [Delete]
```
