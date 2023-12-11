//  access element
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
// for turn i.e turn for x or o
// for making funtional
let turnO=true//player x, player y
// to store value in box we use array
// let arr=["apple","banana","litchi"]
// arr2=[["apple","litchi"],["mushroom","Bea"]];//array of array(2D array)
// console.log(arr2)

 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 // function for reset button //5
 const resetGame=()=>{
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");
 }
 // for show action while click on box
 // to add event listener
 boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;// to make box stable while we click once here
        // tracking who wining the game
        checkWinner();
    });
 });
 const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
 };
 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

 };
 const showWinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 };
 const checkWinner=()=>{
    //=> arrow functions
    // check every element in winPattern
    for(let pattern of winPatterns){
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let posi1Val=boxes[pattern[0]].innerText;
        let posi2Val=boxes[pattern[1]].innerText;
        let posi3Val=boxes[pattern[2]].innerText;
        if( posi1Val!=""&& posi2Val!="" && posi3Val!=""){
            if(posi1Val===posi2Val&& posi2Val===posi3Val){
                console.log("winner",posi1Val);
                showWinner(posi1Val);
            }
        }
    }

 };
 newGameBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",NewGame);


