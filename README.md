# Site-Web-js
On créé un site web avec différents jeu, jouable dessus.
Astéroïde, 2048, et le game on web


Jeux : 

2048 : 
 - Regle : Grille de 4x4, le but est d’obtenir le meilleur score possible 2048 avec le moins de coup possible, chaque tour une case de 2 est ajouté, quand 2 cases de même valeur se touche en allant dans la même direction s’additionne, les valeurs des cases sont : 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048. les cases se déplacent dans 4 sens (Haut, bas, gauche, droite)
 - Difficulté : La difficulté augmente au fur et a mesure vu qu'on dispose de moins en moins de place pour additionner les cases
 - Score : Valeur atteinte si perdu Si atteint 2048 => nombre de coup effectué
 - Scénario : Le joueur dispose des touches directionnelles pour pousser les tuiles dans une direction
 - Succès : Finir le jeu une fois, Faire pour la première fois un 1024 & 512 & 256 & 128, Faire une case 16 en moins de 20 coup, 

Astéroïde : 
 - Regle : On est placé dans un rectangle, on est un vaisseau qui se déplace dedans, on tire sur des astéroïdes pour les détruire, le but est de survivre le plus longtemps et de détruire le plus d'astéroïdes.
 - Difficulté : De plus en plus d'astéroïdes apparraissent dans le temps
 - Score : nombre d’astéroïdes détruits + un ratio selon le temps
 - Scénario : Le joueur dispose des touches directionnelles pour se déplacer dans le rectangle et de la barre espace pour pouvoir tirer sur les astéroïdes
 - Succès : Tenir 5 minutes & 10 minutes, détruire plus de 10/50/100/500/1000 astéroïdes, Obtenir plus de 100/250/500/1000 de score. 


Persona : 

Lena ElBlondo : âge 12 ans, au collège, 
 - Cherche à voir une progression dans ses scores
 - Veut jouer à des jeux simples et rapide 
 
Enzo Uncryzer : 20 ans, chômage, 
 - Cherche à faire le meilleur score.
 - Ne veux pas rencontrer de bug 


Nicolas ELCEO: 40 ans, travailleur 
 - Cherche à faire tous les succès et débloquer tout 
 - Pas de latence dans entre le click et l'action

Thomas LeChill : 21 ans, travailleur, 
 - Cherche à jouer de manière occasionnel et de manière tranquille
 - Pouvoir lancer des parties rapidement
 
 
 Scénario  : 
 
  - 1 : Lena cherche à se connecter au site, donc elle click sur le bouton Connection
  - 2 : Enzo cherche à consulter le classement général, il click donc sur le page Classement afin de voir le classement de tout les jeux
  - 3 : Nicolas cherche à voir le nombre de succès qu'il a débloqué en jouant, il va donc choisir d'aller sur la page succès afin de les voirs
  - 4 : Nicolas cherche à voir le nombre de succès qu'il lui reste à débloqué, il va donc choisir d'aller sur la page succès afin de les voirs
  - 5 : Thomas cherche à jouer à 2048, il clique sur la page du jeu, il conculte les règles afin d'être sur de comprendre le jeu, une fois qu'il a bien compris les règles, il clique sur le bouton jouer au dessus de la grille, il déplace les tuiles, finit sa partie et effectu un score qui s'affiche.
  - 6 : Lena cherche à jouer à Astéroïde, elle clique sur la page du jeu, sélectionne le mode de jeu solo et lance une partie. 
  - 7 : Enzo et Thomas cherche à savoir qui est le meilleur sur le jeu Astéroïde, ils lancent donc une partie en mode duel, afin de s'affronter.
  
  
  Modèle de tâche : 
  https://www.mindmeister.com/map/2560780069
  
  Maquette : 
  https://www.figma.com/proto/YTRgS3jYOJMmbSLXmcPQF9/Play-2-Games?node-id=5%3A26&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A26
