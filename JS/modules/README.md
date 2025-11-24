# Modules

## Introdution

Из-за разрошегося js кода, когда в браузере пишут чуть ли не полноценные программы, нужна структуризация.
Модули - это один из ее способов.
Встроенная обработка модулей JavaScript связана с инструкциями [import](https://github.com/AnatoliyTupikov/web-front/blob/61c14286e7b826e8963e41cead6622cfb0f36cdf/JS/modules/scrt.js#L1) и [export](https://github.com/AnatoliyTupikov/web-front/blob/c0eacb4480c036bdff2ea72640f39494bc3994f4/JS/modules/module.mjs#L2).

### Main statements:

- Usual, the files with models code save with ".mjs" exctention (like **module.mjs**), just for more clarity. But not all browser can work with it, it needs carefully.
- You can export functions, ```var```, ```let```, ```const``` and classes. They need to be top-level items: for example, you can't use export inside a function
- The imported values are read-only views of the features that were exported. Similar to ```const``` variables (it isn't ```window``` property/ not the global scope), you cannot re-assign the variable that was imported, but you can still modify properties of object values. The value can only be re-assigned by the module exporting it
- Imports map [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)


### Main constrains:

- "Import" commands will be run only in the script tag with "module" type. Even if the script being imported contains the ```import``` command. [Example](https://github.com/AnatoliyTupikov/web-front/blob/61c14286e7b826e8963e41cead6622cfb0f36cdf/JS/modules/main.html#L4). [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#applying_the_module_to_your_html)
- The described above script tag will be parsed by a browser only througth a Web-server run. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for example. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_classic_scripts)

## Project structure
```
modules
 ┣ main.html
 ┣ module.mjs
 ┣ README.md
 ┗ scrt.js
```
**main.html** — file contains main html code and imports **scrt.js**, which contains the ```import``` command from **module.mjs**

## Documentation
```
export generateCode(parent_element)
```

Takes ```parent_element``` (for example, an element from the DOM). Inserts a ```div``` wrapper with ```class="generated-code-block``` and an ```<h*>``` element inside the ```parent_element``` via innerHTML.

### CSS
Selector ```.generated-code-block```


