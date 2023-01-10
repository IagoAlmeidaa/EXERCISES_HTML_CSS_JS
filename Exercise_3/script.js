function setOndrop(item, index) {
    item.draggable = true
    item.id = item.id || `draggable-item-${index}`
    item.ondragstart = e =>
        e.dataTransfer.setData('item-id', e.target.id)
}

const btn = document.querySelector('#send')
btn.addEventListener("click", function (e) {
    e.preventDefault()

    const nome = document.querySelector('#nome')
    const value = nome.value
    const body = document.querySelector('.left')
    const p = document.createElement('p')
    p.innerHTML = `${nome.value}`
    nome.value = ''
    const div = document.createElement('div')
    div.appendChild(p)
    body.appendChild(div)
    div.classList.add('item')
    const items = document.querySelectorAll('[w-dropzone] .item')
    setOndrop(div, items.length)
    //div.setAttribute("draggable", true)
})

const items = document.querySelectorAll('[w-dropzone] .item')

items.forEach(setOndrop)

const dropzones = document.querySelectorAll('[w-dropzone]')
dropzones.forEach(dropzone => {
    dropzone.ondragover = e => e.preventDefault()
    dropzone.ondrop = function (e) {
        const id = e.dataTransfer.getData('item-id')
        const item = document.getElementById(id)
        //e.target.appendChild(item)
        dropzone.appendChild(item)
    }
})
