const randomInt = (cb, min=1, max=10) => {
    setTimeout(() => {
        let value = Math.floor(Math.random()*(max - min) + min)
    cb(value)
    },Math.random()*1000)
    
}

const cache = {
    steps: null,
    timer: null
}
const animationStart = (value) => {
    cache.steps = value
    let container = document.getElementById('container')

    let box = document.createElement('div')
        box.setAttribute('id', 'box')
        box.setAttribute('style', 'transform: rotate(0deg)')
        container.appendChild(box)
        cache.timer = setInterval(animationSteps,500)


}
const animationSteps = () => {
    let box = document.getElementById('box')
    let angle = parseFloat(box.style.transform.replace('rotate(','').replace(')',''))
        angle += 18.5
        box.style.transform = `rotate(${angle}deg)`
        cache.steps--
        console.log(cache.steps);
        if(cache.steps == 0){
            clearInterval(cache.timer)
            animationStop()
        }
}
const animationStop = () => {
    const container = document.getElementById('container')
    container.removeChild(container.firstElementChild)
}

randomInt(animationStart, 8, 20)