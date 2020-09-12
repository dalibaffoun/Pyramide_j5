console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? ");

let etages = prompt('Entrer le Nombre des etages');

if (etages > 25 || etages <= 0) {
    alert('desolé , je ne peux pas dessiner un pyramide de plusque 25 etage ou < à 0');
} else {
    let i = 0;
    let j = 1;
    while (i < etages) {

        let tabs = ' '.repeat(etages - i);
        let hashtag = '#'.repeat(j)
        console.log(tabs + hashtag);
        i++;
        j = j + 2;
    }

}