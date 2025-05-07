@echo off
echo Lancement du projet...

REM Lancer le frontend dans une nouvelle fenêtre
start "Frontend" cmd /k "cd frontend && npm run dev"

REM Lancer le backend dans une nouvelle fenêtre
start "Backend" cmd /k "cd backend && node server.js"

REM Attendre quelques secondes pour laisser le serveur démarrer (optionnel)
timeout /t 5 /nobreak > nul

REM Ouvrir le navigateur sur localhost:3001
start http://localhost:5173/

echo Frontend, Backend et navigateur lancés.
