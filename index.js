var cells = document.querySelectorAll('.cell');
var board = document.getElementById('board');
var winner = document.getElementById('winner');
var winnerPlay = document.getElementById('winner-player');
var XClass = 'x';
var OClass = 'o';
var currentPlay = true;
var winerList=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function start(){
    currentPlay = true;
    cells.forEach(e=>{
        e.classList.remove(XClass);
        e.classList.remove(OClass);
        e.removeEventListener('click',handleClick);
        e.addEventListener('click',handleClick,{once:true});
    })
    setBorderClass();
    winner.classList.remove('show')
}

function handleClick(e){
    const cell = e.target
    var currentClass = currentPlay?XClass:OClass
    cell.classList.add(currentClass);
    
    if(checkWin(currentClass)){
        winner.classList.add('show');
        winnerPlay.innerText=currentClass + ' win!'
    }else if (checkDraw()){
        winner.classList.add('show');
        winnerPlay.innerText='Draw!'
    }
    currentPlay = !currentPlay;
    setBorderClass(currentPlay);
}


function setBorderClass(){
    var classBoard = currentPlay? XClass : OClass;
    
    board.classList.remove(XClass);
    board.classList.remove(OClass);
    board.classList.add(classBoard);
}

function checkWin(currentClass){
    return winerList.some((item)=>{
        return item.every((index)=>{
            return cells[index].classList.contains(currentClass)
        })
    })
}

function checkDraw(){
    return [...cells].every(cell=>{
        return cell.classList.contains(XClass) || cell.classList.contains(OClass)
    })
}
start()