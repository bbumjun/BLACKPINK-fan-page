export default function loader () {
    const loader = document.createElement('div')
    loader.classList.add('loader')
    for (let i =0 ; i<3;i ++) {
        const dot = document.createElement('div')
        dot.classList.add('dots')
        loader.appendChild(dot)
    }
    return loader;
}
