import '../css/commonStyle.css'
import '../css/indexStyle.css'
import './common'
const defaultImgages = require.context('../img/common',true)
const indexImages= require.context('../img/index',true)
const backgroundImages = require.context('../img/background-img',true)


window.addEventListener('load',()=>{
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    header.classList.add('header--loaded')
    footer.classList.add('footer--loaded')

    const changeBackground = ()=>{
        const background = document.querySelector('.background')
        const bgUrlList = document.querySelectorAll('.url-list > li')
        const bgUrls = Array.from(bgUrlList).map(bg=>bg.dataset.url)
        let idx = 1

        bgUrlList.forEach(bg=> bg.style.setProperty('background',`url(${bg.dataset.url})`))
        return function() {
            console.log(idx)
            background.style.setProperty('background',`url(${bgUrls[idx++%bgUrls.length]})`)
            background.style.setProperty('background-size','cover')
            
        }
    }
    setInterval(changeBackground(),6000) 
})