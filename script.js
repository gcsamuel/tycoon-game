document.addEventListener('DOMContentLoaded', () => {
  let money = 1000;
  let popularity = 50;

  const moneyElement = document.getElementById('money');
  const popularityElement = document.getElementById('popularity');
  const gameLog = document.getElementById('game-log');

  function updateStats() {
    moneyElement.textContent = money;
    popularityElement.textContent = popularity;
  }

  function logAction(action) {
    const logEntry = document.createElement('p');
    logEntry.textContent = action;
    gameLog.appendChild(logEntry);
    gameLog.scrollTop = gameLog.scrollHeight;
  }

  document.getElementById('build').addEventListener('click', () => {
    if (money >= 200) {
      money -= 200;
      popularity += 10;
      logAction('Você construiu uma nova estrutura! (+10 popularidade, -200 dinheiro)');
      updateStats();
    } else {
      logAction('Dinheiro insuficiente para construir.');
    }
  });

  document.getElementById('hire').addEventListener('click', () => {
    if (money >= 100) {
      money -= 100;
      popularity += 5;
      logAction('Você contratou um novo funcionário! (+5 popularidade, -100 dinheiro)');
      updateStats();
    } else {
      logAction('Dinheiro insuficiente para contratar.');
    }
  });

  document.getElementById('market').addEventListener('click', () => {
    if (money >= 50) {
      money -= 50;
      popularity += 15;
      logAction('Você fez uma campanha de marketing! (+15 popularidade, -50 dinheiro)');
      updateStats();
    } else {
      logAction('Dinheiro insuficiente para marketing.');
    }
  });

  updateStats();
});

