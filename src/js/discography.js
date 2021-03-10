import "./common";
import "../scss/discography/discography.scss";
require.context("../images/common", true);
require.context("../images/discography", true);

const albumList = document.querySelector('#album-list')
albumList.addEventListener('click',({target})=>{
    const container = document.querySelector('#album-info')
    container.style.height = '100%';

    if(target.dataset.id){
        fetch(`http://localhost:3001/gallery/album-info/${target.dataset.id}`)
        .then(res=>res.json())
        .then(({albumInfo})=>{
            const title = container.querySelector('.album-info__detail__container__description__title')
            const description =container.querySelector('.album-info__detail__container__description__text')            
            const coverImage = container.querySelector('.album-info__detail__cover img')
            const video = container.querySelector('.album-info__detail__container__video iframe')
            coverImage.src = albumInfo.coverImageSrc
            video.src = albumInfo.videoSrc
            title.textContent = albumInfo.title
            description.textContent = albumInfo.text
        })
    }
})