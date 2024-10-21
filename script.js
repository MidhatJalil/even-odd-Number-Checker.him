
function find(){

let number = document.getElementById('input').value;
let result = document.getElementById('result');
let number1 = number % 2;

if (number1 == 0 ){
     result.innerHTML = (`The number is even.`);}
     else{
       result.innerHTML = (`The number is odd.`);
     }
}

function reset(){
    let number = document.getElementById('input').value = '';
    let result = document.getElementById('result').innerHTML = ''
}

