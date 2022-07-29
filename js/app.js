// active menu
var item = document.getElementsByClassName('item-link');
        console.log(item.length);
        for(let h = 0; h < item.length; h++){
            item[h].addEventListener('click', function(){
                let current = document.getElementsByClassName('active')[0];
            current.className = current.className.replace("active" , "");
            item[h].className = item[h].className + " active";
            });
        }

//copy color code 
let copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', ()=>{
           copyToCilpBoard();

        })
function copyToCilpBoard(){
    navigator.clipboard.writeText(document.getElementById('color-gen').innerText)
    .then(function(){
        let atr = document.getElementById('code');
            atr.classList.add("active1");
            copyBtn.style.background ="#134ad4";
        setTimeout(function(){
            atr.classList.remove("active1");
            copyBtn.style.background ="#5c81dc";
        },1500);
    });
}