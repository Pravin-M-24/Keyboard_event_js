
let text = document.getElementById("text_container");

let main = document.getElementById("main_container");

let div = document.createElement("div");
      div.classList.add("newDiv");

document.body.addEventListener("keydown" , (e)=>{
        let newKey = e.key;
        // newKey.classList.add("newKey");
       text.innerText =`You Pressed ${newKey}`;
        text.classList.add("key_color");
       div.innerText = `${e.keyCode}`;
     main.appendChild(div);
})