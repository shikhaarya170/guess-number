// console.log(document.querySelector('.message').textContent);

// document.querySelector(".message").textContent = '🥳correct number!'


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent =15;

// document.querySelector('.guess') .value= 12;
// console.log(document.querySelector('.guess').value);


 const secretnumber = Math.floor(Math.random()*20)+ 1;
document.querySelector('.number').textContent = secretnumber;

let score =20;



document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log( guess,typeof guess);

    if(!guess){
        document.querySelector('.message').textContent= '⛔no number'
    }else if(guess === secretnumber){
    document.querySelector('.message').textContent = '🥳correct number'
}else if(guess>secretnumber){
    document.querySelector('.message').textContent = 'too high';
    score--;
    document.querySelector('.score').textContent = score;
}else if(guess<secretnumber){
    document.querySelector('.message').textContent = 'too high';
    score--;
    document.querySelector('.score').textContent = score;
}
}