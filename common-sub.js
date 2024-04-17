console.log("Initialize");

function changeColorToB() {
    textElement.style.color = 'black';
}
function changeColorToY() {
    textElement.style.color = 'yellow';
}
function changeColorToR() {
    textElement.style.color = 'red';
}
function changeColorToBL() {
    textElement.style.color = 'blue';
}
function changeColorToA() {
    textElement.style.color = 'aqua';
}
function changeColorToW() {
    textElement.style.color = 'white';
}

let h=document.querySelector(".head");
let i=document.querySelector(".intr");
let d=document.querySelector(".des");
let s=document.querySelector(".start");

h.addEventListener('mouseover', function(){
    h.style.color = 'purple';
});
h.addEventListener('mouseout',function(){
    h.style.color='white';
});

i.addEventListener('mouseover', function(){
    i.style.color = 'green';
});
i.addEventListener('mouseout',function(){
    i.style.color='white';
});

d.addEventListener('mouseover', function(){
    d.style.color = 'yellow';
});
d.addEventListener('mouseout',function(){
    d.style.color='white';
});

s.addEventListener('mouseover', function(){
    s.style.color = 'red';
});
s.addEventListener('mouseout',function(){
    s.style.color='white';
});

document.querySelector(".sbut").addEventListener('mouseover', ()=>{
    document.querySelector(".sbut").style.color='blue';
    document.querySelector(".sbut").style.backgroundColor='yellow';
    document.querySelector(".sbut").style.transform = 'translateZ(300px)';
})

document.querySelector(".sbut").addEventListener('mouseout', ()=>{
    document.querySelector(".sbut").style.color='white';
    document.querySelector(".sbut").style.backgroundColor='gray';
    document.querySelector(".sbut").style.transform = 'translateZ(0px)';
})

