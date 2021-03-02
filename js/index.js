import "../scss/index/index.scss";
import "./common";
import imagesLoaded from 'imagesloaded'
require.context("../images/common", true);
require.context("../images/index", true);

(function loadBgImg (){
    let bgImg = new Image()
    bgImg.src = '../../images/index/background.jpg'
    bgImg.onload = ()=>{
        document.querySelector('.background')
        .style
        .backgroundImage = `url(${bgImg.src})`
    }
})()
