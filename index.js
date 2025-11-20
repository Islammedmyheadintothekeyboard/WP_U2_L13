sessionStorage.setItem('turn', 1);
sessionStorage.setItem('player1Score', 0);
sessionStorage.setItem('player2Score', 0);
sessionStorage.setItem('done', false);

function imageAssign () {
    lastcardclick = []
    const ids = ['cat', 'joker', 'ghostface', 'smoke', 'ghost', 'house', 'pumpkins', 'pennywise', 'reaper', 'tree'];
    const cards = Array.from(document.getElementsByClassName("card"));
    
    for (let idInd=0; idInd<ids.length; idInd++) {
        for (let i=0; i<2; i++) {
            let randCardInd = Math.floor(Math.random() * cards.length);
            const card = cards.splice(randCardInd, 1)[0];
            card.id = 'whiteBack';
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
        lastcardclick.push(card);
        console.log(lastcardclick);
        if (lastcardclick.length == 2){
            if (lastcardclick[0].id == lastcardclick[1].id){
                console.log("correct");
                lastcardclick.length = 0;
            }
            else{
               lastcardclick.length = 0;
            }
        }
    }
}
