const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load' , startGame);

function startGame(){
    //game.fillRect(0,0,100,100);
    //game.clearRect(0,0,50,50);
   //game.clearRect(0,0,50,50);
   game.font = '25px verdana'; 
   game.fillStyle = 'purple';
   game.textAlign ='center';
   game.fillText('platzi', 25, 25);
}