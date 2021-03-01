import './common'
import '../scss/gallery/gallery.scss'
import imagesLoaded from 'imagesloaded'
require.context("../images/common", true);
require.context("../images/gallery",true)


function resizeGridItems(){
    const items = document.querySelectorAll('.content')
    items.forEach(item=>{
        imagesLoaded(item,(instance)=>{
            const item = instance.elements[0];
            const grid = document.querySelector('.wrapper')
            const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
            const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
            const rowSpan =  Math.ceil((item.offsetHeight+rowGap)/(rowHeight+rowGap))
            item.style.gridRowEnd = "span "+rowSpan;
        })
    })
}

window.addEventListener('load',()=>{

    resizeGridItems()
})

window.addEventListener('resize',resizeGridItems)