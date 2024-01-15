
let text = document.getElementById("text_container");
let main = document.getElementById("main_container");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

let div = document.createElement("div");
      div.classList.add("newDiv");

document.body.addEventListener("keydown" , (e)=>{
          audio.play();
        let newKey = e.key;
        // newKey.classList.add("newKey");
       text.innerText =`You Pressed ${newKey}`;
        text.classList.add("key_color");
       div.innerText = `${e.keyCode}`;
     main.appendChild(div);
})