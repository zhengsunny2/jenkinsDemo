const fs = require('fs');

// Chemin du fichier de log
const logFilePath = 'logs.txt';

// Fonction pour écrire dans le fichier log
function logMessage(message) {
  const timestamp = new Date().toISOString(); // Récupère la date et l'heure au format ISO
  const logEntry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFilePath, logEntry, 'utf8');
}

// Instructions pour l'utilisateur
console.log("Entrez votre nom :");
let nom = null;

// Écoute des entrées utilisateur
process.stdin.on('data', (data) => {
  const input = data.toString().trim();

  // Logique de traitement des commandes
  if (!nom) {
    if (!input) {
      console.error("Erreur : Aucun nom saisi");
    } else {
      nom = input;
      console.log(`Nom ajouté :  ${nom}`);
    }
  } 
});