sessionStorage.setItem('turn', 1);
sessionStorage.setItem('player1Score', 0);
sessionStorage.setItem('player2Score', 0);
sessionStorage.setItem('done', false);
lastcardclick = [];
cardcheckcount = 0;
id = null;
function imageAssign () {
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
    card.id = id;
    lastcardclick.push(card);
    console.log(lastcardclick);

    if (lastcardclick.length === 2){

        if (lastcardclick[0].id === lastcardclick[1].id && lastcardclick[0] !== lastcardclick[1]){
            console.log("correct");
            lastcardclick[0].onclick = null;
            lastcardclick[1].onclick = null;
            lastcardclick.length = 0;
            cardcheckcount++
            if (sessionStorage.getItem('turn') % 2 == 0) {
                sessionStorage.setItem('player1Score', parseInt(sessionStorage.getItem('player1Score')) + 1)
                const p1score = document.getElementById("player1Score");
                let p1text = p1score.textContent;
                let p1change = p1text[-1];
                const p1num = Number(p1change);
                p1num++
                p1score.textContent = `Player 1 score:${p1num}`;


            }
            else {
                sessionStorage.setItem('player2Score', parseInt(sessionStorage.getItem('player2Score')) + 1);
                const p2score = document.getElementById("player2Score");
                let p2text = p2score.textContent;
                let p2change = p2text[-1];
                const p2num = Number(p2change);
                p2num++
                p2score.textContent = `Player 2 score:${p2num}`;
            }
            if (cardcheckcount == 10){
                endgame();
            }
        }

        else {
            console.log(lastcardclick);
            nextTurn();
            setTimeout(backroundchange,500);
        }

    }
}

function backroundchange(id) {
    console.log(id);
    lastcardclick[0].id='whiteBack';
    lastcardclick[1].id='whiteBack';
    lastcardclick.length = 0;
}
function nextTurn () {
    sessionStorage.setItem('turn', parseInt(sessionStorage.getItem('turn')) + 1);
    const playerTurnDiv = document.getElementsByClassName('playerTurn')[0];
    const currTurn = sessionStorage.getItem('turn') % 2;
    playerTurnDiv.textContent = `Player ${currTurn + 1}'s Turn`;
}

function endgame(){
    console.log("ended");
}