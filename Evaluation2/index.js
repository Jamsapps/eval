/* esversion 6 */
let start_game = document.getElementById('btnStartGame');
let regles = document.getElementById('id_regles');
let theButtons = document.getElementById('theButtons');
let btnRestart = document.getElementById('btnRestart'); // btn restart à faire
let btnPseudo = document.getElementById('btnPseudo');

/* hidden the button */
theButtons.classList.add('buttonHidden');
btnPseudo.classList.add('btnPlayer_hidden');
btnRestart.classList.add('btnRestart');

/* listes des players */
class player {
    constructor(pseudo, pv) { 
        this.pseudo = pseudo,
        this.pv = pv;
    }
}

let player1 = new player(this.pseudo, 200);
let player2 = new player(this.pseudo, 200);

    start_game.addEventListener('click', () => {
        start_game.classList.add('buttonHidden');
        btnPseudo.classList.remove('btnPlayer_hidden');
        Choice_pseudo();
});

function Choice_pseudo() {
    let choice_of_pseudo = document.getElementById('btnPseudo');

    let pseudo_player1 = document.getElementById('player1');
    let pseudo_player2 = document.getElementById('player2');

    choice_of_pseudo.addEventListener('click', () => {
        player1.pseudo = window.prompt('Pseudo player 1');
        player2.pseudo = window.prompt('Pseudo player 2');

        if(player1.pseudo !== "" && player1.pseudo !== player2.pseudo) {
            pseudo_player1.value = player1.pseudo;
            pseudo_player1.textContent = player1.pseudo;
        }
        if(player2.pseudo !== "" && player2.pseudo !== player1.pseudo) {
            pseudo_player2.value = player2.pseudo;
            pseudo_player2.textContent = player2.pseudo;
        } 
        else {
            alert("Erreur, veuillez choisir un pseudo / ne pas entrer le même pseudo pour les 2 joueurs"); 
        }

        return game();
    });
}

/////////////////////////////////////////// Not display /////////////////////////////////////////

let pv_player1 = document.getElementById('Pv_Player1');
let pv_player2 = document.getElementById('Pv_Player2');
function not_display() {
    /* display 200pv player one and player two */ 
    pv_player1.textContent = player1.pv + "PV";
    pv_player2.textContent = player2.pv + "PV";

    /* classList Hidden */
    pv_player1.classList.add('pvHidden');
    pv_player2.classList.add('pvHidden'); 
    score.classList.add('scoreShield'); 

    regles.classList.add('regles'); 
    theButtons.classList.add('buttonHidden'); 

    /* Hidden the button player1 et player2 */
    btnPseudo.classList.add('btnPlayer_hidden');
    //btnPlayer2.classList.add('btnPlayer_hidden');
}

    /* selected id trick one and two  */
    let tour1 = document.getElementById('tour1');
    let tour2 = document.getElementById('tour2');

function Roll_the_dice() {
    const number = Math.floor(Math.random() * 25);
    return number;
}

/////////////////////////////////////////// Function game ///////////////////////////////////////

let nbr_player;
nbr_player = "player1";

/* button attack and repair */
let attack = document.getElementById('btn_Attack');
let repair = document.getElementById('btn_Repair');

function game() {
    not_display();
    /* Display score 0 in the shield */
    let score = document.getElementById('score');
    score.textContent = 0;

    /* classList remove affiche */
    pv_player1.classList.remove('pvHidden');
    pv_player2.classList.remove('pvHidden');
    score.classList.remove('scoreShield');
    theButtons.classList.remove('buttonHidden');

    /* Attack */
    attack.addEventListener('click', (e) => {
        const randomNumber = Roll_the_dice();
        score.textContent = randomNumber;
        if(nbr_player === "player1") {
            player2.pv = player2.pv - randomNumber;
            pv_player2.textContent = player2.pv + "PV";
        } 
        else if(nbr_player === "player2") {
            player1.pv = player1.pv - randomNumber;
            pv_player1.textContent = player1.pv + "PV";
        } 
        
        if(player1.pv <= 0) {
            score.textContent = 0;
            pv_player1.textContent = "Fortress destroy";
            pv_player2.textContent = "Gagne la partie";
            attack.classList.add('btnAttack');
            repair.classList.add('btnRepair');
            btnRestart.classList.remove('btnRestart');
        }
        else if(player2.pv <= 0) {
            score.textContent = 0;
            pv_player2.textContent = "Fortress destroy";
            pv_player1.textContent = "Gagne la partie";
            attack.classList.add('btnAttack');
            repair.classList.add('btnRepair');
            btnRestart.classList.remove('btnRestart');
        }
    });

    /* Repair */
    repair.addEventListener('click', (e) => {
        score.textContent = 15;

        if(nbr_player === "player1" && player1.pv < 186) {
            pv_player1.textContent = player1.pv + "PV";
            player1.pv = player1.pv + 15;
            pv_player1.textContent = player1.pv + "PV";
        } 
        else if(nbr_player === "player2" && player2.pv < 186) {
            pv_player2.textContent = player2.pv + "PV";
            player2.pv = player2.pv + 15;
            pv_player2.textContent = player2.pv + "PV";
        }

        else if(player1.pv > 185 || player2.pv > 185) {
            alert("Manque de main d'oeuvre pour réparer");
            score.textContent = 0;
        }
    });
}

function onclick_attack() {
    switch(nbr_player) {
        case "player1":
            tour1.textContent = "Play";
            tour2.textContent = "Waits";
            nbr_player = "player2";
            break;
        case "player2": 
            tour2.textContent = "Play";
            tour1.textContent = "Waits";
            nbr_player = "player1";
            break;
        default: nbr_player = "player1";
    }
}

function onclick_repair() {
    switch(nbr_player) {
        case "player1":
            tour1.textContent = "Play";
            tour2.textContent = "Waits";
            nbr_player = "player2";
            break;
        case "player2": 
            tour1.textContent = "Waits";
            tour2.textContent = "Play";
            nbr_player = "player1";
            break;
        default: nbr_player = "player1";
    }
}

btnRestart.addEventListener('click', () => {
    player1.pv = 200;
    player2.pv = 200;
    pv_player1.textContent = player1.pv + "PV";
    pv_player2.textContent = player2.pv + "PV";
    attack.classList.remove('btnAttack');
    repair.classList.remove('btnRepair');
});

