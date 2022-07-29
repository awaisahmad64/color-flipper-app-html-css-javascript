// infinite color generate
let colors = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let btnGen = document.getElementById('btn-gen');
        let colorGen = document.querySelector('.colorGen');
        let container = document.querySelector('body');
        console.log(container);
        btnGen.addEventListener('click', ()=>{
            console.log("btn clicked")
            var colorHex = "#";
            for(let i = 0; i < 6; i++)
            {   
                var index = randomColorCode();
                console.log(index);
                colorHex += colors[index];
            }
               container.style.background = colorHex;
               colorGen.innerHTML =colorHex;
        });
        function randomColorCode(){
            return Math.floor( Math.random() * colors.length);
        }