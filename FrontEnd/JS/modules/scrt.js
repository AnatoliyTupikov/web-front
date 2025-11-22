 import {generateCode} from "./module.js";      
   
        for (let prop in window)
        {
            console.log(prop);
        }
        addEventListener("load", (event) => {
            let btn = document.getElementById("btn");
            if(btn) btn.addEventListener('click', (event) => generateCode("Alex"))
        })