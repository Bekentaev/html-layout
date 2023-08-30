/* 
Нужно собрать скрипт для:
получения тега <p> +
получения всех элементов тега <ul> +
получения второго имени в списке +
определения имени Пётр в списке*/

const pTag = document.body.firstElementChild;
const ulTag = Array.from(document.body.childNodes[3].children);

ulTag.forEach(element => {
    console.log(element.outerHTML)
});

console.log(pTag.outerHTML)
console.log(ulTag[2].outerHTML)
