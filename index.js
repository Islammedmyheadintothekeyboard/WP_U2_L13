sessionStorage.setItem('turn', 1);
sessionStorage.setItem('player1Score', 0);
sessionStorage.setItem('player2Score', 0);
sessionStorage.setItem('done', false);

function imageAssign () {
    const ids = ['cat', 'joker', 'ghostface', 'smoke', 'ghost', 'house', 'pumpkins', 'pennywise', 'reaper', 'tree'];
    const cards = Array.from(document.getElementsByClassName("card"));
    
    for (let idInd=0; idInd<ids.length; idInd++) {
        for (let i=0; i<2; i++) {
            let randCardInd = Math.floor(Math.random() * cards.length);
            const card = cards.splice(randCardInd, 1)[0];
            card.onclick = function() { flipCard(card, ids[idInd]); };
        }
    }
}



function flipCard (card, id) {
    if (card.id !== 'whiteBack') {
        card.id='whiteBack';
    }
    else {
        card.id=id;
    }
}