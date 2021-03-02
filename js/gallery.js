import './common'
import '../scss/gallery/gallery.scss'
import imagesLoaded from 'imagesloaded'
require.context("../images/common", true);
require.context("../images/gallery",true)


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
            item.style.visibility = 'visible';
        })
    })
}

window.addEventListener('load',()=>{
    resizeGridItems()
})

window.addEventListener('resize',resizeGridItems)