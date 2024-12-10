// Sudoku inicial (0 representa espaço vazio)
const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];
  
  const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];
  
  const container = document.getElementById("sudoku-container");
  
  // Cria a grade
  function createBoard() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
  
        if (initialBoard[row][col] !== 0) {
          input.value = initialBoard[row][col];
          input.disabled = true;
        }
  
        input.dataset.row = row;
        input.dataset.col = col;
        container.appendChild(input);
      }
    }
  }
  
  // Verifica a solução
  function checkSudoku() {
    const inputs = container.querySelectorAll("input");
    let correct = true;
  
    inputs.forEach((input) => {
      const row = input.dataset.row;
      const col = input.dataset.col;
  
      if (parseInt(input.value) !== solution[row][col]) {
        correct = false;
        input.style.backgroundColor = "#f8d7da"; // Erro
      } else {
        input.style.backgroundColor = "#d4edda"; // Correto
      }
    });
  
    const message = document.getElementById("result-message");
    if (correct) {
      message.textContent = "Parabéns! Você completou o Sudoku corretamente!";
      message.style.color = "green";
    } else {
      message.textContent = "Ops! Há erros na sua solução. Tente novamente.";
      message.style.color = "red";
    }
  }
  
  // Inicializa o jogo
  createBoard();
  
  document.getElementById("check-sudoku").addEventListener("click", checkSudoku);
  
  // Seleciona todas as células do Sudoku
const cells = document.querySelectorAll("#sudoku-container input[type='text']");

// Adiciona um evento de clique a todas as células
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Remove qualquer destaque anterior de todas as células
    cells.forEach((c) => c.classList.remove("highlight-green"));

    // Se a célula clicada tem um número (não está vazia)
    if (cell.value.trim() !== "") {
      // Destaca todas as células com o mesmo número
      cells.forEach((c) => {
        if (c.value === cell.value) {
          c.classList.add("highlight-green");
        }
      });
    }
  });
});
// Função para atualizar o temporizador
function startTimer() {
    const timerElement = document.getElementById("timer");
    let seconds = 0;
  
    // Atualiza o tempo a cada segundo
    setInterval(() => {
      seconds++;
  
      // Calcula minutos e segundos
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
  
      // Formata o tempo como mm:ss
      const formattedTime = `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
  
      // Atualiza o texto do temporizador
      timerElement.textContent = `Tempo: ${formattedTime}`;
    }, 1000);
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos necessários
    const timerElement = document.getElementById("timer");
    const startButton = document.getElementById("start-button");
    const pauseButton = document.getElementById("pause-button");
  
    let timerInterval = null; // Variável para armazenar o intervalo do temporizador
    let seconds = 0; // Tempo decorrido em segundos
    let isPaused = false; // Estado do temporizador (pausado ou não)
  
    // Função para formatar o tempo em mm:ss
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    }
  
    // Função para iniciar o temporizador
    function startTimer() {
      if (timerInterval) return; // Evita múltiplos intervalos ativos
  
      timerInterval = setInterval(() => {
        seconds++;
        timerElement.textContent = `Tempo: ${formatTime(seconds)}`;
      }, 1000);
  
      // Desativa o botão de início e habilita o botão de pausa
      startButton.disabled = true;
      pauseButton.disabled = false;
      startButton.textContent = "Temporizador em andamento...";
    }
  
    // Função para pausar o temporizador
    function pauseTimer() {
      if (!timerInterval) return; // Só pausa se o temporizador estiver rodando
  
      clearInterval(timerInterval); // Para o intervalo
      timerInterval = null; // Reseta a variável do intervalo
      isPaused = true; // Marca como pausado
  
      // Habilita o botão de início para continuar e desativa o de pausa
      startButton.disabled = false;
      pauseButton.disabled = true;
      startButton.textContent = "Continuar Temporizador";
    }
  
    // Adiciona eventos aos botões
    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
  
    // Estado inicial: botão "Pausar" desativado
    pauseButton.disabled = true;
  });
  document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const startButton = document.getElementById("start-button");
    const pauseButton = document.getElementById("pause-button");
  
    let timerInterval = null; // Referência ao intervalo do temporizador
    let seconds = 0; // Tempo decorrido em segundos
  
    // Função para formatar o tempo como mm:ss
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    }
  
    // Função para atualizar o display do temporizador
    function updateTimerDisplay() {
      timerElement.textContent = `Tempo: ${formatTime(seconds)}`;
    }
  
    // Função para iniciar o temporizador
    function startTimer() {
      if (timerInterval) return; // Evita múltiplos intervalos
  
      timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay();
      }, 1000);
  
      // Atualiza o estado dos botões
      startButton.disabled = true;
      pauseButton.disabled = false;
      startButton.textContent = "Continuar Temporizador";
    }
  
    // Função para pausar o temporizador
    function pauseTimer() {
      if (!timerInterval) return; // Só pausa se o temporizador estiver ativo
  
      clearInterval(timerInterval); // Para o temporizador
      timerInterval = null; // Limpa a referência do intervalo
  
      // Atualiza o estado dos botões
      startButton.disabled = false;
      pauseButton.disabled = true;
    }
  
    // Adiciona eventos aos botões
    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
  
    // Inicializa o display do temporizador
    updateTimerDisplay();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    const startButton = document.getElementById("start-button");
    const pauseButton = document.getElementById("pause-button");
    const resetButton = document.getElementById("reset-button");
  
    let timerInterval = null; // Referência ao intervalo do temporizador
    let seconds = 0; // Tempo decorrido em segundos
  
    // Função para formatar o tempo como mm:ss
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    }
  
    // Função para atualizar o display do temporizador
    function updateTimerDisplay() {
      timerElement.textContent = `Tempo: ${formatTime(seconds)}`;
    }
  
    // Função para iniciar o temporizador
    function startTimer() {
      if (timerInterval) return; // Evita múltiplos intervalos
  
      timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay();
      }, 1000);
  
      // Atualiza o estado dos botões
      startButton.disabled = true;
      pauseButton.disabled = false;
      resetButton.disabled = false;
      startButton.textContent = "Continuar Temporizador";
    }
  
    // Função para pausar o temporizador
    function pauseTimer() {
      if (!timerInterval) return; // Só pausa se o temporizador estiver ativo
  
      clearInterval(timerInterval); // Para o temporizador
      timerInterval = null; // Limpa a referência do intervalo
  
      // Atualiza o estado dos botões
      startButton.disabled = false;
      pauseButton.disabled = true;
    }
  
    // Função para reiniciar o temporizador
    function resetTimer() {
      clearInterval(timerInterval); // Para o temporizador, se estiver ativo
      timerInterval = null; // Reseta a variável do intervalo
      seconds = 0; // Reseta o contador de tempo
      updateTimerDisplay(); // Atualiza o display para 00:00
  
      // Atualiza o estado dos botões
      startButton.disabled = false;
      pauseButton.disabled = true;
      resetButton.disabled = true;
      startButton.textContent = "Iniciar Temporizador";
    }
  
    // Adiciona eventos aos botões
    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
    resetButton.addEventListener("click", resetTimer);
  
    // Inicializa o display do temporizador
    updateTimerDisplay();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");
  
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling;
  
        // Alterna a exibição da resposta
        if (answer.style.display === "none" || answer.style.display === "") {
          answer.style.display = "block";
        } else {
          answer.style.display = "none";
        }
      });
    });
  });
  