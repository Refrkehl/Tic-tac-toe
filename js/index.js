let winCombinations = [
    ['00','01','02'],
    ['10','11','12'],
    ['20','21','22'],
    ['20','11','02'],
    ['00','11','22'],
    ['00','10','20'],
    ['01','11','21'],
    ['02','12','22'],
]
const TIED = 'tied';
let fieldArray = []
let player1;
let activePlayer = 'x';
let isCpu = false;

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
    player1 = 'x';
}

function pickedO() {
    pickX.classList.remove('picked');
    imgX.setAttribute('src', "../images/icon-x-outline-silver.svg");
    pickO.classList.add('picked');
    imgO.setAttribute('src', "../images/icon-o-outline-darkNavy.svg");
    player1 = 'o';
}


function getField() {
    const newarr = Array.prototype.map.call(fieldCells, ({id}) => id);
    let num = newarr.length - 1;
    let arar = newarr[num].split('', 2);
    
    for (let i = 0; i <= arar[0]; i++) {
        fieldArray[i] = [];
        for (let j = 0; j <= arar[1]; j++) {
            fieldArray[i][j] = document.getElementById(`${i}${j}`).value;
        }
    }
}

function menuGameToggle(){
    newGameMenu.classList.toggle('hidden');
    fieldSection.classList.toggle('hidden');
}

vsCpuBtn.addEventListener('click', function () {
    menuGameToggle();
    isCpu = true;
    if (player1 == 'x') {
        return;
    }
    getField();
    cpu();
});

vsPlayerBtn.addEventListener('click', menuGameToggle);

fieldCells.forEach((cell) => {
    cell.addEventListener('click', function(evt){
        evt.target.value = activePlayer;
        evt.target.disabled = true;
        getField();
        const winner = isWinner();
        console.log(fieldArray);
        
        if (winner) {
            return showModal(winner);
        }
        activePlayer === "x" ? (activePlayer = "o") : (activePlayer = "x");
        //замена иконки turn
        if (isCpu) {
            cpu();
        }
    })
});


function isWinner() {
    if (isTied()) {
        return TIED;
    }

    for (let winCombination of winCombinations) {
        
		if (fieldArray[winCombination[0][0]][winCombination[0][1]] == 
            fieldArray[winCombination[1][0]][winCombination[1][1]] &&
			fieldArray[winCombination[1][0]][winCombination[1][1]] == 
            fieldArray[winCombination[2][0]][winCombination[2][1]] &&
			fieldArray[winCombination[0][0]][winCombination[0][1]] != ''
		) {
			return winCombination;
		} 
    }
}

function isTied() {
    for(let i = 0; i < fieldArray.length; i++) {
        for (let j = 0; j < fieldArray[i].length; j++) {
            if (fieldArray[i][j] == '') {
                return false;
            } 
        }
    }
    return true;
}

function showModal (state) {
    if (state == TIED) {
        //modalka tied 
        console.log('tied')
        return;
    } 
    //show winner
    if (activePlayer == 'x') {
        //x modal
        console.log('win x')
        return;
    }
    console.log('win o');
    //o modal win
}

function cpu() {
    const emptyCells = [];
    let cpuPlayer = 'x';

    for (let i = 0; i < fieldArray.length; i++) {
        for (let j = 0; j < fieldArray[i].length; j++) {
            if (fieldArray[i][j] == '') {
                emptyCells.push(`${i}${j}`);
            } 
        }
    }

    if (player1 == 'x') {
        cpuPlayer = 'o';
    }

    const randomizer = Math.floor(Math.random() * emptyCells.length);
    document.getElementById(emptyCells[randomizer]).value = cpuPlayer;
    document.getElementById(emptyCells[randomizer]).disabled = true;
    getField();

    const winner = isWinner();

    if (winner) {
        return showModal(winner);
    }

    activePlayer === "x" ? (activePlayer = "o") : (activePlayer = "x");
       //замена иконки turn
}

