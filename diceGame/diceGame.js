// const player1 = document.getElementById('#player1');
// const player2 = document.getElementById('#player2');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const currscore1 = document.querySelector('#c-score1');
const currscore2 = document.querySelector('#c-score2');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.rolldice');
const holdBtn = document.querySelector('.hold');
const newGameBtn = document.querySelector('.newgame');
const result = document.querySelector('.result');
const currplayer = document.querySelector('.currplayer');


let currscore = 0;
let activeplayer=1;
let total1 = 0;
let total2 =0;
let winscore=20

console.log(currscore);
console.log(newGameBtn);

const newgame = () => {
    console.log("newgame");
    total1=0;
    total2=0;
    currscore=0;
    activeplayer=1;
    currscore1.textContent = "0";
    currscore2.textContent = "0";
    score1.textContent = "0";
    score2.textContent = "0";
    dice.src = "/diceGame/dice1.jpg";
    result.textContent=" "
    //dice.style.display = "none";
    rollBtn.style.display = "block";
    holdBtn.style.display = "block";
}


const hold = () => {
    if(activeplayer===1) {
        currscore1.textContent="0";
        activeplayer=2;
        console.log(activeplayer);
    } else {
        currscore2.textContent="0";
        activeplayer=1;
    }
}



const rolldice = setInterval(() => {
//const rolldice = () => {
    const dice_num = Math.trunc(Math.random()*6)+1;
    dice.style.display = "block";
    dice.src = `/diceGame/dice${dice_num}.jpg`;
    currscore = dice_num;
    console.log("currscore: " +currscore);
    if(currscore===1){
        currscore=0;
        hold();
    }
    
    if(activeplayer===1) {
        total1+=currscore;
        console.log("TotalSCore: "+ total1);
        
        currscore1.textContent = dice_num;
        score1.textContent = total1;

        if(total1>=winscore){
            holdBtn.style.display="none";
            rollBtn.style.display="none";
            clearInterval(rolldice);
            result.textContent="Player 1 WIN";
        }

    } else {
        total2+=currscore;
        currscore2.textContent = dice_num;
        score2.textContent = total2;

        if(total2>=winscore){
            rollBtn.style.display="none";
            holdBtn.style.display="none";
            currplayer.style.display="none"
            clearInterval(rolldice)
            result.textContent="Player 2 WIN";
        }
    }

},3000)


newGameBtn.addEventListener("click", newgame);
rollBtn.addEventListener("click", rolldice);
holdBtn.addEventListener("click", hold);
