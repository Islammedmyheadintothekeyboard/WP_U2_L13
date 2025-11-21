sessionStorage.setItem('turn', 0);
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
    nextTurn();
}



function flipCard (card, id) {
        if (card.id !== 'whiteBack') {
            card.id = 'whiteBack';
        }

        else {
            card.id = id;
            lastcardclick.push(card);
            console.log(lastcardclick);

            if (lastcardclick.length === 2){

                if (lastcardclick[0].id === lastcardclick[1].id){
                    console.log("correct");
                    lastcardclick[0].onclick = null;
                    lastcardclick[1].onclick = null;
                    lastcardclick.length = 0;
                }

                else {
                    lastcardclick.length = 0;
                }

                console.log(lastcardclick);
                nextTurn();
            }
        }
}

function nextTurn () {
    sessionStorage.setItem('turn', parseInt(sessionStorage.getItem('turn')) + 1);
    const playerTurnDiv = document.getElementsByClassName('playerTurn')[0];
    const currTurn = sessionStorage.getItem('turn') % 2;
    playerTurnDiv.textContent = `Player ${currTurn}'s Turn`;
}

