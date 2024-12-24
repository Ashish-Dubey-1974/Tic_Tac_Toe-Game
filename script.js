let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML='O';
            turnO=false;
        }else{
            box.innerHTML='X';
            turnO=true;
        }
        box.disabled=true;
        box.style.backgroundColor = "rgb(255, 255, 255)";
        checkWinner();
    });
    
});
resetBtn.addEventListener("click",()=>{
    for (let index = 0; index < boxes.length; index++) {
        boxes[index].innerHTML=''; 
        boxes[index].disabled=false; 
        boxes[index].style.backgroundColor = "#ffffc7";  
    }
    win.remove();
    turnO=true;
});

let win = document.createElement("h1");
win.style.color = "red";
let newbtn = document.createElement("button");
newbtn.classList.add("reset-btn");
newbtn.innerHTML = "new Game";
let addE = document.querySelector(".container");

const checkWinner=()=>{
    for(const pattern of winPatterns){
        if(boxes[pattern[0]].innerHTML &&
            boxes[pattern[0]].innerHTML === boxes[pattern[1]].innerHTML &&
            boxes[pattern[1]].innerHTML === boxes[pattern[2]].innerHTML){
            win.innerHTML = `Congratulations Player ${boxes[pattern[0]].innerHTML} Wins the Match`;
            resetBtn.remove();
            addE.after(newbtn);
            addE.after(win);
            
            for (let index = 0; index < boxes.length; index++) {
                boxes[index].disabled=true;
                
            }
        }
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerHTML,
            boxes[pattern[1]].innerHTML,
            boxes[pattern[2]].innerHTML
        );
    }
    const allBoxesFilled = Array.from(boxes).every((box) => box.innerHTML.trim() !== "");

    if (allBoxesFilled) {
        // Tie detected
        win.innerHTML = `Tie! Both players have the same IQ.`;
        resetBtn.remove();
        addE.after(newbtn);
        addE.after(win);
    }
}
newbtn.addEventListener("click",()=>{
    for (let index = 0; index < boxes.length; index++) {
        boxes[index].innerHTML=''; 
        boxes[index].disabled=false; 
        boxes[index].style.backgroundColor = "#ffffc7";  
    }
    win.remove();
    newbtn.remove();
    addE.after(resetBtn);
    turnO=true;
});