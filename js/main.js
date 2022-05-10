let addList = []

document.getElementById('add').onclick = function () {
    
    let d = document.getElementById('inp').value

    let temp = {}
    temp.task = d
    temp.check = false

    let i = addList.length
    addList[i] = temp
    console.log(addList)
    outText()
}

let outText = function() {
    let addText = ''

    for (let key in addList) {
        if (addList[key].check == true) {
            addText += '<input type="checkbox" checked>'
        } else {
            addText += '<input type="checkbox">'
        }
        addText += addList[key].task + '<br>'        
    }

    document.getElementById('out').innerHTML = addText
}
