
export function generateCode(str)
{
    let main_el = document.getElementById("gen-code");

    if(!main_el) {
         console.log('"generateCode" function can not find element with "gen-code" id'); 
        return;
    }

    let new_el = document.createElement('div');
    new_el.innerHTML =  `<h3>Hello, ${str}!</h3>`;
    main_el.appendChild(new_el);

       
}
    
