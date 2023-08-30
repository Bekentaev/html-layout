/* 
Нужно поменять цвет у ячейк по диагонали
горизонтали
вертикали

*/



function tableColor(s, color) {
    let table = Array.from(document.body.firstElementChild.children);

    table.forEach(element => {
        let trElement = Array.from(element.children) // беру 
        console.log(trElement)
        trElement.forEach(function (tdEl, index) {
            let tdElement = Array.from(tdEl.children)
            if (s == "г") {
                trElement[2].style.backgroundColor = color;
            } else if (s == "в") {
                tdElement[2].style.backgroundColor = color;
            }
            tdElement.forEach(function (el, i) {
                if (index == i) {
                    if (s == "д") {
                        el.style.backgroundColor = color;
                    }
                }
            })
        })
    });

}


tableColor(prompt("Варианты |д-диагональ|г-горизонталь|в-вертикаль", "д"), prompt("Веберите цвет на английском языке, дефолт \"red\"", "red"))