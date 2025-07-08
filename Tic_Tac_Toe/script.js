let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let maincontainer=document.querySelector("#main-container")

let turn=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkpattern();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetgame=()=>{
    turn=true;
    enablebox();
    msgcontainer.classList.add("hide");
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations,Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkpattern=()=>{
    for(let pattern of winPattern){
        let post1=boxes[pattern[0]].innerText;
        let post2=boxes[pattern[1]].innerText;
        let post3=boxes[pattern[2]].innerText;
        if(post1!=""&&post2!=""&&post3!=""){
        if(post1===post2!=""&&post2===post3){
            console.log("winner",post1);
            showWinner(post1);
        }};
    }};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);