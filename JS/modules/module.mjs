
export function generateCode(el)
{
    if(!el) {
         console.log('"generateCode" function didn not get the parent element'); 
        return;
    }

    let new_el = document.createElement('div');
    new_el['className'] = 'generated-code-block';
    new_el.innerHTML =  `<h3>Hello, world!</h3>`;
    el.appendChild(new_el);       
}
    
