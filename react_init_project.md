# React - Initialisation d'un projet

Découvre React et initialise ton premier projet.

## Ressources

- [Framework ou Bibliothèque ? Comment faire la différence ?](https://talks.freelancerepublik.com/framework-bibliotheque-differences/)
- [Vite - Getting started](https://vitejs.dev/guide)
- [Getting started with React and ViteJS​](https://youtu.be/ZBSelnyLgp4)

## Contexte du projet

### Statique vs Dynamique

​Tu as déjà créé des sites et HTML et CSS : c'est sympa, mais c'est "statique" : une fois que la page est affichée, il n'est pas possible de modifier son état sans la recharger.

C'est là que notre ami **JavaScript** vient à la rescousse ! Grâce à lui, il devient possible de faire des pages dynamiques : on peut par exemple changer des couleurs, afficher/cacher des blocs, retenir l'état de la page (avec le localStorage).​

Le souci, c'est que si l'on doit faire un site un peu complexe, il devient long et fastidieux de coder l'ensemble des fonctionnalités en JavaScript. De plus, la **manipulation du DOM** (le ciblage, la création ou modification d'éléments HTML) n'est pas toujours aisée.

C'est pour cela que depuis de nombreuses années, des bibliothèques et frameworks ont été créées pour faciliter la vie des développeurs⋅ses.
​
### Réactivité

Avec l'avènement du web 2.0, les sites sont devenus de plus en plus dynamiques : au point de créer des nœuds au cerveau ! Prenons l'exemple de Facebook Messenger, ouvert dans Facebook : si un nouveau message est reçu, une notification va s'afficher, la messagerie va s'ouvrir avec le message en question surligné.

![Facebook](https://i.imgur.com/sjOz1DE.png)

À l'inverse, une fois le message lu, le compteur de message doit être réduit et le message ne sera plus surligné.

On remarque donc qu'avec une seule action, celle de recevoir un message, plusieurs endroits de la page sont impactés : en gérant ce type de cas de figure manuellement, on risque de complexifier le code à chaque mise à jour (par exemple, imaginons que l'on rajoute une barre latérale avec les utilisateurs connecté et leurs nombres de messages respectifs).

### Composants

Un autre problème rencontré par les sites : certains partie du sites peuvent apparaître plusieurs fois et à plusieurs endroits différents.

Reprenons l'exemple de la messagerie de Facebook avec la liste des personnes connectées. Cette dernière à toujours la même forme : une bulle verte ou rouge pour dire si la personne est en ligne, le nom de la personne et sa photo.

​![Messenger](https://i.imgur.com/hbbwyQf.png)​

Il ne s'agira donc plus de penser la structure d'un site uniquement en terme de "page", mais aussi en terme de "composant" : chaque composant étant réutilisable, et paramétrable.

Par exemple, le composant "Contact de la messagerie" aurait donc un statut "en ligne", un "nom" et une "photo".

On peut voir ça comme une fonction avec des paramètres en entrée, qui produirait du code HTML en sortie.
​
### React
​
C'est pour répondre à ces problématiques que Facebook a créé React.

D'ailleurs, React est-il une bibliothèque ou un framework ? Prend le temps de lire la ressource suivante pour avoir la réponse : [Framework ou Bibliothèque ? Comment faire la différence ?](https://talks.freelancerepublik.com/framework-bibliotheque-differences/).​

Les fonctionnalités sont découpées en **composants** réutilisables : on appelle les entrées de ces composants des **props**.​

Pour faire un rendu de l'HTML d'un composant, React utilise le **DOM Virtuel** (il va manipuler le DOM de la page en JavaScript).

Pour simplifier cette étape, React utilise le **JSX** : ça ressemble à de l'HTML, mais ça n'en est pas (tu verras les différences plus tard) !

Chaque composant peut posséder des états (**states**), en fonction desquels l'affichage pourra être impacté : par exemple si l'état de utilisateur est "connecté" ou "non connecté", la pastille sera rouge ou verte à côté de son nom.

**En résumé, React c'est :**

- des composants
- des props
- des states
- du JSX

### Initialisation d'un projet

Pour travailler sur ton environnement local avec **React**, tu as des outils qui te permettront d'initialiser tes projets (on appelle ça un boilerplate) : par exemple **create-react-app** et **vite**.

Je te proprose d'utiliser **vite** (comme sont nom l'indique, il est plus rapide).

Tu trouveras le guide ici : [Vite - Getting started](https://vitejs.dev/guide).

Et un court tutoriel vidéo (en anglais) ici : [Getting started with React and ViteJS​](https://youtu.be/ZBSelnyLgp4).

Une fois le projet initialisé, regarde les fichiers et dossier qui le compose. Voici une description de certains de ces fichiers :

- `index.html` : c'est l'unique fichier html, qui va changer le composant principal de React (main.jsx). Tout le HTML sera ensuite généré par le Virtual DOM grâce au JSX, à l'intérieur de la balise
- `src/main.jsx` : c'est le premier composant principal de ton application, qui va appeler les bibliothèques utiles et effectuer le contenu des autres composants (par exemple src/App.jsx)
- `src/App.jsx` : c'est le premier composant appelé par le composant principal. Par conversion, on commence à modifier son projet à partir de ce fichier, on ne touche pas aux autres.
- `vite.config.json` : c'est la configuration de vite, où chaque plugin est ajouté à un tableau.
- `package.json` : contient les dépendances du projet (les modules utiles, ici react et react-dom). Tu pourras par la suite ajouter d'autres dépendances, comme axios, react-router, react-hook-form...

## Modalités pédagogiques

- Initialise un nouveau projet React avec npm et vite
- Ouvre le dossier du projet, installe-le et exécute le serveur (les commandes sont affichées dans le terminal)
- Ouvre le site sur le navigateur pour voir que tout fonctionne correctement
- Modifie le fichier src/App.jsx et remplace le texte "Click on the Vite and React logos to learn more" par le texte "React est une bibliothèque/un framework" (en ne gardant que la partie de la phrase qui est vraie !)
- Ajoute le texte suivante : "La version actuelle de React est : 00" (en remplaçant par le numéro de version)
- Rafraîchis le site pour voir si la modification a été prise en compte
- Versionne ton projet sur Gitlab et envoi le lien en solution

## Modalités d'évaluation

- Un dépôt GitLab contient le code du projet
- Le projet est fonctionnel et indique si React est un framework ou une bibliothèque, ainsi que son numéro de version actuel

## Livrables

- Le lien d'un dépôt GitLab

## Critères de performance

- Les outils de développement nécessaires sont installés
- La documentation technique de l’environnement de travail est comprise
- Utiliser un outil de gestion de versions