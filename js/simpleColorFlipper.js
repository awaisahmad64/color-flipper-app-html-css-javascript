//simple color generate
let colors = ['hsl(60, 6, 95%)','red','green','Yellow','orange','#333'];
let btnGen = document.getElementById('btn-gen');
let colorGen = document.querySelector('.colorGen');
let container = document.querySelector('body');
console.log(container);
btnGen.addEventListener('click', ()=>{
    console.log("btn clicked")
    let index = randomColorCode();
    console.log(index);
       container.style.background = colors[index];
       colorGen.innerHTML =colors[index];
});
function randomColorCode(){
    return Math.floor( Math.random() * colors.length);
}