let vartotojas = {
    vardas: ['Jonas', 'Jonaitis'],
    amzius: 35,
    lytis: "vyras",
    pomegiai: ['skraidyti', 'vaikscioti'],
        prisitatymas: function () {
            console.log('Tai yra '+this.vardas[0]+' jo pavardė: '+ this.vardas[1]+ ' amzius ' +this.amzius+
                ' lytis: ' +this.lytis+ ' pomegiai: ' +this.pomegiai )
        }
}

vartotojas.prisitatymas()


function Knyga(pavadinimas, ISBN) {
    this.pavadinimas = pavadinimas;
    this.isbn = ISBN
    this.showInfo = function(){
            return pavadinimas + ISBN;
    }
}

const knyga11 = new Knyga('JS', '1254');
// console.log(knyga1.showInfo());

function Skaitytojas(vardas, pavarde, korteles_nr, adresas, Telefonas) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.korteles_nr = korteles_nr;
    this.Adresas = adresas;
    this.Telefonas = Telefonas;
    this.showInfo = function () {
        return vardas + pavarde + korteles_nr + adresas + Telefonas
    };
    this.paimtosKnygos = {};
    this.visosKnygos = [];
    this.addInfo = function (pavadinimas, isbn) {
        this.paimtosKnygos = pavadinimas + '-ISBN-' + isbn;
        this.visosKnygos.push(this.paimtosKnygos);
    };
    this.rodytiKnygas = function () {
        for (let data in this.visosKnygos) {
            console.log(this.visosKnygos[data])
        }
    }
}

function vip(vardas, pavarde, korteles_nr, adresas, Telefonas, vip) {
    Skaitytojas.call(this, vardas, pavarde, korteles_nr, adresas, Telefonas);
    this.vip = vip
}

let vip1 = new vip(' Miglė ', ' Matulytė ',' 548794 ',' Kazio Maskvyčio 22 ',' 864879458 ', true)
const skaitytojas1 = new Skaitytojas(' Jonas ', ' Jonaitis ',' 133458 ',' Karaliaus Mindaugo 22-47 ', ' 865325418 ');
const skaitytojas2 = new Skaitytojas(' Petras ', ' Petraitis ',' 133457 ',' Jono Povilaičio 12-14 ',' 865478419 ');
const skaitytojas3 = new Skaitytojas(' Kazys ', ' Starkevicius ',' 548794 ',' Kazio Maskvyčio 22 ',' 864879458 ');

skaitytojas1.addInfo('Kazio metodai', '1254877');
skaitytojas1.addInfo('Jono metodai', '1254878');
skaitytojas1.addInfo('Petro metodai', '1254879');

skaitytojas2.addInfo('Jono metodai', '1254878');
skaitytojas2.addInfo('Petro metodai', '1254878');

skaitytojas3.addInfo('Ketro metodai', '1254879');
skaitytojas3.addInfo('Petro metodai', '1254879');
skaitytojas3.addInfo('Metro metodai', '1254879');
skaitytojas3.addInfo('Detro metodai', '1254879');
// console.log(skaitytojas1.showInfo());
// console.log("Paimtos knygos: ");
// console.log(skaitytojas1.rodytiKnygas());
// console.log(skaitytojas2.showInfo());
// console.log("Paimtos knygos: ");
// console.log(skaitytojas2.rodytiKnygas());
// console.log(skaitytojas3.showInfo());
// console.log("Paimtos knygos: ");
console.log(vip1.vardas);
