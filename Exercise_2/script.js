document.oncontextmenu = new Function("return false;");

const item = document.querySelectorAll('div')

item.forEach(item => {
    item.onmousemove = e => { 
        item.style.cursor = 'move'
        if (e.buttons) {
            item.style.position = 'absolute'
            e.target.style.top = `${e.clientY - (item.clientHeight / 2)}px`
            e.target.style.left = `${e.clientX - (item.clientWidth / 2)}px`
        }
    } 
})
