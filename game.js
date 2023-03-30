const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load' , startGame);
window.addEventListener('resize' , setCanvasSize);

    function setCanvasSize(){
        if(window.innerHeight > window.innerWidth){
            canvasSize =window.innerWidth * 0.8;
        } else{
            canvasSize=window.innerHeight * 0.8;
        }
         
        canvas.setAttribute('width', canvasSize);
        canvas.setAttribute('height', canvasSize);
    
         elementsSize = canvasSize /10; 

         startGame();
    }

    function startGame(){
        console.log({canvasSize, elementsSize});
        
        game.font = elementsSize + 'px verdana';
        game.textAlign= 'end';
    
        for (let i = 1; i <= 10; i++) {
            game.fillText(emojis['X'],elementsSize * i, elementsSize);
            
        }
    }
    
    

    
    
    //Window.innerHeight
    //window.innerWidth

    //game.fillRect(0,0,100,100);
    //game.clearRect(0,0,50,50);
   //game.clearRect(0,0,50,50);
   //game.font = '25px verdana'; 
   //game.fillStyle = 'purple';
   //game.textAlign ='center'; 
   //game.fillText('platzi', 25, 25);
