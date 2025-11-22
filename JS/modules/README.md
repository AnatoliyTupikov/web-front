# Modules

## Introdution

Из-за разрошегося js кода, когда в браузере пишут чуть ли не полноценные программы, нужна структуризация.
Модули - это один из ее способов.
Встроенная обработка модулей JavaScript связана с инструкциями [import](https://github.com/AnatoliyTupikov/web-front/blob/61c14286e7b826e8963e41cead6622cfb0f36cdf/JS/modules/scrt.js#L1) и [export](https://github.com/AnatoliyTupikov/web-front/blob/c0eacb4480c036bdff2ea72640f39494bc3994f4/JS/modules/module.mjs#L2).

### Main statements:

- Usual, the files with models code save with ".mjs" exctention (like module.mjs), just for more clarity. But not all browser can work with it, it needs carefully.

### Main constrains:

- "Import" commands will be run only in the script tag with "module" type. Even if the script being imported contains the ```import``` command. [Example](https://github.com/AnatoliyTupikov/web-front/blob/61c14286e7b826e8963e41cead6622cfb0f36cdf/JS/modules/main.html#L4)
- The described above script tag will be parsed by a browser only througth a Web-server run. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for example.

## Project structure
```
modules
 ┣ main.html
 ┣ module.mjs
 ┣ README.md
 ┗ scrt.js
```
**main.html** — import **scrt.js** which contains the ```import``` command from **module.mjs**
