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

let fieldArray = []
//let player1 = 'X';
let player = 'x';
const newGameMenu = document.querySelector('.new-game__menu'); //контейнер меню выбора игры
const pickX = document.querySelector('.new-game__cross'); //выбор иконки
const imgX = pickX.querySelector('.cross-img');
const pickO = document.querySelector('.new-game__circle'); //выбор иконки
const imgO = pickO.querySelector('.circle-img');
const vsCpuBtn = document.querySelector('.new-game__vs-cpu'); //кнопка меню игры против компьютера
const vsPlayerBtn = document.querySelector('.new-game__vs-player'); //кнопка меню игры против другого игрока

const restartButton = document.querySelector('.game-field__restart'); //кнопка рестарта игры
const fieldSection = document.querySelector('.game-field'); // секция с игрой
const gameField = document.querySelector('.game-field__container'); //поле игры
const fieldCells = document.querySelectorAll('.game-field__cell'); //ячейки игрового поля
const quitButton = document.querySelector('.popup__quit-button'); //выход из игры
const resetButton = document.querySelector('.popup__reset-button'); //кнопка сброса

const yellowPopup = document.querySelector('.yellow-theme'); //желтый попап
const bluePopup = document.querySelector('.blue-theme'); //синий попап
const restartPopup = document.querySelector('.restart'); //рестарт игры
const roundTiedPopup = document.querySelector('.round-tied'); //попап игры "ничья"

pickX.addEventListener('click', pickedX);
pickO.addEventListener('click', pickedO);

function pickedX() {
    pickO.classList.remove('picked');
    imgO.setAttribute('src', "../images/icon-o-outline-silver.svg");
    pickX.classList.add('picked');
    imgX.setAttribute('src', "../images/icon-x-outline-darkNavy.svg");
}

function pickedO() {
    pickX.classList.remove('picked');
    imgX.setAttribute('src', "../images/icon-x-outline-silver.svg");
    pickO.classList.add('picked');
    imgO.setAttribute('src', "../images/icon-o-outline-darkNavy.svg");
}


function getField() {
    const newarr = Array.prototype.map.call(fieldCells, ({id}) => id);
    let num = newarr.length - 1;
    let arar = newarr[num].split('', 2);
    
    
    for (let i = 0; i <= arar[0]; i++) {
        fieldArray [i] = [];
        for (let j = 0; j <= arar[1]; j++) {
            fieldArray [i][j] = document.getElementById(`${i}${j}`).value;
        }
    }
}

function menuGameToggle(){
    newGameMenu.classList.toggle('hidden');
    fieldSection.classList.toggle('hidden');
}

vsCpuBtn.addEventListener('click', function () {
    menuGameToggle();
    getField();
});
vsPlayerBtn.addEventListener('click', menuGameToggle)
fieldCells.forEach((cell) => {
    cell.addEventListener('click', function(evt){
        evt.target.value = player;
        player === "x" ? (player = "o") : (player = "x");
        evt.target.disabled = true;
        getField();
        console.log(fieldArray);
    })
});