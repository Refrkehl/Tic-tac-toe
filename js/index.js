const winCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [3,5,7],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
]

const fieldCells = document.querySelectorAll('.game-field__cell'); //ячейки игрового поля

const pickX = document.querySelector('.new-game__cross'); //выбор иконки
const pickO = document.querySelector('.new-game__circle'); //выбор иконки
const vsCpuBtn = document.querySelector('.new-game__vs-cpu'); //кнопка меню игры против компьютера
const vsPlayerBtn = document.querySelector('.new-game__vs-player'); //кнопка меню игры против другого игрока

const restartButton = document.querySelector('.game-field__restart'); //кнопка рестарта игры
const gameField = document.querySelector('.game-field__container'); //поле игры

const quitButton = document.querySelector('.popup__quit-button'); //выход из игры
const resetButton = document.querySelector('.popup__reset-button'); //кнопка сброса

const yellowPopup = document.querySelector('.yellow-theme'); //желтый попап
const bluePopup = document.querySelector('.blue-theme'); //синий попап
const restartPopup = document.querySelector('.restart'); //рестарт игры
const roundTiedPopup = document.querySelector('.round-tied'); //попап игры "ничья"