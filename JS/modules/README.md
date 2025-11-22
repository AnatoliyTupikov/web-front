# Modules

Из-за разрошегося js кода, когда в браузере пишут чуть ли не полноценные программы, нужна структуризация.
Модули - это один из ее способов.
Встроенная обработка модулей JavaScript связана с инструкциями [import](https://github.com/AnatoliyTupikov/web-front/blob/61c14286e7b826e8963e41cead6622cfb0f36cdf/JS/modules/main.html) и [export](https://github.com/AnatoliyTupikov/web-front/blob/61c14286e7b826e8963e41cead6622cfb0f36cdf/JS/modules/module.js).

### Main statements:
- Usual, the files with models code save with ".mjs" exctention (like module.mjs), just for more clarity. But not all browser can work with it, it needs carefully.

### Main
- "Import" command run only in the script tag with "module" type. [Example](https://github.com/AnatoliyTupikov/web-front/blob/61c14286e7b826e8963e41cead6622cfb0f36cdf/JS/modules/main.html#L4)