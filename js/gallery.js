import './common'
import loader from './loader'
import '../scss/gallery/gallery.scss'
import imageLlist from '../images/gallery/image-list.js'
import imagesLoaded from 'imagesloaded'
require.context("../images/common", true);
require.context("../images/gallery",true)


const initLoader = ()=> {
    const gallery = document.querySelector('.gallery')
    gallery.appendChild(loader())
}
const removeLoader = ()=>{
    const gallery =document.querySelector('.gallery')
    const loader = document.querySelector('.loader')
    gallery.removeChild(loader)
}
function resizeGridItems(){
    const items = document.querySelectorAll('.item')
    items.forEach(item=>{
        imagesLoaded(item,(instance)=>{
            const item = instance.elements[0];
            const grid = document.querySelector('.wrapper')
            const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
            const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
            const rowSpan =  Math.floor((item.querySelector('.content').offsetHeight+rowGap)/(rowHeight+rowGap))
            item.style.gridRowEnd = "span "+ rowSpan;
        })
    })
    const gallery = document.querySelector('.wrapper')
    imagesLoaded(gallery,()=>{
        if(document.querySelector('.loader')) removeLoader()
        document.querySelectorAll('.item').forEach(item=> item.style.visibility = 'visible')
    })
}
function scrollHandler(){
    let debounce = null
    let imageSrcList = [...imageLlist]
    return function() {
        clearTimeout(debounce)
        debounce = setTimeout(()=>{
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop =  document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
            if(scrollTop + clientHeight >= scrollHeight - 100 ) {
                const lazyItems = imageSrcList.slice(0,10)
                imageSrcList = imageSrcList.slice(10)
                if(lazyItems.length) {
                initLoader()
                lazyItems.forEach(item =>{
                    const gridContainer = document.querySelector('.wrapper')
                    let newItem = document.createElement('div')
                    let image = document.createElement('img')
                    newItem.classList.add('item')
                    image.src = item
                    image.alt = 'blackpink gallery'
                    image.classList.add('content')
                    newItem.appendChild(image)
                    gridContainer.appendChild(newItem)
                })
                resizeGridItems()
            } else {
                window.removeEventListener('scroll',scrollHandler)
            }
        }
    },300)
    }
}
window.addEventListener('load',()=>{
    initLoader()
    resizeGridItems()
})
window.addEventListener('resize',resizeGridItems)
window.addEventListener('scroll',scrollHandler())