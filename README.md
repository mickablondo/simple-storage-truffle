# Exercice Truffle / blockchain publique
## Description du projet

## How to
### Need to have
Dans le répertoire de votre projet, lancez ces commandes :  
```bash
npm install -g truffle  
npm install @truffle/hdwallet-provider
npm install --save dotenv
```  
### Si vous souhaitez partir from scratch
 - Ce qui a été fait et n'est pas à faire dans le cas d'un clone du projet :  
```bash
truffle init  
```  
 - Dépôt d'un Smart Contract de test dans le répertoire <b>contracts</b>  
 - Création du fichier de déploiement : <b>migrations/1_script.js</b>  
 - Configuration du fichier <b>truffle-config.js</b> pour utiliser les librairies dotenv et hdwallet
 - Compilation du contrat :  
```bash
truffle compile
truffle deploy
```  
### Si vous clonez ce dépôt
 - Créez et configurez un fichier <i>.env</i> avec les clés suivantes :  
```bash
# Api Key récupérée depuis https://app.infura.io/ (pour test sur goerli par exemple)  
INFURA_ID=  
# Seed Phrase de votre compte sur Metamask  
MNEMONIC=  
# Api Key récupérée depuis https://www.alchemy.com/ (pour test sur mumbai par exemple)  
ALCHEMY_ID=  
```  
 - Selon le ou les réseaux que vous souhaitez, il faut configurer le fichier truffle-config.js (ici, fait pour Ethereum-Goerli et Polygon-Mumbai)  
 - Exécutez la commande suivante pour déployer votre contrat sur la blockchain publique  :  
```bash
truffle deploy --network [goerli|mumbai]
```  
Pour exécuter les tests unitaires Solidity, il faut lancer ganache et exécuter la commande suivante :  
```bash
truffle test --to 1
```  
## Stack technique
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
