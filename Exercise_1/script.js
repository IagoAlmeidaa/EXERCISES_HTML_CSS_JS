
function delayedNavigation(e) {
    e.preventDefault()
    const tempo = parseInt(e.target.getAttribute('delay5s'))
    console.log(`Saindo em ${tempo}s...`)
    regressivo(tempo, e.target.parentElement)
    setTimeout(() => {
        const link = e.target
        window.location.href = link.href
    }, tempo * 1000)
}

function regressivo(tempo, element) {
    setInterval(() => {
        element.innerHTML = `<p> ${tempo} Segundo(s)</p>`
        tempo--
    }, 1000);
}
//const a = document.querySelector('a')
//a.onclick = delayedNavigation
const a = document.querySelectorAll('[delay5s]')
a.forEach(e => e.onclick = delayedNavigation); 