'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
