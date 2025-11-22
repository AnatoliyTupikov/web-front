 import {generateCode} from "./module.mjs";      
   
        for (let prop in window)
        {
            console.log(prop);
        }
        addEventListener("load", (event) => {
            let btn = document.getElementById("btn");
            let parent_el = document.getElementById("p-element");
            if(btn) btn.addEventListener('click', (event) => generateCode(parent_el));
        })