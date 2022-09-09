const pedra = '<img src="./css/img/pedra.png">';
const papel = '<img src="./css/img/papel.png">';
const tesoura = '<img src="./css/img/tesoura.png">';
const itens = [pedra, tesoura, papel];

function random() {
    return Math.floor(Math.random() * (3));
}
function randomGame(resultado) {
    if (resultado == 0) {
        return pedra;
    } else if (resultado == 1) {
        return papel;
    } else {
        return tesoura;
    }
}
function jogar() {
    document.getElementById('playerOne').innerHTML = randomGame(random()); document.getElementById('playerTwo').innerHTML = randomGame(random());
    replaceRound()
    console.log(pegaItens())
    score()
}
function pegaItens() {
    let playerOne = document.getElementById('playerOne').innerHTML;
    let playerTwo = document.getElementById('playerTwo').innerHTML;
    let one = itens.indexOf(playerOne, 0);
    let two = itens.indexOf(playerTwo, 0);
    return logicaDoJogo(one, two);
}

let score1 = 1;
let score2 = 1;
function score() {
    if (pegaItens()) {
        document.getElementById('resultadoPlayerOne').innerHTML = + score1;
        score1++;
    } else {
        document.getElementById('resultadoPlayerTwo').innerHTML = + score2;
        score2++;
    }
}

function logicaDoJogo(item1, item2) {
    let pedra = 0;
    let tesoura = 1;
    let papel = 2;

    if (item1 == item2) {
        return null;
    } else if (item1 == pedra && item2 == tesoura || item1 == papel && item2 == pedra || item1 == tesoura && item2 == papel) {
        return true;
    } else {
        return false;
    }

}


let i = 1
function replaceRound() {
    let b = false;
    if (i < 6) {
        if (pegaItens() === 0) {
            //nothing replace
        } else if (pegaItens()) {
            replace1(i);
        } else if (pegaItens() == b) {
            replace2(i);
        }
    }
    i++;
    if (i == 7) {
        if (score1 > score2) {
            alert('player 1 Wins')
            reset()
        } else if (score1 < score2) {
            alert('player 2 Wins')
            reset()
        } else {
            alert('EMPATE')
            reset()
        }

    }
}

function replace1(i) {
    document.getElementById('round-' + i).classList.replace('box-' + i, 'boxjs-' + i + 'v');
    document.getElementById('round1-' + i).classList.replace('box2-' + i, 'boxjs-' + i + 'd');
}

function replace2(i) {
    document.getElementById('round-' + i).classList.replace('box-' + i, 'boxjs-' + i + 'd');
    document.getElementById('round1-' + i).classList.replace('box2-' + i, 'boxjs-' + i + 'v');
}

function reset() {
    location.reload();
}





