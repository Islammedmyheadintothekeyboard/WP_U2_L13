sessionStorage.setItem('turn', 1);
sessionStorage.setItem('player1Score', 0);
sessionStorage.setItem('player2Score', 0);
sessionStorage.setItem('done', false);
sessionStorage.setItem('p1win',0);
sessionStorage.setItem('p2win',0);
lastcardclick = [];
cardcheckcount = 0;

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

    if (lastcardclick.length === 2){

        if (lastcardclick[0].id === lastcardclick[1].id && lastcardclick[0] !== lastcardclick[1]){
            lastcardclick[0].onclick = null;
            lastcardclick[1].onclick = null;
            lastcardclick.length = 0;
            cardcheckcount++
            if (sessionStorage.getItem('turn') % 2 == 0) {
                sessionStorage.setItem('player1Score', parseInt(sessionStorage.getItem('player1Score')) + 1)
                const p1num = sessionStorage.getItem('player1Score');
                const p1score = document.getElementById("player1Score");

                p1score.textContent = `Player 1 score:${p1num}`;


            }
            else {
                sessionStorage.setItem('player2Score', parseInt(sessionStorage.getItem('player2Score')) + 1);
                const p2num = sessionStorage.getItem('player2Score');
                const p2score = document.getElementById("player2Score");

                p2score.textContent = `Player 2 score:${p2num}`;
            }
            if (cardcheckcount == 10){
                endgame();
            }
        }

        else {
            nextTurn();
            setTimeout(backroundchange,500);
        }

    }
}

function backroundchange () {
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

function endgame () {
    const playerTurnDiv = document.getElementsByClassName('playerTurn')[0];

    if (sessionStorage.getItem('player1Score') === sessionStorage.getItem('player2Score')){
        playerTurnDiv.textContent = `It's a tie! Neither of you guys win since you had the same score.`;
    }

    else {
        playerTurnDiv.textContent = `Congratulations player ${(sessionStorage.getItem('player1Score') > sessionStorage.getItem('player2Score')) ? 1 : 2 }, you won!`;
        if ((Number(sessionStorage.getItem('player1Score')) > Number(sessionStorage.getItem('player2Score')))) {
            sessionStorage.setItem('p1win', parseInt(sessionStorage.getItem('p1win')) + 1);
            const p1nums = sessionStorage.getItem('p1win');
            const p1win = document.getElementById("p1win");

            p1win.textContent = `Player 1 wins:${p1nums}`;
        }       
        else {
            sessionStorage.setItem('p2win', parseInt(sessionStorage.getItem('p2win')) + 1);
            const p2nums = sessionStorage.getItem('p2win');
            const p2win = document.getElementById("p2win");

            p1win.textContent = `Player 2 wins:${p2nums}`;
        }
    }
}    
function restart(){
  location.reload();
  sessionStorage.setItem('turn', 1);
}