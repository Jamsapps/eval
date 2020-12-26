/* document.getElementById('#connexion');

function username (pseudo, password) {
    if (pseudo !== 0 && pseudo >= 5) {
        pseudo == true;
    if (password >= 8) {
        password == true;
    }
    else {
        console.error('Erreur, merci de vérifier votre saisie');
        }
    }
}

*/

class Perso {
    constructor(name, health, strong, monney) {
        this.name = name
        this.health = health
        this.strong = strong
        this.monney = monney
    }

    Stat() {
        console.log(`${this.name} ${this.health} ${this.strong} ${this.monney}`);
    }

    Stat2() {
        console.log(`${this.name} ${this.health} ${this.strong}`);
    }
}

let Perso1 = new Perso('Crook ', '\n 150', '80', '100\n');
let Monster1 = new Perso('Zombie ', '\n 120', '100\n');

Perso1.Stat();
Monster1.Stat2();


let combat;

function attaque(cible) {
    if(cible == Perso1)
    {
        this.health - this.strong;
        let degats = Monster1.strong;
        Perso1.health-= degats;
        console.log(Monster1.name + ' Attaque ' + Perso1.name + `viens de perdre`, degats + ' PV ');
    } 
    if (cible == Monster1) {
        let degats = Perso1.strong;
        console.log(Perso1.name + ' Attaque ' + Monster1.name + `qui perd`, degats + ' PV');
        Monster1.health-= degats;
        console.log('il reste encore ' + Monster1.health);
    }
    return cible;
}

combat = attaque(Monster1);






