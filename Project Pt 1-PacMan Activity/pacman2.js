const pacArrayreverse = ['./images/PacMan3.png', './images/PacMan4.png']
const pacArray = ['./images/PacMan1.png', './images/PacMan2.png']
let img = document.getElementById('PacMan')
var pos = 0
var i = 0
let pageWidth = window.innerWidth;
let direction = "forward"

function Run()
{
    img.style.left = pos + 'px'
    if(direction == "forward") 
    {
        pos += 30; 
        img.style.left = pos + "px";
        img.src = pacArray[i];
    }
    
    else if(direction == "reverse")
    {
        pos -= 30; 
        img.style.left = pos + "px";
        img.src = pacArrayreverse[i];e
    }

    if(pos>=pageWidth - img.width)
    {
       direction = "reverse"
    }
    i = 1-i;
}

setInterval(Run,150)