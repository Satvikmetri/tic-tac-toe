/*
var a = "Batch"
a = 10
console.log(a);

let b = "batch"
b = 10
console.log(b);

function sum(a,b){
    return a + b;

var result = sum(a,b);
console.log(result);
}

let m = 5

if(m === '5'){
    console.log("it is equal");
}
else{
    console.log("it is not equal");
}
*/
/*
let button = document.getElementById('mybutton');

function myfunc() {
    console.log("button 1 is clicked");
}
button.addEventListener('click', () => {
    console.log("single button clicked")
} )
console.log(document.getElementsByClassName('myparas'));
console.log(document.getElementsByTagName('button'));

letconfirmationButton = document.getElementById('conformation');
confirmationButton.addEventListener('click',() => {
    alert("Are you sure")
})*/

var buttonA = document.getElementById('btnA');
var buttonB = document.getElementById('btnB');

var playerAName = document.getElementById('playerA');
var playerBName = document.getElementById('playerB');

buttonA.addEventListener("click", function() {
    var name = prompt("enter player's A name");
    playerAName.innerHTML = name;
})
buttonB.addEventListener("click", function() {
    var name = prompt("enter player's A name");
    playerBName.innerHTML = name;
})

let boxes = document.getElementsByClassName('boxes');
var turn = 1;
let Boxesfilled = 0;

function isWinner(boxes, turn){
    let check = ((boxes[0].innerHTML != '' && boxes[1].innerHTML != '' && boxes[2].innerHTML != '' && (boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML))
    || (boxes[3].innerHTML != '' && boxes[4].innerHTML != '' && boxes[5].innerHTML != '' && (boxes[3].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[5].innerHTML))
    || (boxes[6].innerHTML != '' && boxes[7].innerHTML != '' && boxes[8].innerHTML != '' && (boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML))
    || (boxes[0].innerHTML != '' && boxes[3].innerHTML != '' && boxes[6].innerHTML != '' && (boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML))
    || (boxes[1].innerHTML != '' && boxes[4].innerHTML != '' && boxes[7].innerHTML != '' && (boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML))
    || (boxes[2].innerHTML != '' && boxes[5].innerHTML != '' && boxes[8].innerHTML != '' && (boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML))
    || (boxes[0].innerHTML != '' && boxes[4].innerHTML != '' && boxes[8].innerHTML != '' && (boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML))
    || (boxes[2].innerHTML != '' && boxes[4].innerHTML != '' && boxes[6].innerHTML != '' && (boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML))
    )
    if (check == true) {
        if(turn == 1) {
            console.log("player A is winner");
        }
        else{
            console.log("player B is winner");
        }
    }
    return check;
}

for (let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', function(){
        if (boxes[i].innerHTML === '' && document.getElementById('A').style.backgroundColor != 'green' && document.getElementById('B').style.backgroundColor != 'green') {
            Boxesfilled++;
            if (turn == 1) {
                boxes[i].innerHTML = 'X';
                let check = isWinner(boxes, turn)
                if (check) {
                    let winner = document.getElementById('A');
                    winner.style.backgroundColor = 'green'
                    winner.innerHTML="won"
                }
                turn = 2;
            }
            else {
                boxes[i].innerHTML = '0';
                let check = isWinner(boxes, turn)
                if (check) {
                    let winner = document.getElementById('B');
                    winner.style.backgroundColor = 'green'
                    winner.innerHTML="won"
                }
                turn = 1;
            }
        }
    })
}